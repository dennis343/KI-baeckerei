import { leadSchema, type LeadInput } from "@/lib/schemas/lead-schema";
import { err, ok, type Result } from "@/core/domain/lead";
import { logger } from "@/infrastructure/logger";

/**
 * ADR: Lead submission uses a thin use-case layer that validates,
 * logs (structured), and optionally forwards to a Make.com webhook.
 * Feature-flagged via LEAD_WEBHOOK_URL — absent env ⇒ no outbound call,
 * still a successful Result so the UI degrades gracefully.
 */

type SubmitError =
  | { kind: "validation"; fieldErrors: Record<string, string[]> }
  | { kind: "upstream"; status: number }
  | { kind: "network" };

export async function submitLead(
  raw: unknown,
  correlationId: string,
): Promise<Result<{ accepted: true }, SubmitError>> {
  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    logger.warn(
      { correlationId, issues: parsed.error.flatten().fieldErrors },
      "lead.validation.failed",
    );
    return err({
      kind: "validation",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    });
  }

  // Honeypot check (bots fill hidden field)
  if (parsed.data.website && parsed.data.website.length > 0) {
    logger.warn({ correlationId }, "lead.honeypot.triggered");
    return ok({ accepted: true });
  }

  const data: LeadInput = parsed.data;

  logger.info(
    {
      correlationId,
      topic: data.topic,
      actionType: "lead.submit",
    },
    "lead.submit.received",
  );

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    logger.info(
      { correlationId },
      "lead.webhook.skipped.env_missing",
    );
    return ok({ accepted: true });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...data, correlationId }),
    });

    if (!res.ok) {
      logger.error(
        { correlationId, status: res.status },
        "lead.webhook.upstream.failed",
      );
      return err({ kind: "upstream", status: res.status });
    }

    return ok({ accepted: true });
  } catch (error) {
    logger.error(
      { correlationId, error: (error as Error).message },
      "lead.webhook.network.failed",
    );
    return err({ kind: "network" });
  }
}

import { NextResponse } from "next/server";
import { submitLead } from "@/core/use-cases/submit-lead";
import { logger } from "@/infrastructure/logger";

/**
 * POST /api/lead
 * Thin transport layer: parses JSON → delegates to use-case → maps Result to HTTP.
 */
export async function POST(request: Request) {
  const correlationId =
    request.headers.get("x-correlation-id") ??
    `req_${Math.random().toString(36).slice(2, 10)}`;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    logger.warn({ correlationId }, "lead.api.invalid_json");
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const result = await submitLead(body, correlationId);

  if (!result.ok) {
    if (result.error.kind === "validation") {
      return NextResponse.json(
        {
          ok: false,
          error: "validation",
          fieldErrors: result.error.fieldErrors,
        },
        { status: 422 },
      );
    }
    if (result.error.kind === "upstream") {
      return NextResponse.json(
        { ok: false, error: "upstream" },
        { status: 502 },
      );
    }
    return NextResponse.json(
      { ok: false, error: "network" },
      { status: 503 },
    );
  }

  return NextResponse.json(
    { ok: true },
    {
      status: 200,
      headers: { "x-correlation-id": correlationId },
    },
  );
}

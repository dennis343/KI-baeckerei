/**
 * Domain: Lead
 * Pure model, no infrastructure dependencies.
 */

export type LeadTopic =
  | "solopreneur"
  | "unternehmen"
  | "avgs"
  | "concierge"
  | "sonstiges";

export type Lead = {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly topic: LeadTopic;
  readonly message?: string;
  readonly consent: true;
  readonly createdAt: Date;
};

/**
 * Result pattern — exceptions reserved for true system failures.
 */
export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export const ok = <T>(value: T): Result<T, never> => ({ ok: true, value });
export const err = <E>(error: E): Result<never, E> => ({ ok: false, error });

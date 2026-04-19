import { z } from "zod";

/**
 * Lead submission schema — used on both client (RHF) and server (Action).
 * The schema is the contract: no lead passes without passing here.
 */
export const leadSchema = z.object({
  name: z
    .string({ required_error: "Bitte geben Sie Ihren Namen an." })
    .trim()
    .min(2, "Der Name ist zu kurz.")
    .max(120, "Der Name ist zu lang."),

  email: z
    .string({ required_error: "Bitte geben Sie eine E-Mail-Adresse an." })
    .trim()
    .email("Diese E-Mail-Adresse wirkt nicht gültig."),

  topic: z.enum(["solopreneur", "unternehmen", "avgs", "prophylaxe-warteliste", "concierge", "sonstiges"], {
    required_error: "Bitte wählen Sie ein Thema.",
    invalid_type_error: "Ungültiges Thema.",
  }),

  message: z
    .string()
    .trim()
    .max(2000, "Die Nachricht ist zu lang.")
    .optional(),

  consent: z.literal(true, {
    errorMap: () => ({
      message: "Ohne Einwilligung können wir Ihre Anfrage nicht bearbeiten.",
    }),
  }),

  // Honeypot — hidden field, must stay empty
  website: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

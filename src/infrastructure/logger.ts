import pino from "pino";

/**
 * Structured logger — replaces console.log throughout the app.
 * Edge-runtime-safe: no transports outside of development.
 */
export const logger = pino({
  level: process.env.LOG_LEVEL ?? "info",
  base: { service: "wissensreich-academy" },
  ...(process.env.NODE_ENV === "development"
    ? {
        transport: {
          target: "pino-pretty",
          options: { colorize: true },
        },
      }
    : {}),
});

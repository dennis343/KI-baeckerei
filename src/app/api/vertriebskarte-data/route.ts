import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import {
  SALES_CASES,
  TOTAL_CASES,
  TOTAL_SUMME,
} from "@/lib/server/sales-cases-data";
import type { SalesCasesPayload } from "@/lib/sales-cases";

const COOKIE_NAME = "vk-session";
const COOKIE_VALUE = "authenticated";

export const dynamic = "force-dynamic";

/**
 * Liefert die Vertriebsfall-Daten ausschließlich an Clients, die über den
 * httpOnly `vk-session`-Cookie authentifiziert sind. Ohne Cookie → 401,
 * damit Crawler, Suchmaschinen und nicht eingeloggte Besucher keinen
 * Zugriff auf die Fall-Informationen erhalten.
 */
export async function GET() {
  const jar = await cookies();
  const session = jar.get(COOKIE_NAME);

  if (session?.value !== COOKIE_VALUE) {
    return NextResponse.json(
      { error: "unauthorized" },
      {
        status: 401,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }

  const payload: SalesCasesPayload = {
    cases: SALES_CASES,
    totalSumme: TOTAL_SUMME,
    totalCases: TOTAL_CASES,
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "no-store, private, max-age=0",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

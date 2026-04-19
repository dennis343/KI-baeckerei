import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const COOKIE_NAME = "vk-session";
const COOKIE_VALUE = "authenticated";
const MAX_AGE = 60 * 60 * 8; // 8 hours

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const password = typeof body.password === "string" ? body.password : "";
    const expected = process.env.VERTRIEBSKARTE_PASSWORD;

    if (!expected) {
      return NextResponse.json(
        { ok: false, error: "Nicht konfiguriert" },
        { status: 503 },
      );
    }

    if (password !== expected) {
      return NextResponse.json(
        { ok: false, error: "Falsches Passwort" },
        { status: 401 },
      );
    }

    const res = NextResponse.json({ ok: true });
    // Pfad "/" damit der Cookie sowohl an /vertriebskarte als auch an die
    // geschützten API-Routen (/api/vertriebskarte-*) gesendet wird.
    res.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: MAX_AGE,
    });
    return res;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage" },
      { status: 400 },
    );
  }
}

export async function GET() {
  const jar = await cookies();
  const session = jar.get(COOKIE_NAME);
  const authenticated = session?.value === COOKIE_VALUE;
  return NextResponse.json({ authenticated });
}

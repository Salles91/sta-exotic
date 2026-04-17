import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Placeholder: em produção vira notify via Resend/Slack/CRM
    // Por ora só loga e responde OK. Dono decide o pipe real depois.
    console.log("[retailer wholesale request]", {
      at: new Date().toISOString(),
      ...body,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

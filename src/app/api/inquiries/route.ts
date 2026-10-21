import { NextResponse } from "next/server";

import {
  isHoneypotSubmission,
  parseInquiryPayload,
} from "@/lib/free-quote";
import { deliverInquiry, getResendConfig } from "@/lib/resend-inquiries";

export const runtime = "nodejs";

const MAX_REQUEST_SIZE = 30_000;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > MAX_REQUEST_SIZE) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  const body = (await request.json().catch(() => null)) as unknown;

  // Silently accept honeypot submissions so automated senders receive no clues.
  if (isHoneypotSubmission(body)) {
    return NextResponse.json({
      data: { customerConfirmationSent: false },
    });
  }

  const parsed = parseInquiryPayload(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.message, fields: parsed.errors },
      { status: 400 },
    );
  }

  const resendConfig = getResendConfig();

  if (!resendConfig) {
    return NextResponse.json(
      { error: "Online requests are temporarily unavailable. Please call us directly." },
      { status: 503 },
    );
  }

  try {
    const result = await deliverInquiry(parsed.data, resendConfig);

    return NextResponse.json({ data: result });
  } catch (error) {
    console.error("Unable to deliver free quote inquiry through Resend.", error);

    return NextResponse.json(
      { error: "We could not send your request. Please call us directly." },
      { status: 502 },
    );
  }
}

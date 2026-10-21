import type { InquiryPayload } from "./free-quote";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export interface ResendConfig {
  apiKey: string;
  fromEmail: string;
  toEmail: string;
}

interface ResendEmail {
  from: string;
  to: string[];
  subject: string;
  html: string;
  text: string;
  reply_to?: string;
}

interface DeliveryResult {
  inquiryEmailId: string;
  customerConfirmationSent: boolean;
}

type Fetcher = typeof fetch;

export class ResendDeliveryError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ResendDeliveryError";
  }
}

export function getResendConfig(
  environment: NodeJS.ProcessEnv = process.env,
): ResendConfig | null {
  const apiKey = environment.RESEND_API_KEY?.trim();
  const fromEmail = environment.RESEND_FROM_EMAIL?.trim();
  const toEmail = environment.RESEND_TO_EMAIL?.trim();

  if (!apiKey || !fromEmail || !toEmail) {
    return null;
  }

  return { apiKey, fromEmail, toEmail };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function optionalValue(value: string): string {
  return value || "Not provided";
}

function formatAddress(inquiry: InquiryPayload): string {
  return [inquiry.address, inquiry.city, inquiry.state, inquiry.zipCode]
    .filter(Boolean)
    .join(", ");
}

export function createOwnerInquiryEmail(
  inquiry: InquiryPayload,
  config: ResendConfig,
): ResendEmail {
  const address = formatAddress(inquiry);
  const rows = [
    ["Name", inquiry.name],
    ["Phone", inquiry.phone],
    ["Email", inquiry.email],
    ["Service", inquiry.service],
    ["System", optionalValue(inquiry.systemType)],
    ["Address", optionalValue(address)],
    ["Details", optionalValue(inquiry.details)],
  ] as const;
  const text = [
    "New free quote request",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#475569">${escapeHtml(label)}</th><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return {
    from: config.fromEmail,
    to: [config.toEmail],
    reply_to: inquiry.email,
    subject: `Free quote request: ${inquiry.service} — ${inquiry.name}`,
    text,
    html: `<div style="font-family:Arial,sans-serif;color:#0f172a"><h1 style="color:#1865d9">New free quote request</h1><table style="border-collapse:collapse;width:100%;max-width:680px">${htmlRows}</table></div>`,
  };
}

export function createCustomerConfirmationEmail(
  inquiry: InquiryPayload,
  config: ResendConfig,
): ResendEmail {
  const firstName = inquiry.name.split(/\s+/)[0] || inquiry.name;

  return {
    from: config.fromEmail,
    to: [inquiry.email],
    reply_to: config.toEmail,
    subject: "We received your One Call Heating & Air request",
    text: `Hi ${firstName},\n\nThanks for contacting One Call Heating & Air. We received your request for ${inquiry.service}. Our team will review it and follow up as soon as possible.\n\nFor an active heating or cooling emergency, call (801) 864-2045.\n\nOne Call Heating & Air`,
    html: `<div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6"><h1 style="color:#1865d9">We received your request.</h1><p>Hi ${escapeHtml(firstName)},</p><p>Thanks for contacting One Call Heating &amp; Air. We received your request for <strong>${escapeHtml(inquiry.service)}</strong>. Our team will review it and follow up as soon as possible.</p><p>For an active heating or cooling emergency, call <a href="tel:+18018642045">(801) 864-2045</a>.</p><p>One Call Heating &amp; Air</p></div>`,
  };
}

async function sendResendEmail(
  email: ResendEmail,
  config: ResendConfig,
  idempotencyKey: string,
  fetcher: Fetcher,
): Promise<string> {
  const response = await fetcher(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
      "User-Agent": "one-call-hvac/1.0",
    },
    body: JSON.stringify(email),
  });
  const result = (await response.json().catch(() => null)) as
    | { id?: string; message?: string }
    | null;

  if (!response.ok || !result?.id) {
    throw new ResendDeliveryError(
      result?.message ?? "Resend rejected the email request.",
      response.status,
    );
  }

  return result.id;
}

export async function deliverInquiry(
  inquiry: InquiryPayload,
  config: ResendConfig,
  fetcher: Fetcher = fetch,
): Promise<DeliveryResult> {
  const requestId = crypto.randomUUID();
  const inquiryEmailId = await sendResendEmail(
    createOwnerInquiryEmail(inquiry, config),
    config,
    `inquiry-${requestId}`,
    fetcher,
  );

  try {
    await sendResendEmail(
      createCustomerConfirmationEmail(inquiry, config),
      config,
      `confirmation-${requestId}`,
      fetcher,
    );

    return { inquiryEmailId, customerConfirmationSent: true };
  } catch {
    return { inquiryEmailId, customerConfirmationSent: false };
  }
}

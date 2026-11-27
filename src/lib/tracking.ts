type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function pushDataLayerEvent(payload: DataLayerEvent) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function toE164UsPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  return "";
}

/**
 * Fired only after /api/inquiries confirms the request was accepted.
 * GTM listens for the `quote_form_success` custom event to record the
 * Google Ads "Contact Form Submission" conversion and enhanced conversions.
 */
export function trackQuoteFormSuccess({
  email,
  phone,
  service,
}: {
  email: string;
  phone: string;
  service: string;
}) {
  pushDataLayerEvent({
    event: "quote_form_success",
    form_service: service,
    user_data: {
      email: email.trim().toLowerCase(),
      phone_number: toE164UsPhone(phone),
    },
  });
}

/**
 * Fired when a visitor taps any tel: link. GTM listens for the
 * `phone_click` custom event to record the Google Ads phone-click conversion.
 */
export function trackPhoneClick(href: string, pagePath: string) {
  pushDataLayerEvent({
    event: "phone_click",
    phone_href: href,
    click_page: pagePath,
  });
}

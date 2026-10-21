import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { SITE_URL } from "@/config/site";

const CANONICAL_HOSTNAME = new URL(SITE_URL).hostname;

// OpenNext currently requires Edge middleware for Cloudflare deployments.
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.hostname === CANONICAL_HOSTNAME &&
    request.nextUrl.protocol === "http:"
  ) {
    const secureUrl = request.nextUrl.clone();
    secureUrl.protocol = "https:";

    return NextResponse.redirect(secureUrl, 308);
  }

  return NextResponse.next();
}

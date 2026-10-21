# One Call Heating & Air

A Next.js + React + TypeScript website for One Call Heating & Air in northern Utah.

Production URL: `https://utahonecall.com`

## Pages

- `/` — Home
- `/services` — Services
- `/about` — About
- `/about/social-media` — HVAC tips and project updates
- `/location` — Seven-county northern Utah service area
- `/emergency` — 24/7 emergency HVAC guidance
- `/contact` — Contact and service request
- `/404` — Branded not-found page

Unknown URLs render the same not-found page.

## Development

Use Node.js 22.9 or newer and npm 11.11.1. With `nvm`, the repository pin can
select the supported Node 22 release line:

```bash
nvm use
npm ci
```

For quote-form email delivery, create `.env.local` from the template when that
file does not already exist, then replace the example values locally:

```bash
cp .env.example .env.local
npm run dev
```

The development server runs at `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

`npm run build` runs the Next.js production build and packages it into `.open-next/` for Cloudflare. Use `npm run next:build` when only the local `.next/` output is needed.

Stop `npm run dev` before running a production build. Next.js development and
production builds both write under `.next/`; running them concurrently can
invalidate the active development server cache.

## Project Structure

```text
src/
  app/          Next.js App Router routes and route metadata
  components/   Shared link, image, and route behavior
  config/       Business details and route constants
  hooks/        Shared browser behavior
  screens/      Reusable page compositions and visual sections
    home/       Home sections, data, primitives, and CSS
    services/   Services sections, data, primitives, and CSS
    about/      About sections, data, primitives, and CSS
    contact/    Contact sections, data, primitives, and CSS
    location/   Service-area sections, county/city data, and CSS
public/
  onecall-heating-and-air/   Site images and SVG assets
```

## Hosting

The site deploys through OpenNext to a Node.js-compatible Cloudflare Worker.
`wrangler.jsonc` publishes `.open-next/worker.js` and `.open-next/assets`, and
maps the Worker to `utahonecall.com`.

```bash
npm run deploy
```

For Cloudflare Builds, use `npm run build` as the build command and
`npx wrangler deploy` as the deploy command.

The contact form posts to the server-owned `/api/inquiries` route, and page styles currently load Archivo Black and Inter from Google Fonts.

## Resend Quote Emails

The free quote form uses MUI fields in the browser and validates the request
again on the server before sending email through Resend. Copy `.env.example` to
`.env.local` and configure:

```bash
RESEND_API_KEY=re_your_server_only_key
RESEND_FROM_EMAIL="One Call Heating & Air <quotes@utahonecall.com>"
RESEND_TO_EMAIL=brownzowl4626@gmail.com
```

Add and verify `utahonecall.com` (or another domain you own) in Resend,
then add the exact SPF and DKIM records Resend provides to Cloudflare DNS. The
sender address must use that verified domain.

For the deployed Worker, store `RESEND_API_KEY` as an encrypted Cloudflare
secret. `RESEND_FROM_EMAIL` and `RESEND_TO_EMAIL` are checked into the `vars`
block in `wrangler.jsonc`. The API key is server-only and must never use a
`NEXT_PUBLIC_` prefix.

Each valid submission sends the business notification first, then attempts a
customer confirmation. If Resend is not configured, the form displays a phone
fallback instead of losing the request silently.

## Service Area Map

The homepage embeds the public One Call Google My Maps service-area map. Its
map ID is configured with:

```bash
NEXT_PUBLIC_GOOGLE_SERVICE_AREA_MAP_ID=1EVCcWbvQk2b4XwJIXnlzK7-TliTsDSU
```

This is a public Google My Maps identifier, not an API secret. The production
value is checked into the `vars` block in `wrangler.jsonc`, and the application
keeps the same public ID as a build-time fallback so the statically rendered
homepage map also works in clean builds.

## Google Reviews

The homepage uses a manually maintained review dataset in
`src/lib/google-reviews.ts`. No Google Places API key is required. When adding
or changing a review, preserve the author’s wording, set the captured relative
date, and keep the disclosure accurate because the content does not refresh
automatically.

export const ASSET_BASE = "/onecall-heating-and-air";
export const SITE_URL = "https://utahonecall.com";
export const SITE_NAME = "One Call Heating & Air";
export const SITE_LANGUAGE = "en-US";
export const SITE_OPEN_GRAPH_LOCALE = "en_US";
export const SITE_DESCRIPTION =
  "Owner-operated HVAC from Brigham City across northern Utah. Furnace and AC install, 24/7 repair, tune-ups, and maintenance plans. (801) 864-2045.";
export const SITE_LOGO_PATH = `${ASSET_BASE}/logo.png`;
export const SITE_LOGO_URL = new URL(SITE_LOGO_PATH, SITE_URL).toString();
export const SITE_LOGO_WIDTH = 1051;
export const SITE_LOGO_HEIGHT = 718;
export const SITE_PREVIEW_IMAGE_PATH = `${ASSET_BASE}/hero-cooling-summer.jpg`;
export const SITE_PREVIEW_IMAGE_URL = new URL(
  SITE_PREVIEW_IMAGE_PATH,
  SITE_URL,
).toString();
export const SITE_PREVIEW_IMAGE_WIDTH = 1672;
export const SITE_PREVIEW_IMAGE_HEIGHT = 941;
export const SITE_PREVIEW_IMAGE_ALT =
  "Northern Utah home with outdoor air conditioning equipment";
export const HOME_ROUTE = ROUTE_PATHS.home;
export const SERVICES_ROUTE = ROUTE_PATHS.services;
export const ABOUT_ROUTE = ROUTE_PATHS.about;
export const SOCIAL_MEDIA_ROUTE = ROUTE_PATHS.socialMedia;
export const LOCATION_ROUTE = ROUTE_PATHS.location;
export const EMERGENCY_ROUTE = ROUTE_PATHS.emergency;
export const CONTACT_ROUTE = ROUTE_PATHS.contact;
export const FAQ_ROUTE = ROUTE_DESTINATIONS.faq;
export const PRICING_ROUTE = ROUTE_DESTINATIONS.pricing;
export const SERVICE_PLANNING_ROUTE = ROUTE_DESTINATIONS.servicePlanning;
export const INQUIRIES_API_ROUTE = OPERATIONAL_ROUTE_PATHS.inquiriesApi;
export const PHONE_NUMBER = "(801) 864-2045";
export const PHONE = PHONE_NUMBER;
export const PHONE_HREF = "tel:+18018642045";
export const PHONE_E164 = "+18018642045";
export const SMS_HREF = `sms:${PHONE_E164}`;
export const EMAIL = "brownzowl4626@gmail.com";
export const PUBLIC_CONTENT_LAST_REVIEWED = "2026-08-06";
export const PUBLIC_CONTENT_LAST_REVIEWED_LABEL = "August 6, 2026";
import {
  OPERATIONAL_ROUTE_PATHS,
  ROUTE_DESTINATIONS,
  ROUTE_PATHS,
} from "@/config/route-paths";

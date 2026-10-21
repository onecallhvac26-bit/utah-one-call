const DEFAULT_GOOGLE_SERVICE_AREA_MAP_ID =
  "1EVCcWbvQk2b4XwJIXnlzK7-TliTsDSU";

export const GOOGLE_SERVICE_AREA_MAP_ID =
  process.env.NEXT_PUBLIC_GOOGLE_SERVICE_AREA_MAP_ID?.trim() ||
  DEFAULT_GOOGLE_SERVICE_AREA_MAP_ID;

export function createGoogleServiceAreaMapEmbedUrl(
  mapId: string = GOOGLE_SERVICE_AREA_MAP_ID,
) {
  const embedUrl = new URL("https://www.google.com/maps/d/embed");

  embedUrl.searchParams.set("mid", mapId);
  embedUrl.searchParams.set("ehbc", "2E312F");
  embedUrl.searchParams.set("ll", "41.22727147780659,-112.45189564265887");
  // Zoom out enough to keep the full northern Utah service boundary visible.
  embedUrl.searchParams.set("z", "8");

  return embedUrl.toString();
}

export const GOOGLE_SERVICE_AREA_MAP_EMBED_URL =
  createGoogleServiceAreaMapEmbedUrl();

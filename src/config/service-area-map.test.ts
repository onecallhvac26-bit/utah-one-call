import { describe, expect, it } from "vitest";

import {
  GOOGLE_SERVICE_AREA_MAP_EMBED_URL,
  GOOGLE_SERVICE_AREA_MAP_ID,
  createGoogleServiceAreaMapEmbedUrl,
} from "./service-area-map";

describe("service-area map configuration", () => {
  it("uses the public One Call Google My Maps ID", () => {
    const embedUrl = new URL(GOOGLE_SERVICE_AREA_MAP_EMBED_URL);

    expect(embedUrl.origin).toBe("https://www.google.com");
    expect(embedUrl.pathname).toBe("/maps/d/embed");
    expect(embedUrl.searchParams.get("mid")).toBe(GOOGLE_SERVICE_AREA_MAP_ID);
    expect(embedUrl.searchParams.get("ehbc")).toBe("2E312F");
    expect(embedUrl.searchParams.get("ll")).toBe(
      "41.22727147780659,-112.45189564265887",
    );
    expect(embedUrl.searchParams.get("z")).toBe("8");
  });

  it("can build an embed URL from a deployment-provided map ID", () => {
    const embedUrl = new URL(createGoogleServiceAreaMapEmbedUrl("public-map-id"));

    expect(embedUrl.searchParams.get("mid")).toBe("public-map-id");
  });
});

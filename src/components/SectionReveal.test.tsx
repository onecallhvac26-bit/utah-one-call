import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { SectionReveal } from "./SectionReveal";

describe("SectionReveal prerendering", () => {
  it("keeps primary content visible before client-side animation starts", () => {
    const markup = renderToStaticMarkup(
      <SectionReveal index={0}>
        <p>Search-visible service content</p>
      </SectionReveal>,
    );

    expect(markup).toContain("Search-visible service content");
    expect(markup).not.toContain("opacity:0");
    expect(markup).not.toContain("translateX");
  });
});

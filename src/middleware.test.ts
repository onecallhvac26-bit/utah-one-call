import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";

import { middleware } from "./middleware";

describe("HTTPS redirect middleware", () => {
  it("permanently redirects HTTP requests without changing the path or query", () => {
    const response = middleware(
      new NextRequest("http://utahonecall.com/services?source=google"),
    );

    expect(response.status).toBe(308);
    expect(response.headers.get("location")).toBe(
      "https://utahonecall.com/services?source=google",
    );
  });

  it("allows HTTPS requests to continue", () => {
    const response = middleware(
      new NextRequest("https://utahonecall.com/services"),
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("x-middleware-next")).toBe("1");
    expect(response.headers.has("location")).toBe(false);
  });

  it("allows local HTTP development requests to continue", () => {
    const response = middleware(
      new NextRequest("http://localhost:3000/services"),
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("x-middleware-next")).toBe("1");
    expect(response.headers.has("location")).toBe(false);
  });
});

/* @vitest-environment jsdom */

import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { RouteEffects } from "@/components/RouteEffects";

vi.mock("next/navigation", () => ({
  usePathname: () => "/services",
}));

describe("RouteEffects", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    cleanup();
  });

  it("scrolls to the top after pathname navigation without a hash", async () => {
    window.history.replaceState(null, "", "/services");
    render(<RouteEffects />);

    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalledWith({ left: 0, top: 0 });
    });
  });

  it("scrolls to an existing hash target", async () => {
    const target = document.createElement("div");
    target.id = "repair";
    target.scrollIntoView = vi.fn();
    document.body.append(target);
    window.history.replaceState(null, "", "/services#repair");

    render(<RouteEffects />);

    await waitFor(() => {
      expect(target.scrollIntoView).toHaveBeenCalled();
    });
  });
});

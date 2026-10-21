/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PHONE_HREF, PHONE_NUMBER, SMS_HREF } from "@/config/site";

import { ResponsiveHeaderContactActions } from "./ResponsiveHeaderContactActions";

describe("ResponsiveHeaderContactActions", () => {
  it("links the call and text icons to the configured business number", () => {
    render(<ResponsiveHeaderContactActions />);

    expect(
      screen.getByRole("link", { name: `Call ${PHONE_NUMBER}` }),
    ).toHaveAttribute("href", PHONE_HREF);
    expect(
      screen.getByRole("link", { name: `Text ${PHONE_NUMBER}` }),
    ).toHaveAttribute("href", SMS_HREF);
  });
});

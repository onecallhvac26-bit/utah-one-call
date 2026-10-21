/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { FreeQuoteForm } from "./FreeQuoteForm";

describe("FreeQuoteForm optional details", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  afterEach(() => cleanup());

  it("opens and closes the optional property fields from the disclosure", async () => {
    const user = userEvent.setup();

    render(<FreeQuoteForm />);

    const toggle = screen.getByRole("button", {
      name: /add property and system details/i,
    });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByLabelText(/system type/i)).not.toBeInTheDocument();

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(await screen.findByLabelText(/system type/i)).toBeInTheDocument();

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await waitFor(() => {
      expect(screen.queryByLabelText(/system type/i)).not.toBeInTheDocument();
    });
  });
});

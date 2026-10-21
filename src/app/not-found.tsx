import type { Metadata } from "next";

import NotFoundPage from "@/screens/NotFoundPage";
import "@/screens/not-found/not-found.css";

export const metadata: Metadata = {
  title: {
    absolute: "Page Not Found | One Call Heating & Air",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}

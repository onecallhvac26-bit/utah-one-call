import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import HomePage from "@/screens/HomePage";
import "@/screens/contact/free-quote-form.css";
import "@/screens/home/home.css";

// Draft: the previous homepage, kept for reference. Not indexed, not in the sitemap, not linked.
export const metadata: Metadata = createPageMetadata({
  title: "Draft: Previous Homepage | One Call Heating & Air",
  description: "Archived draft of the previous One Call Heating & Air homepage.",
  path: "/draft/old-homepage",
  indexable: false,
});

export default function Page() {
  return <HomePage />;
}

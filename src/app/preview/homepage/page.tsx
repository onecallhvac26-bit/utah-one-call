import { permanentRedirect } from "next/navigation";

// The homepage preview went live at "/". Keep old review links working.
export default function Page() {
  permanentRedirect("/");
}

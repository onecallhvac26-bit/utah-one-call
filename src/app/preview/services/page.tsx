import { permanentRedirect } from "next/navigation";

// The services preview went live at /services. Keep old review links working.
export default function Page() {
  permanentRedirect("/services");
}

import { Image } from "@/components/Image";
import { ASSET_BASE } from "@/config/site";

export function Logo({ mobile = false }: { mobile?: boolean }) {
  return (
    <Image
      src={`${ASSET_BASE}/logo.png`}
      alt="One Call Heating & Air"
      width={1051}
      height={718}
      priority
      className={mobile ? "oc-mobile-logo-image" : "oc-logo-image"}
    />
  );
}

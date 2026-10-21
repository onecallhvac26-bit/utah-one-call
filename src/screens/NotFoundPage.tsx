import { Image } from "@/components/Image";
import { Link } from "@/components/Link";
import { SectionReveal } from "@/components/SectionReveal";
import { PHONE, PHONE_HREF } from "@/config/site";

export default function NotFoundPage() {
  return (
    <SectionReveal index={0}>
      <main className="not-found">
        <Link href="/" aria-label="One Call Heating & Air home">
          <Image
            src="/onecall-heating-and-air/logo.png"
            alt="One Call Heating & Air"
            width={1051}
            height={718}
            priority
          />
        </Link>
        <p className="not-found-code">404</p>
        <h1>This page is out of service.</h1>
        <p>
          The address may have changed, but One Call is still here when your
          heating or cooling system needs help.
        </p>
        <div className="not-found-actions">
          <Link href="/">Back Home</Link>
          <a href={PHONE_HREF}>Call {PHONE}</a>
        </div>
      </main>
    </SectionReveal>
  );
}

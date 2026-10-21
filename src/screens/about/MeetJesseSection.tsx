import { PHONE, EMAIL } from "@/config/site";
import { Icon } from "./Icon";

export function MeetJesseSection() {
  return (
    <section
      className="oca-section oca-soft"
      data-section="meet jesse."
      aria-label="Meet Jesse."
    >
      <div className="oca-container">
        <div className="oca-section-head is-centered">
          <div className="oca-eyebrow">The Owner</div>
          <h2>Meet <em>Jesse.</em></h2>
          <p>
            Founder, lead tech, and the voice on the phone when you call. The
            name on the truck — and the answer when something goes wrong with
            the system.
          </p>
        </div>
        <div className="oca-owner oca-airflow">
          <div className="oca-owner-label">Founder / Lead Tech</div>
          <h3>Jesse</h3>
          <div className="oca-owner-role">Owner · Install Lead · 24/7 Service</div>
          <p>
            Founded One Call Heating & Air because northern Utah — Salt Lake to
            the Idaho border — deserved an HVAC shop that answered its own
            phone. Picks up calls personally, including at 11 pm in January when
            the furnace dies. On-site for every install, every diagnostic, every
            commissioning. No call center, no dispatcher, no &quot;let me
            transfer you.&quot; One number, one accountable answer, every time.
          </p>
          <div className="oca-owner-contact">
            <a href="tel:+18018642045"><Icon name="phone" />{PHONE} · 24/7</a>
            <a href={`mailto:${EMAIL}`}><Icon name="mail" />{EMAIL}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

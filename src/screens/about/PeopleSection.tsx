
export function PeopleSection() {
  return (
    <section
      className="oca-manifesto"
      data-section="why it's built this way."
      aria-label="Why It's Built This Way."
    >
      <div className="oca-manifesto-container">
        <h2>Why It&apos;s<br /><em>Built This Way.</em></h2>
        <div className="oca-creed oca-airflow">
          <p>
            Northern Utah puts a system through both extremes — single-digit
            nights in January, 100° afternoons in July, and Wasatch Front
            inversions that make indoor air quality matter year-round.
          </p>
        </div>
        <div className="oca-manifesto-body">
          <div>
            <p>
              That means dual-season demand and equipment that has to perform
              on heating and cooling without compromise.
            </p>
            <blockquote>
              &quot;We treat your home like it&apos;s our own, and we don&apos;t
              leave until the job is done right.&quot;
            </blockquote>
          </div>
          <div>
            <p>
              One Call handles install, repair, seasonal service, and Gold
              Membership maintenance on furnaces, central AC, cold-climate heat
              pumps, and ductless mini-splits. Trane, Lennox, Carrier,
              Mitsubishi, Bosch, Goodman, Rheem — whatever is right for your
              home, sized correctly, installed to spec, and registered for
              warranty before the crew leaves the driveway.
            </p>
            <p>
              The difference between a local HVAC company and the corporate
              chains is straightforward: the same name on the truck answers the
              phone. No call center routing faceless techs. No billing the drive
              both ways. One crew covers Salt Lake County to the Idaho border,
              and every call reaches the owner.
            </p>
          </div>
        </div>
      </div>
      <div className="oca-stats">
        {[
          ["24/7", "Emergency Service"],
          ["7", "Counties Covered"],
          ["100%", "Owner-Operated"],
          ["$0", "Diagnostic with Repair"],
        ].map(([number, label]) => (
          <div key={label}><strong>{number}</strong><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
}

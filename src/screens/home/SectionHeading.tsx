
export function SectionHeading({
  id,
  eyebrow,
  lineOne,
  lineTwo,
  description,
  centered = false,
}: {
  id?: string;
  eyebrow: string;
  lineOne: string;
  lineTwo?: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`oc-section-heading${centered ? " oc-centered" : ""}`}>
      <div className="oc-eyebrow">{eyebrow}</div>
      <h2 id={id}>
        {lineOne}
        {lineTwo ? (
          <>
            <br />
            <em>{lineTwo}</em>
          </>
        ) : null}
      </h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

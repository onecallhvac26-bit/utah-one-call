import { Link } from "@/components/Link";

export type KeywordContentItem = {
  title: string;
  description: string;
};

export type KeywordContentLink = {
  href: string;
  label: string;
};

export type KeywordContentDefinition = {
  id: string;
  eyebrow: string;
  heading: string;
  introduction: string;
  items: readonly KeywordContentItem[];
  links: readonly KeywordContentLink[];
};

export function KeywordContentSection({
  content,
}: {
  content: KeywordContentDefinition;
}) {
  const headingId = `${content.id}-heading`;

  return (
    <section
      className="site-keyword-content"
      id={content.id}
      aria-labelledby={headingId}
    >
      <div className="site-keyword-content__inner">
        <header className="site-keyword-content__heading">
          <p>{content.eyebrow}</p>
          <h2 id={headingId}>{content.heading}</h2>
          <span>{content.introduction}</span>
        </header>

        <div className="site-keyword-content__grid">
          {content.items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <nav aria-label={`${content.eyebrow} next steps`}>
          {content.links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

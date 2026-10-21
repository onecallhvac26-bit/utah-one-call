import { PageFaqSection } from "@/components/PageFaqSection";

export type PageAnswer = {
  question: string;
  answer: string;
};

export type PageAnswersDefinition = {
  id: string;
  path: `/${string}` | "/";
  eyebrow: string;
  heading: string;
  introduction: string;
  quickAnswer: PageAnswer;
  faqs: readonly PageAnswer[];
};

export function PageQuickAnswerSection({
  content,
}: {
  content: PageAnswersDefinition;
}) {
  const headingId = `${content.id}-heading`;

  return (
    <section
      id={content.id}
      className="site-page-answers"
      aria-labelledby={headingId}
    >
      <div className="site-page-answers__inner">
        <header className="site-page-answers__heading">
          <p>{content.eyebrow}</p>
          <h2 id={headingId}>{content.heading}</h2>
          <span>{content.introduction}</span>
        </header>

        <article
          className="site-page-answers__quick"
          aria-labelledby={`${content.id}-quick-answer`}
        >
          <span>Quick Answer</span>
          <h3 id={`${content.id}-quick-answer`}>
            {content.quickAnswer.question}
          </h3>
          <p>{content.quickAnswer.answer}</p>
        </article>

      </div>
    </section>
  );
}

/** Retained for focused tests and any future page that needs both sections together. */
export function PageAnswersSection({
  content,
}: {
  content: PageAnswersDefinition;
}) {
  return (
    <>
      <PageQuickAnswerSection content={content} />
      <PageFaqSection content={content} />
    </>
  );
}

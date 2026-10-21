"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import type { PageAnswersDefinition } from "@/components/PageAnswersSection";
import { StructuredData } from "@/components/StructuredData";
import { createFaqStructuredData } from "@/lib/structured-data";

export function PageFaqSection({
  content,
}: {
  content: PageAnswersDefinition;
}) {
  const reduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const headingId = `${content.id}-faqs-heading`;

  return (
    <section
      id={`${content.id}-faqs`}
      className="site-page-faqs"
      aria-labelledby={headingId}
    >
      <StructuredData
        data={createFaqStructuredData({
          path: content.path,
          questions: [content.quickAnswer, ...content.faqs],
        })}
      />
      <div className="site-page-faqs__inner">
        <header className="site-page-faqs__heading">
          <p>FAQs</p>
          <h2 id={headingId}>Frequently Asked Questions.</h2>
          <span>
            Open a question for a direct answer about this service, process, or
            next step.
          </span>
        </header>

        <div className="site-page-faqs__list">
          {content.faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const buttonId = `${content.id}-faq-question-${index}`;
            const answerId = `${content.id}-faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className={isOpen ? "is-open" : undefined}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenFaq((current) => (current === index ? null : index))
                  }
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className="site-page-faqs__icon"
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
                    }
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  id={answerId}
                  className="site-page-faqs__answer"
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
                  }
                >
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

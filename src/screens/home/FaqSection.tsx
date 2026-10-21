"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { StructuredData } from "@/components/StructuredData";
import { HOME_ROUTE } from "@/config/site";
import { createFaqStructuredData } from "@/lib/structured-data";
import { faqs, hvacQuickAnswer } from "./home-data";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  const reduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="oc-section oc-soft"
      data-section="what people ask us."
      aria-labelledby="home-faq-heading"
    >
      <StructuredData
        data={createFaqStructuredData({
          path: HOME_ROUTE,
          questions: [hvacQuickAnswer, ...faqs],
        })}
      />
      <div className="oc-container">
        <SectionHeading
          id="home-faq-heading"
          centered
          eyebrow="Common Questions"
          lineOne="What People"
          lineTwo="Ask Us."
        />
        <div className="oc-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;
            return (
              <article
                key={faq.question}
                className={`oc-faq${isOpen ? " is-open" : ""}`}
                data-faq-index={index}
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
                  {faq.question}
                  <motion.span
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
                  className="oc-faq-answer"
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                  }
                >
                  <div className="oc-faq-answer-inner">
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

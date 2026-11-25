"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { StructuredData } from "@/components/StructuredData";
import { createFaqStructuredData } from "@/lib/structured-data";
import { SectionHeading } from "@/screens/home/SectionHeading";

export type FaqItem = { question: string; answer: string };

export function LandingFaq({
  id,
  path,
  eyebrow,
  title,
  faqs,
}: {
  id: string;
  path: `/${string}` | "/";
  eyebrow: string;
  title: string;
  faqs: readonly FaqItem[];
}) {
  const reduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="oc-section oc-soft" aria-labelledby={`${id}-heading`}>
      <StructuredData data={createFaqStructuredData({ path, questions: faqs })} />
      <div className="oc-container">
        <SectionHeading id={`${id}-heading`} centered eyebrow={eyebrow} lineOne={title} />
        <div className="oc-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = `${id}-answer-${index}`;
            const buttonId = `${id}-question-${index}`;
            return (
              <article key={faq.question} className={`oc-faq${isOpen ? " is-open" : ""}`}>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenFaq((current) => (current === index ? null : index))}
                >
                  {faq.question}
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
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
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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

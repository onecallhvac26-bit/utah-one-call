"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import {
  GOOGLE_REVIEWS_DATA,
  type GoogleReview,
} from "@/lib/google-reviews";

const CAROUSEL_EASE = [0.22, 1, 0.36, 1] as const;
const AUTO_ADVANCE_DELAY = 6000;

function ReviewStars({ rating }: { rating: number }) {
  const filledStars = Math.round(rating);

  return (
    <span className="oc-review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < filledStars ? "is-filled" : undefined}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </span>
  );
}

function Reviewer({ review }: { review: GoogleReview }) {
  return (
    <div className="oc-review-author">
      <span
        className="oc-review-avatar oc-review-avatar-fallback"
        aria-hidden="true"
      >
        {review.authorName.charAt(0).toUpperCase()}
      </span>
      <span>
        <strong>{review.authorName}</strong>
        <small>{review.relativePublishTime}</small>
      </span>
    </div>
  );
}

function CarouselArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={direction === "previous" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function getReviewsPerPage() {
  if (window.matchMedia("(max-width: 720px)").matches) return 1;
  if (window.matchMedia("(max-width: 1080px)").matches) return 2;
  return 3;
}

export function GoogleReviewsSection() {
  const data = GOOGLE_REVIEWS_DATA;
  const reduceMotion = useReducedMotion();
  const [reviewsPerPage, setReviewsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [pointerPaused, setPointerPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  const pageCount = Math.ceil(data.reviews.length / reviewsPerPage);
  const automaticAdvancePaused = pointerPaused || focusPaused || manualPaused;
  const firstReviewIndex = currentPage * reviewsPerPage;
  const visibleReviews = data.reviews.slice(
    firstReviewIndex,
    firstReviewIndex + reviewsPerPage,
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 720px)");
    const tabletQuery = window.matchMedia("(max-width: 1080px)");
    const updatePageSize = () => {
      setReviewsPerPage(getReviewsPerPage());
      setCurrentPage(0);
    };

    updatePageSize();
    mobileQuery.addEventListener("change", updatePageSize);
    tabletQuery.addEventListener("change", updatePageSize);

    return () => {
      mobileQuery.removeEventListener("change", updatePageSize);
      tabletQuery.removeEventListener("change", updatePageSize);
    };
  }, []);

  useEffect(() => {
    if (automaticAdvancePaused || reduceMotion || pageCount < 2) return;

    const timer = window.setTimeout(() => {
      setDirection(1);
      setCurrentPage((page) => (page + 1) % pageCount);
    }, AUTO_ADVANCE_DELAY);

    return () => window.clearTimeout(timer);
  }, [automaticAdvancePaused, currentPage, pageCount, reduceMotion]);

  const showPage = (page: number) => {
    if (page === currentPage) return;
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  const showPreviousPage = () => {
    setDirection(-1);
    setCurrentPage((page) => (page - 1 + pageCount) % pageCount);
  };

  const showNextPage = () => {
    setDirection(1);
    setCurrentPage((page) => (page + 1) % pageCount);
  };

  return (
    <section
      className="oc-section oc-google-reviews"
      data-section="google reviews"
      aria-labelledby="google-reviews-heading"
    >
      <div className="oc-container">
        <div className="oc-review-intro">
          <div className="oc-section-heading">
            <div className="oc-eyebrow">Google Reviews</div>
            <h2 id="google-reviews-heading">
              Local Work.
              <br />
              <em>Public Feedback.</em>
            </h2>
            <p>
              See what northern Utah homeowners share about working directly
              with One Call Heating &amp; Air.
            </p>
          </div>

          <div className="oc-review-summary" aria-label="Google review summary">
            <strong>{data.rating.toFixed(1)}</strong>
            <ReviewStars rating={data.rating} />
            <span>{data.totalReviewCount} Google reviews</span>
            <div className="oc-review-actions">
              <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer">
                View on Google
              </a>
              <a
                href={data.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Review
              </a>
            </div>
          </div>
        </div>

        <div
          className="oc-review-carousel"
          role="region"
          aria-label="Customer reviews carousel"
          aria-roledescription="carousel"
          onMouseEnter={() => setPointerPaused(true)}
          onMouseLeave={() => setPointerPaused(false)}
          onFocusCapture={() => setFocusPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setFocusPaused(false);
            }
          }}
        >
          <div
            className="oc-review-viewport"
            aria-live={automaticAdvancePaused ? "polite" : "off"}
            aria-atomic="true"
          >
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                className="oc-review-grid"
                key={`${reviewsPerPage}-${currentPage}`}
                custom={direction}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, x: direction * 56 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, x: direction * -56 }
                }
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.55, ease: CAROUSEL_EASE }
                }
              >
                {visibleReviews.map((review) => (
                  <article className="oc-review-card" key={review.id}>
                    <Reviewer review={review} />
                    <ReviewStars rating={review.rating} />
                    <blockquote>{review.text}</blockquote>
                    <span className="oc-review-source">Google review</span>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="oc-review-controls">
            <button
              type="button"
              className="oc-review-arrow"
              onClick={showPreviousPage}
              aria-label="Show previous reviews"
            >
              <CarouselArrow direction="previous" />
            </button>

            <div className="oc-review-dots" aria-label="Choose a review page">
              {Array.from({ length: pageCount }, (_, page) => (
                <button
                  type="button"
                  className={page === currentPage ? "is-active" : undefined}
                  key={page}
                  onClick={() => showPage(page)}
                  aria-label={`Show review page ${page + 1} of ${pageCount}`}
                  aria-current={page === currentPage ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              className="oc-review-pause"
              aria-pressed={manualPaused}
              onClick={() => setManualPaused((paused) => !paused)}
            >
              {manualPaused ? "Resume reviews" : "Pause reviews"}
            </button>

            <button
              type="button"
              className="oc-review-arrow"
              onClick={showNextPage}
              aria-label="Show next reviews"
            >
              <CarouselArrow direction="next" />
            </button>
          </div>

          <p className="oc-review-page-status">
            Showing reviews {firstReviewIndex + 1}–
            {Math.min(firstReviewIndex + reviewsPerPage, data.reviews.length)} of{" "}
            {data.reviews.length} featured reviews
          </p>
        </div>

        <p className="oc-review-disclosure">
          Featured reviews were manually transcribed from Google. Review content
          belongs to its authors; relative dates reflect when the source was
          captured and do not update automatically.{" "}
          <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer">
            Google Maps
          </a>
        </p>
      </div>
    </section>
  );
}

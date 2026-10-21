"use client";

import { Image } from "@/components/Image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "@/components/Link";
import { ASSET_BASE, CONTACT_ROUTE, PHONE_NUMBER } from "@/config/site";
import { equipment, heroSlides } from "./home-data";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [focusPaused, setFocusPaused] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const automaticMotionPaused = Boolean(
    reduceMotion || focusPaused || motionPaused,
  );
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (automaticMotionPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setSlideDirection(1);
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [activeSlide, automaticMotionPaused]);

  function showPreviousSlide() {
    setSlideDirection(-1);
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1,
    );
  }

  function showNextSlide() {
    setSlideDirection(1);
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  }

  function showSlide(index: number) {
    setSlideDirection(index >= activeSlide ? 1 : -1);
    setActiveSlide(index);
  }

  return (
    <section
      className="oc-hero"
      data-section="one call.done."
      data-carousel-slide={activeSlide}
      aria-label="One Call.Done."
      onFocusCapture={() => setFocusPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocusPaused(false);
        }
      }}
    >
      {heroSlides.map((item, index) => {
        const isActive = index === activeSlide;

        return (
          <motion.div
            className="oc-hero-background-layer"
            data-active={isActive}
            data-hero-background={item.label}
            key={item.backgroundImage}
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 1.025,
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
            }
            style={{ zIndex: isActive ? 1 : 0 }}
            aria-hidden="true"
          >
            <Image
              src={`${ASSET_BASE}/${item.backgroundImage}`}
              alt=""
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              sizes="100vw"
              className="oc-hero-background"
            />
          </motion.div>
        );
      })}
      <div className="oc-hero-glow oc-cool-glow" />
      <div className="oc-hero-glow oc-warm-glow" />
      <div className="oc-hero-center">
        <div className="oc-hero-card">
          <div className="oc-mobile-logo">
            <Logo mobile />
          </div>
          <div className="oc-emergency">
            <span />
            24/7 Emergency Service · Brigham City, UT
          </div>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={slide.label}
              id="hero-slide-panel"
              className="oc-hero-slide"
              role="tabpanel"
              aria-label={slide.label}
              initial={{ opacity: 0, x: reduceMotion ? 0 : slideDirection * 42 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : slideDirection * -42 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.58, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <h1>
                {slide.title}
                <br />
                <em>{slide.accent}</em>
              </h1>
              <p className="oc-hero-description">
                {slide.descriptionBefore}
                <strong>{slide.descriptionStrong}</strong>
                {slide.descriptionAfter}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="oc-hero-buttons">
            <Link
              href={CONTACT_ROUTE}
              className="oc-button oc-button-amber oc-button-large"
            >
              Get a Free Estimate
              <Icon name="arrow" />
            </Link>
            <a
              href="tel:+18018642045"
              className="oc-button oc-button-ghost oc-button-large"
            >
              {PHONE_NUMBER}
            </a>
          </div>
          <div className="oc-hero-controls">
            <button
              type="button"
              className="oc-hero-arrow is-previous"
              aria-label="Previous hero slide"
              onClick={showPreviousSlide}
            >
              <Icon name="arrow" />
            </button>
            <div
              className="oc-hero-dots"
              aria-label="Hero highlights"
            >
              {heroSlides.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  className={index === activeSlide ? "is-active" : ""}
                  aria-label={item.label}
                  aria-current={index === activeSlide ? "true" : undefined}
                  onClick={() => showSlide(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="oc-hero-motion-toggle"
              aria-pressed={motionPaused}
              onClick={() => setMotionPaused((paused) => !paused)}
            >
              {motionPaused ? "Resume motion" : "Pause motion"}
            </button>
            <button
              type="button"
              className="oc-hero-arrow is-next"
              aria-label="Next hero slide"
              onClick={showNextSlide}
            >
              <Icon name="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="oc-season-wrap">
        <div className="oc-season oc-warm">
          <div className="oc-season-icon">
            <Icon name="warm" />
          </div>
          <div>
            <div className="oc-season-label">Heating Season · Oct–Apr</div>
            <div className="oc-season-title">
              Furnaces · Heat Pumps · Mini-Splits
            </div>
            <p>Single-digit nights covered. 24/7 emergency repair when the system quits.</p>
          </div>
        </div>
        <div className="oc-season oc-cool">
          <div className="oc-season-icon">
            <Icon name="snow" />
          </div>
          <div>
            <div className="oc-season-label">Cooling Season · Jun–Sep</div>
            <div className="oc-season-title">
              Central AC · Mini-Splits · Tune-Ups
            </div>
            <p>
              100° afternoons handled. Diagnostic-first calls — we don&apos;t sell what
              you don&apos;t need.
            </p>
          </div>
        </div>
      </div>
      <div className="oc-equipment" aria-label="Equipment brands">
        <motion.div
          className="oc-equipment-track"
          data-testid="equipment-marquee"
          animate={
            automaticMotionPaused
              ? { x: 0 }
              : { x: ["0%", "calc(-50% - (var(--equipment-gap) / 2))"] }
          }
          transition={
            automaticMotionPaused
              ? { duration: 0 }
              : { duration: 28, ease: "linear", repeat: Infinity }
          }
        >
          {[false, true].map((duplicate) => (
            <div
              key={duplicate ? "duplicate" : "primary"}
              className="oc-equipment-group"
              aria-hidden={duplicate || undefined}
            >
              {equipment.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

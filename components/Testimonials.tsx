"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  HeartPulse,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonials } from "@/lib/data";

const AUTOPLAY_DURATION = 7000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const go = (dir: 1 | -1) => {
    setDirection(dir);

    setIndex(
      (prev) =>
        (prev + dir + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setIndex(
        (prev) => (prev + 1) % testimonials.length
      );
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [isPaused]);

  const current = testimonials[index];

  return (
      <section
        id="reviews"
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full border border-teal-900/[0.035]" />

      <div className="pointer-events-none absolute -right-20 bottom-0 text-teal-900/[0.025]">
        <HeartPulse size={340} strokeWidth={0.45} />
      </div>

      <div className="mx-auto max-w-content px-6">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-brass-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brass-600">
                  Patient Reviews
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display text-4xl leading-[0.96] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[4.6rem]">
                Care that
                <br />
                <span className="italic text-teal-900">
                  patients remember.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-sm text-sm leading-7 text-ink-faint lg:ml-auto lg:max-w-xs lg:text-right">
              Honest words from patients who experienced a more personal
              approach to their care.
            </p>
          </Reveal>
        </div>

        {/* Review card */}
        <Reveal delay={0.15}>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative mt-14 overflow-hidden rounded-[2rem] bg-teal-900"
          >
            {/* Decorative quote */}
            <div className="pointer-events-none absolute -right-6 -top-10 text-mint-100/[0.035]">
              <Quote size={280} strokeWidth={0.7} />
            </div>

            {/* Large background number */}
            <span className="pointer-events-none absolute bottom-[-3rem] left-6 font-display text-[13rem] leading-none text-white/[0.025]">
              0{index + 1}
            </span>

            <div className="relative grid min-h-[430px] grid-cols-1 lg:grid-cols-[280px_1fr]">
              {/* Left panel */}
              <div className="relative flex flex-col justify-between border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brass-400/30 bg-brass-500/10 text-brass-400">
                    <Quote size={19} strokeWidth={1.5} />
                  </div>

                  <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-mint-100/35">
                    Patient voice
                  </p>
                </div>

                <div className="mt-10 lg:mt-0">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-4xl text-brass-400">
                      0{index + 1}
                    </span>

                    <span className="text-xs text-mint-100/25">
                      / 0{testimonials.length}
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="mt-5 h-px w-full bg-white/10">
                    <motion.div
                      key={index}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: AUTOPLAY_DURATION / 1000,
                        ease: "linear",
                      }}
                      className="h-full origin-left bg-brass-400"
                    />
                  </div>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-mint-100/25">
                    {isPaused ? "Paused" : "Auto playing"}
                  </p>
                </div>
              </div>

              {/* Main testimonial */}
              <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <AnimatePresence
                  mode="wait"
                  custom={direction}
                >
                  <motion.div
                    key={index}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction * 45,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -direction * 45,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-3xl"
                  >
                    {/* Stars */}
                    <div className="mb-7 flex items-center gap-1.5 text-brass-400">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={15}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      ))}

                      <span className="ml-2 text-xs text-mint-100/45">
                        {current.rating}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="font-display text-2xl leading-[1.25] tracking-[-0.02em] text-mint-100 sm:text-3xl lg:text-[2.65rem]">
                      “{current.quote}”
                    </p>

                    {/* Patient */}
                    <div className="mt-9 flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-500 font-display text-lg text-teal-950">
                        {current.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-mint-100">
                          {current.name}
                        </p>

                        <p className="mt-1 text-xs text-mint-100/40">
                          {current.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-mint-100/25">
                    Patient experience
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => go(-1)}
                      aria-label="Previous testimonial"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-mint-100 transition-all duration-300 hover:border-brass-400/60 hover:bg-white/5 focus-ring"
                    >
                      <ChevronLeft size={17} />
                    </button>

                    <button
                      onClick={() => go(1)}
                      aria-label="Next testimonial"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-500 text-teal-950 transition-all duration-300 hover:bg-brass-400 focus-ring"
                    >
                      <ChevronRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-brass-500/20" />
          </div>
        </Reveal>

        {/* Dot navigation */}
        <Reveal delay={0.25}>
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to review ${i + 1}`}
                className="group flex h-5 items-center justify-center focus-ring"
              >
                <span
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-8 bg-brass-500"
                      : "w-2 bg-teal-900/15 group-hover:bg-teal-900/30"
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
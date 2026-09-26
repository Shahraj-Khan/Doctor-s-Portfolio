"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, HeartPulse } from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="relative rounded-xl2 bg-teal-900 overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-10 -bottom-10 text-mint-100/5">
            <HeartPulse size={260} strokeWidth={0.6} />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-mint-100 text-balance">
                My Patient Review
              </h2>
              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-mint-100/20 text-mint-100 hover:bg-mint-100/10 transition-colors focus-ring"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-500 text-teal-950 hover:bg-brass-400 transition-colors focus-ring"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="relative min-h-[180px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-display text-xl sm:text-2xl text-mint-100 leading-snug text-balance max-w-xl">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div>
                      <p className="text-mint-100 text-sm font-medium">
                        {current.name}
                      </p>
                      <p className="text-mint-100/50 text-xs">{current.role}</p>
                    </div>
                    <div className="flex items-center gap-1 text-brass-400 text-sm">
                      <Star size={14} fill="currentColor" strokeWidth={0} />
                      {current.rating}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

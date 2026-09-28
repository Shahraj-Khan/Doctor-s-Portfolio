"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { services } from "@/lib/data";

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: dir * 320,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-content px-6">
        <Reveal className="relative overflow-hidden rounded-[1.75rem] bg-teal-900">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/[0.04]" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full border border-white/[0.035]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[340px_1fr]">
            {/* LEFT PANEL */}
            <div className="relative flex flex-col justify-between p-8 sm:p-10 lg:p-11">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-brass-500" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brass-400">
                    My Services
                  </span>
                </div>

                <h2 className="max-w-xs font-display text-4xl leading-[1.02] tracking-[-0.03em] text-mint-100 sm:text-[2.8rem]">
                  Care that fits
                  <br />
                  <span className="italic text-brass-400">
                    your needs.
                  </span>
                </h2>

                <p className="mt-5 max-w-xs text-sm leading-7 text-mint-100/55">
                  Personalized medical services designed to support your
                  health through every stage of care.
                </p>
              </div>

              {/* CONTROLS */}
              <div className="relative mt-10 flex items-center justify-between lg:mt-16">
                <span className="text-[10px] uppercase tracking-[0.18em] text-mint-100/35">
                  Explore services
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => scroll(-1)}
                    aria-label="Previous service"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-mint-100/15 text-mint-100/70 transition-all duration-300 hover:border-brass-400 hover:bg-brass-400 hover:text-teal-950 focus-ring"
                  >
                    <ChevronLeft
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-x-0.5"
                    />
                  </button>

                  <button
                    onClick={() => scroll(1)}
                    aria-label="Next service"
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-brass-500 text-teal-950 transition-all duration-300 hover:bg-brass-400 focus-ring"
                  >
                    <ChevronRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* SERVICES TRACK */}
            <div
              ref={trackRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-8 sm:px-5 lg:py-7 lg:pr-7 lg:pb-7"
            >
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -6 }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 22,
                  }}
                  className="group relative min-w-[270px] shrink-0 snap-start overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-teal-950 sm:min-w-[285px]"
                >
                  <div className="relative aspect-[4/5]">
                    {/* IMAGE */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="285px"
                      className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.08]"
                    />

                    {/* Unified teal treatment */}
                    <div className="absolute inset-0 bg-teal-950/15 mix-blend-multiply" />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/45 to-teal-950/5" />

                    {/* Top number */}
                    <div className="absolute left-5 top-5">
                      <span className="font-display text-4xl leading-none text-white/25 transition-colors duration-500 group-hover:text-brass-400/80">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute right-5 top-5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 backdrop-blur-md transition-all duration-500 group-hover:border-brass-400 group-hover:bg-brass-400 group-hover:text-teal-950">
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-[1px]"
                        />
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-brass-400">
                        Medical Service
                      </p>

                      <h3 className="max-w-[220px] font-display text-xl leading-[1.08] text-white transition-transform duration-500 group-hover:-translate-y-1">
                        {service.title}
                      </h3>

                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p className="pt-3 text-xs leading-5 text-white/60">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 h-px w-8 origin-left bg-brass-400 transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="min-w-[1px] shrink-0 lg:hidden" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
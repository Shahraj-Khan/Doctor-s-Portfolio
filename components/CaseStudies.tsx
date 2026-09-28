"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Activity,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { caseStudies } from "@/lib/data";

const icons = [HeartPulse, Activity];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-teal-900 py-20 sm:py-24 lg:py-28"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full border border-white/[0.035]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[22rem] w-[22rem] rounded-full border border-white/[0.035]" />

      <div className="relative mx-auto max-w-content px-6">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-brass-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-400">
                  Case Studies
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="max-w-3xl font-display text-4xl leading-[0.96] tracking-[-0.04em] text-mint-100 sm:text-5xl lg:text-[4.7rem]">
                Every case has
                <br />
                <span className="italic text-brass-400">
                  its own story.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-7 text-mint-100/50 lg:ml-auto lg:max-w-xs lg:text-right">
              A glimpse into thoughtful clinical decision-making, personalized
              treatment, and long-term patient care.
            </p>
          </Reveal>
        </div>

        {/* Cases */}
        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {caseStudies.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={item.title}
                variants={revealItem}
                whileHover="hover"
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-teal-950 ${
                  index === 1 ? "lg:mt-20" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-[390px] overflow-hidden sm:h-[450px]">
                  <motion.div
                    variants={{
                      hover: {
                        scale: 1.07,
                      },
                    }}
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/25 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-br from-teal-900/25 via-transparent to-transparent" />


                  {/* Icon */}
                  <motion.div
                    variants={{
                      hover: {
                        rotate: -8,
                        scale: 1.08,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 18,
                    }}
                    className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brass-400 backdrop-blur-md sm:right-7 sm:top-7"
                  >
                    <Icon size={18} strokeWidth={1.6} />
                  </motion.div>

                  {/* Image bottom label */}
                  <div className="absolute bottom-6 left-6 sm:bottom-7 sm:left-7">
                    <div className="flex items-center gap-2">
                      <Stethoscope
                        size={13}
                        className="text-brass-400"
                      />

                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/65">
                        Clinical Case
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Decorative giant number */}
                  <span className="pointer-events-none absolute right-6 top-0 font-display text-[8rem] leading-none text-white/[0.025]">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-7 bg-brass-400 transition-all duration-500 group-hover:w-12" />

                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-mint-100/35">
                        Patient Journey
                      </span>
                    </div>

                    <h3 className="max-w-md font-display text-2xl leading-[1.08] tracking-[-0.02em] text-mint-100 transition-colors duration-500 group-hover:text-brass-300 sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-mint-100/50">
                      {item.summary}
                    </p>

                    {/* Meta */}
                    <div className="mt-7 grid grid-cols-2 border-y border-white/[0.08] py-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.16em] text-mint-100/30">
                          Approach
                        </p>

                        <p className="mt-1 text-xs font-medium text-mint-100/75">
                          Personalized care
                        </p>
                      </div>

                      <div className="border-l border-white/[0.08] pl-5">
                        <p className="text-[9px] uppercase tracking-[0.16em] text-mint-100/30">
                          Focus
                        </p>

                        <p className="mt-1 text-xs font-medium text-mint-100/75">
                          Long-term health
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-mint-100/30">
                        Explore case
                      </span>

                      <motion.span
                        variants={{
                          hover: {
                            x: 3,
                            backgroundColor: "#b99459",
                            color: "#0b1d1a",
                          },
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-mint-100"
                      >
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-[1px]"
                        />
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Hover line */}
                <motion.div
                  variants={{
                    hover: {
                      scaleX: 1,
                    },
                  }}
                  initial={{ scaleX: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-brass-400"
                />
              </motion.article>
            );
          })}
        </RevealGroup>

        {/* Bottom note */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-brass-400/50" />

            <p className="text-[10px] leading-5 text-mint-100/30">
              Selected clinical cases presented for educational purposes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
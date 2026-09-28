"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Microscope,
  Compass,
  HandHeart,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { whyChooseMe } from "@/lib/data";

const icons = [HeartPulse, Microscope, Compass, HandHeart];

export function WhyChooseMe() {
  return (
    <section className="relative overflow-hidden bg-mint-200/60 py-16 sm:py-20 lg:py-24">

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brass-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-content px-6">
        {/* HEADER */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-brass-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-600">
                  Why Choose Me
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="max-w-2xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-ink text-balance sm:text-5xl lg:text-[4.2rem]">
                Care designed around{" "}
                <span className="italic text-teal-900">
                  you.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="max-w-sm sm:pb-1 sm:text-right">
              <p className="text-sm leading-6 text-ink-faint sm:text-base sm:leading-7">
                Thoughtful medical care built on accuracy, compassion, clear
                communication, and long-term relationships.
              </p>
            </div>
          </Reveal>
        </div>

        {/* CARDS */}
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseMe.map((item, i) => {
            const Icon = icons[i];

            return (
              <motion.div
                key={item.title}
                variants={revealItem}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                whileTap={{ scale: 0.985 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className="group relative min-h-[290px] overflow-hidden rounded-[1.5rem] bg-teal-900 p-7 text-mint-100 shadow-sm transition-shadow duration-500 hover:shadow-2xl sm:p-8"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brass-500/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute right-7 top-6 font-display text-5xl leading-none text-white/[0.055] transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="relative">
                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-mint-100/[0.07] text-brass-400 transition-colors duration-500 group-hover:border-brass-400/30 group-hover:bg-brass-400/10"
                  >
                    <Icon size={20} strokeWidth={1.6} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative mt-12">
                  <h3 className="font-display text-xl leading-tight text-mint-100 transition-colors duration-300 group-hover:text-brass-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-mint-100/60 transition-colors duration-500 group-hover:text-mint-100/75">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-brass-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />

                {/* Arrow */}
                <div className="absolute bottom-6 right-7 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-mint-100/40 transition-all duration-500 group-hover:border-brass-400/40 group-hover:bg-brass-400 group-hover:text-teal-950">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-[1px]"
                  />
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { ArrowUpRight, Activity, HeartPulse, Wind } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { expertise } from "@/lib/data";

const icons = [Activity, HeartPulse, Wind];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-[var(--color-bg)] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-10rem] top-[20%] h-[28rem] w-[28rem] rounded-full border border-teal-900/[0.045]" />

      <div className="pointer-events-none absolute right-[-7rem] top-[24%] h-[22rem] w-[22rem] rounded-full border border-teal-900/[0.035]" />

      <div className="mx-auto max-w-content px-6">
        {/* HEADER */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-brass-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-600">
                  Areas of Expertise
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="max-w-3xl font-display text-4xl leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[4.6rem]">
                Focused knowledge.
                <br />
                <span className="italic text-teal-900">
                  Individual care.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-7 text-ink-faint lg:ml-auto lg:max-w-xs lg:text-right">
              Medical expertise shaped around the condition, the person, and
              the long-term goal — never a one-size-fits-all approach.
            </p>
          </Reveal>
        </div>

        {/* EXPERTISE LIST */}
        <RevealGroup className="mt-14 space-y-5">
          {expertise.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={item.title}
                variants={revealItem}
                whileHover="hover"
                className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-white"
              >
                {/* Main layout */}
                <div className="relative grid min-h-[340px] grid-cols-1 lg:grid-cols-12">
                  {/* IMAGE */}
                  <motion.div
                    variants={{
                      hover: {
                        scale: 1.025,
                      },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative min-h-[260px] overflow-hidden lg:col-span-5 lg:min-h-[380px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-950/55 via-transparent to-transparent" />

                    {/* Image number */}
                    <div className="absolute left-6 top-6">
                      <span className="font-display text-5xl leading-none text-white/80">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Floating icon */}
                    <motion.div
                      variants={{
                        hover: {
                          rotate: -10,
                          scale: 1.08,
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-brass-400 backdrop-blur-md"
                    >
                      <Icon size={19} strokeWidth={1.6} />
                    </motion.div>
                  </motion.div>

                  {/* CONTENT */}
                  <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:col-span-7 lg:p-12">
                    {/* Decorative number */}
                    <span className="pointer-events-none absolute right-8 top-4 font-display text-[8rem] leading-none text-teal-900/[0.035] transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2">
                      0{index + 1}
                    </span>

                    <div className="relative">
                      <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-7 bg-brass-500 transition-all duration-500 group-hover:w-12" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                          Clinical Focus
                        </span>
                      </div>

                      <h3 className="max-w-xl font-display text-3xl leading-[1.05] tracking-[-0.025em] text-ink transition-colors duration-500 group-hover:text-teal-900 sm:text-4xl lg:text-[2.8rem]">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-sm leading-7 text-ink-soft sm:text-base">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="relative mt-10 flex items-center justify-between border-t border-[var(--color-border)] pt-5">
                      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-faint">
                        Learn about this area
                      </span>

                      <motion.span
                        variants={{
                          hover: {
                            x: 4,
                            backgroundColor: "#b99459",
                            color: "#0b1d1a",
                          },
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-900 text-mint-100"
                      >
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-[1px]"
                        />
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Animated bottom line */}
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
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-brass-500"
                />
              </motion.article>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
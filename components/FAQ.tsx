"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight, MessageCircleQuestion } from "lucide-react";
import { Reveal } from "./Reveal";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[var(--color-bg)] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full border border-teal-900/[0.035]" />
      <div className="pointer-events-none absolute -right-24 top-36 h-[18rem] w-[18rem] rounded-full border border-teal-900/[0.035]" />

      <div className="relative mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="relative">

                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-px w-9 bg-brass-500" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brass-600">
                      FAQ
                    </span>
                  </div>

                  <h2 className="max-w-md font-display text-4xl leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[4.3rem]">
                    Questions
                    <br />
                    <span className="italic text-teal-900">
                      worth asking.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-sm text-sm leading-7 text-ink-faint">
                    A few helpful answers for new and returning patients before
                    your visit.
                  </p>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="group mt-8 inline-flex items-center gap-3 rounded-full bg-teal-900 py-2 pl-5 pr-2.5 text-sm font-medium text-mint-100 transition-all duration-300 hover:bg-teal-800 focus-ring"
                  >
                    <span>Ask a question</span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brass-500 text-teal-950">
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-[1px]"
                      />
                    </span>
                  </a>

                  {/* Small information card */}
                  <div className="mt-12 hidden border-t border-[var(--color-border)] pt-5 sm:block">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-900/5 text-teal-900">
                        <MessageCircleQuestion size={17} strokeWidth={1.5} />
                      </div>

                      <div>
                        <p className="text-xs font-medium text-ink">
                          Still need help?
                        </p>
                        <p className="mt-1 max-w-[210px] text-[11px] leading-5 text-ink-faint">
                          Contact the clinic directly and we’ll be happy to
                          help.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* FAQ LIST */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-white">
              {faqs.map((faq, i) => {
                const isOpen = open === i;

                return (
                  <Reveal key={faq.question} delay={i * 0.06}>
                    <div
                      className={`group relative border-b border-[var(--color-border)] last:border-b-0 transition-colors duration-500 ${
                        isOpen ? "bg-[#fafaf7]" : "bg-white"
                      }`}
                    >
                      {/* Active accent */}
                      <motion.div
                        initial={false}
                        animate={{
                          scaleY: isOpen ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-0 left-0 top-0 w-[3px] origin-top bg-brass-500"
                      />

                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center gap-5 px-5 py-5 text-left focus-ring sm:px-7 sm:py-6"
                        aria-expanded={isOpen}
                      >
                        {/* Number */}
                        <span
                          className={`hidden shrink-0 font-display text-sm transition-colors duration-300 sm:block ${
                            isOpen
                              ? "text-brass-600"
                              : "text-teal-900/20"
                          }`}
                        >
                          0{i + 1}
                        </span>

                        {/* Question */}
                        <span
                          className={`flex-1 font-display text-lg leading-tight tracking-[-0.015em] transition-colors duration-300 sm:text-xl ${
                            isOpen ? "text-teal-900" : "text-ink"
                          }`}
                        >
                          {faq.question}
                        </span>

                        {/* Icon */}
                        <motion.span
                          initial={false}
                          animate={{
                            rotate: isOpen ? 45 : 0,
                            backgroundColor: isOpen
                              ? "#b99459"
                              : "rgba(16,44,40,0.06)",
                            color: isOpen ? "#0b1d1a" : "#102c28",
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                        >
                          <Plus size={17} strokeWidth={1.8} />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              height: {
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                              },
                              opacity: {
                                duration: 0.25,
                              },
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-7 sm:px-7 sm:pb-7 sm:pl-[4.35rem]">
                              <div className="max-w-2xl border-l border-brass-500/30 pl-5">
                                <p className="text-sm leading-7 text-ink-soft">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Bottom hover line */}
                      <motion.div
                        initial={false}
                        animate={{
                          scaleX: isOpen ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-0 left-0 h-px w-full origin-left bg-brass-500"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Bottom note */}
            <Reveal delay={0.25}>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-brass-500/60" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                    Need more information?
                  </span>
                </div>

                <a
                  href="#contact"
                  className="group hidden items-center gap-1.5 text-xs font-medium text-teal-900 sm:flex"
                >
                  Contact the clinic
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-[1px]"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
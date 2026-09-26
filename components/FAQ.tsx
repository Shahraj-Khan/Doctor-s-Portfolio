"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl text-ink text-balance">
                Any question?
              </h2>
              <p className="mt-4 text-ink-faint text-sm max-w-xs">
                Answers to what new and returning patients ask most often.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-900 px-5 py-2.5 text-sm text-mint-100 hover:bg-teal-800 transition-colors focus-ring"
              >
                Ask a question <ArrowUpRight size={14} />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.06}>
                <div className="border-b border-ink/10">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left focus-ring rounded"
                    aria-expanded={open === i}
                  >
                    <span className="font-display text-lg sm:text-xl text-ink">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-200 text-ink"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-ink-soft text-sm leading-relaxed max-w-lg">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

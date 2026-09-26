"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { pricing } from "@/lib/data";

export function Pricing() {
  return (
    <section id="fees" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="text-center max-w-lg mx-auto">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl text-ink text-balance">
              Consultation fees
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-ink-faint">
              Simple, transparent pricing for quality medical care.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 items-stretch">
          {pricing.map((plan) => (
            <motion.div
              key={plan.tier}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`rounded-xl2 p-8 flex flex-col ${
                plan.featured
                  ? "bg-teal-900 text-mint-100 md:-translate-y-3 shadow-soft"
                  : "bg-white/70 text-ink border border-mint-300"
              }`}
            >
              <p
                className={`text-sm mb-6 ${
                  plan.featured ? "text-mint-100/70" : "text-ink-faint"
                }`}
              >
                {plan.tier}
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display text-5xl">${plan.price}</span>
                <span
                  className={
                    plan.featured ? "text-mint-100/60 text-sm" : "text-ink-faint text-sm"
                  }
                >
                  /visit
                </span>
              </div>

              <p
                className={`text-xs mb-4 ${
                  plan.featured ? "text-mint-100/50" : "text-ink-faint"
                }`}
              >
                What&rsquo;s included
              </p>
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        plan.featured ? "text-brass-400" : "text-teal-800"
                      }`}
                    />
                    <span className={plan.featured ? "text-mint-100/85" : "text-ink-soft"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm transition-colors focus-ring ${
                  plan.featured
                    ? "bg-brass-500 text-teal-950 hover:bg-brass-400"
                    : "bg-teal-900 text-mint-100 hover:bg-teal-800"
                }`}
              >
                Get Started <ArrowUpRight size={15} />
              </a>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

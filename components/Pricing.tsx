"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { pricing } from "@/lib/data";

export function Pricing() {
  return (
    <section
      id="fees"
      className="relative overflow-hidden bg-[var(--color-bg)] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-teal-900/[0.035]" />

      <div className="mx-auto max-w-content px-6">
        {/* HEADER */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-brass-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-600">
                  Consultation Fees
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="max-w-2xl font-display text-4xl leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[4.5rem]">
                Clear fees.
                <br />
                <span className="italic text-teal-900">
                  No surprises.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-sm text-sm leading-7 text-ink-faint lg:ml-auto lg:max-w-xs lg:text-right">
              Choose the level of care that best fits your needs. Every
              consultation is focused on clear guidance and personalized
              medical attention.
            </p>
          </Reveal>
        </div>

        {/* FEES */}
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {pricing.map((plan, index) => (
            <motion.article
              key={plan.tier}
              variants={revealItem}
              whileHover={{ y: -7 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
              }}
              className={`group relative overflow-hidden rounded-[1.5rem] border p-7 sm:p-8 ${
                plan.featured
                  ? "border-teal-900 bg-teal-900 text-mint-100 shadow-xl md:-translate-y-3"
                  : "border-[var(--color-border)] bg-white text-ink"
              }`}
            >
              {/* Featured label */}
              {plan.featured && (
                <div className="absolute right-5 top-5">
                  <span className="rounded-full bg-brass-500 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-teal-950">
                    Recommended
                  </span>
                </div>
              )}

              {/* Number */}
              <span
                className={`font-display text-5xl leading-none ${
                  plan.featured
                    ? "text-white/[0.08]"
                    : "text-teal-900/[0.06]"
                }`}
              >
                0{index + 1}
              </span>

              <div className="mt-8">
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                    plan.featured
                      ? "text-brass-400"
                      : "text-brass-600"
                  }`}
                >
                  Consultation
                </p>

                <h3
                  className={`mt-3 font-display text-2xl leading-tight ${
                    plan.featured ? "text-mint-100" : "text-ink"
                  }`}
                >
                  {plan.tier}
                </h3>

                {/* Price */}
                <div className="mt-7 flex items-end gap-2">
                  <span
                    className={`font-display text-5xl leading-none ${
                      plan.featured
                        ? "text-mint-100"
                        : "text-teal-900"
                    }`}
                  >
                    ${plan.price}
                  </span>

                  <span
                    className={`pb-1 text-xs ${
                      plan.featured
                        ? "text-mint-100/45"
                        : "text-ink-faint"
                    }`}
                  >
                    / consultation
                  </span>
                </div>

                {/* Divider */}
                <div
                  className={`my-7 h-px ${
                    plan.featured
                      ? "bg-white/10"
                      : "bg-[var(--color-border)]"
                  }`}
                />

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-brass-500 text-teal-950"
                            : "bg-teal-900/10 text-teal-900"
                        }`}
                      >
                        <Check size={11} strokeWidth={2.5} />
                      </span>

                      <span
                        className={`text-sm leading-5 ${
                          plan.featured
                            ? "text-mint-100/65"
                            : "text-ink-soft"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`group/cta mt-8 flex items-center justify-between rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    plan.featured
                      ? "bg-brass-500 text-teal-950 hover:bg-brass-400"
                      : "bg-teal-900 text-mint-100 hover:bg-teal-800"
                  }`}
                >
                  <span>Book this consultation</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-[1px]"
                    />
                  </span>
                </a>
              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                  plan.featured
                    ? "bg-brass-400"
                    : "bg-brass-500"
                }`}
              />
            </motion.article>
          ))}
        </RevealGroup>

        {/* NOTE */}
        <Reveal delay={0.2}>
          <div className="mt-7 flex flex-col gap-2 border-t border-[var(--color-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-ink-faint">
              Consultation fees may vary depending on the complexity of the
              visit and required services.
            </p>

            <p className="text-xs font-medium text-teal-900">
              Payment details discussed at booking.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
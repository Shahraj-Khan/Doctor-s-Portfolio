"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brass-500/[0.035] blur-3xl" />

      <div className="mx-auto max-w-content px-6">
        {/* Section heading */}
        <div className="mb-12 grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-brass-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-600">
                  Get in Touch
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display text-4xl leading-[0.98] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[4.5rem]">
                Let&apos;s take the next
                <br />
                <span className="italic text-teal-900">
                  step together.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-sm text-sm leading-7 text-ink-faint lg:ml-auto lg:max-w-xs lg:text-right">
              Have a question or ready to book a consultation? Send a request
              and the clinic will get back to you shortly.
            </p>
          </Reveal>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* MAP */}
          <Reveal className="lg:col-span-7">
            <div className="group relative min-h-[560px] overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[#e8e6df]">
              {/* Real Google Map */}
              <iframe
                title="Dr. Thomas Clinic Location"
                src="https://www.google.com/maps?q=Gulshan-2,Dhaka,Bangladesh&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent" />

              {/* Location label */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="absolute left-5 top-5 z-10 sm:left-6 sm:top-6"
              >
                <div className="flex items-center gap-2 rounded-full border border-white/50 bg-white/85 px-4 py-2.5 shadow-lg backdrop-blur-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brass-500" />
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-900">
                    Clinic Location
                  </span>
                </div>
              </motion.div>

              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease }}
                className="absolute right-5 top-5 z-10 flex gap-2 sm:right-6 sm:top-6"
              >
                {[
                  {
                    icon: Facebook,
                    label: "Facebook",
                    href: "#",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    href: "#",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "#",
                  },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{
                      y: -4,
                      scale: 1.06,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/75 text-teal-900 shadow-md backdrop-blur-xl transition-colors duration-300 hover:bg-teal-900 hover:text-brass-400"
                  >
                    <Icon size={14} strokeWidth={1.8} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Bottom information card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease,
                }}
                className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-6 sm:bottom-6"
              >
                <div className="rounded-[1.4rem] border border-white/15 bg-teal-950/90 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Hours */}
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass-500 text-teal-950">
                        <Clock size={16} />
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-brass-400">
                          Hours
                        </p>

                        <p className="mt-1 text-sm font-medium text-mint-100">
                          Mon — Fri
                        </p>

                        <p className="mt-0.5 text-xs text-mint-100/55">
                          9:00 AM — 7:00 PM
                        </p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint-100/10 text-brass-400">
                        <Phone size={16} />
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-brass-400">
                          Contact
                        </p>

                        <p className="mt-1 text-sm font-medium text-mint-100">
                          +880 1XXX-XXXXXX
                        </p>

                        <p className="mt-0.5 break-all text-xs text-mint-100/55">
                          hello@drthomas.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                    <MapPin
                      size={15}
                      className="shrink-0 text-brass-400"
                    />

                    <p className="text-xs text-mint-100/60">
                      Gulshan-2, Dhaka, Bangladesh
                    </p>

                    <span className="ml-auto hidden text-[9px] uppercase tracking-[0.16em] text-mint-100/30 sm:block">
                      Clinic
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* APPOINTMENT FORM */}
          <Reveal
            delay={0.15}
            className="lg:col-span-5 rounded-[1.75rem] border border-[var(--color-border)] bg-white p-7 shadow-sm sm:p-9"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brass-600">
                  Appointment
                </p>

                <h3 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
                  Book a consultation.
                </h3>
              </div>

              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-900 text-brass-400 sm:flex">
                <ArrowUpRight size={17} />
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-ink-faint">
              Choose a preferred date and service. We&apos;ll contact you to
              confirm the appointment.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="mt-10 rounded-2xl bg-mint-200/60 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-900 text-mint-100">
                  <Check size={20} />
                </span>

                <p className="mt-5 font-display text-2xl text-teal-900">
                  Request received.
                </p>

                <p className="mt-2 text-sm leading-6 text-ink-faint">
                  We&apos;ll confirm your appointment by email shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-8 space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Full name"
                    className="h-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm text-ink outline-none transition-all placeholder:text-ink-faint focus:border-teal-900 focus:bg-white focus:ring-4 focus:ring-teal-900/5"
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="h-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm text-ink outline-none transition-all placeholder:text-ink-faint focus:border-teal-900 focus:bg-white focus:ring-4 focus:ring-teal-900/5"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="date"
                    className="h-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm text-ink outline-none transition-all focus:border-teal-900 focus:bg-white focus:ring-4 focus:ring-teal-900/5"
                  />

                  <select
                    required
                    defaultValue=""
                    className="h-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm text-ink outline-none transition-all focus:border-teal-900 focus:bg-white focus:ring-4 focus:ring-teal-900/5"
                  >
                    <option value="" disabled>
                      Choose service
                    </option>
                    <option>General Medicine</option>
                    <option>Chronic Disease Management</option>
                    <option>Preventive Screening</option>
                    <option>Second Opinion</option>
                  </select>
                </div>

                <textarea
                  rows={4}
                  placeholder="Tell us briefly how we can help..."
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-ink-faint focus:border-teal-900 focus:bg-white focus:ring-4 focus:ring-teal-900/5"
                />

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group flex w-full items-center justify-between rounded-full bg-teal-900 py-2 pl-6 pr-2.5 text-sm font-medium text-mint-100 transition-colors hover:bg-teal-800 focus-ring"
                >
                  <span>Request Appointment</span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-500 text-teal-950">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-[1px]"
                    />
                  </span>
                </motion.button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
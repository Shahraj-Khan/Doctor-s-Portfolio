"use client";

import {
  Stethoscope,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
  HeartPulse,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Expertise", href: "#expertise" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Case Studies", href: "#case-studies" },
      { label: "Reviews", href: "#reviews" },
      { label: "Articles", href: "#articles" },
      { label: "FAQ", href: "#faq" },
      { label: "Fees", href: "#fees" },
    ],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-bg)] pt-10 sm:pt-16">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-teal-950 text-mint-100">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full border border-white/[0.04]" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-[22rem] w-[22rem] rounded-full border border-white/[0.04]" />

            {/* Large background text */}
            <div className="pointer-events-none absolute -bottom-12 -left-4 select-none font-display text-[11rem] leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[15rem]">
              CARE
            </div>

            {/* Floating medical icon */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute right-8 top-8 hidden h-20 w-20 items-center justify-center rounded-full border border-brass-400/20 bg-brass-500/[0.06] text-brass-400 lg:flex"
            >
              <HeartPulse size={32} strokeWidth={0.8} />
            </motion.div>

            <div className="relative p-7 sm:p-10 lg:p-14">
              {/* Top CTA */}
              <div className="border-b border-white/10 pb-12 lg:pb-14">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-8">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-9 bg-brass-400" />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brass-400">
                        Your health, thoughtfully managed
                      </span>
                    </div>

                    <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-[5rem]">
                      Good care starts
                      <br />
                      <span className="italic text-brass-400">
                        with a conversation.
                      </span>
                    </h2>
                  </div>

                  <div className="lg:col-span-4 lg:flex lg:justify-end">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-3 rounded-full bg-brass-500 py-2.5 pl-5 pr-2.5 text-sm font-medium text-teal-950 transition-all duration-300 hover:bg-brass-400 focus-ring"
                    >
                      <span>Book a consultation</span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-950/10">
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Main footer */}
              <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr] lg:gap-16">
                {/* Brand */}
                <div>
                  <a
                    href="#home"
                    className="group inline-flex items-center gap-3"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-500 text-teal-950 transition-transform duration-300 group-hover:rotate-6">
                      <Stethoscope size={18} strokeWidth={2} />
                    </span>

                    <span className="font-display text-xl">
                      Dr. Thomas
                    </span>
                  </a>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-mint-100/45">
                    Internal Medicine specialist dedicated to clear,
                    compassionate, evidence-based care for chronic and
                    everyday health concerns.
                  </p>

                  {/* Socials */}
                  <div className="mt-7 flex items-center gap-2">
                    {socials.map(({ icon: Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mint-100/60 transition-all duration-300 hover:border-brass-400/40 hover:bg-brass-500 hover:text-teal-950 focus-ring"
                      >
                        <Icon
                          size={14}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Navigation columns */}
                {columns.map((column) => (
                  <div key={column.title}>
                    <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-brass-400">
                      {column.title}
                    </p>

                    <ul className="space-y-3">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="group inline-flex items-center gap-1.5 text-sm text-mint-100/60 transition-colors duration-300 hover:text-mint-100"
                          >
                            <span>{link.label}</span>

                            <ArrowUpRight
                              size={11}
                              className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                  <p className="text-[10px] text-mint-100/35">
                    © {new Date().getFullYear()} Dr. Amelia Thomas.
                  </p>

                  <span className="hidden h-1 w-1 rounded-full bg-brass-400/50 sm:block" />

                  <p className="text-[10px] text-mint-100/35">
                    All rights reserved.
                  </p>
                </div>

                <p className="text-[10px] uppercase tracking-[0.16em] text-mint-100/25">
                  Designed for clarity · Built for care
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Back to top */}
        <Reveal delay={0.15}>
          <div className="flex items-center justify-between py-5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Dr. Thomas · Internal Medicine
            </span>

            <a
              href="#home"
              className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-900 focus-ring"
            >
              Back to top

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-teal-900/15 transition-all duration-300 group-hover:border-teal-900 group-hover:bg-teal-900 group-hover:text-mint-100">
                <ArrowUpRight
                  size={12}
                  className="-rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Counter } from "./Counter";
import { images, stats } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#102c28_1px,transparent_1px),linear-gradient(to_bottom,#102c28_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-40 top-32 h-[500px] w-[500px] rounded-full bg-brass-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="relative z-10 lg:col-span-6 lg:pr-8">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-brass-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-600">
                Internal Medicine
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease,
              }}
              className="font-display text-balance text-[4rem] leading-[0.92] tracking-[-0.045em] text-ink sm:text-[5.3rem] lg:text-[5.8rem] xl:text-[6.5rem]"
            >
              Medicine
              <br />
              with{" "}
              <span className="italic text-teal-900">
                clarity.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.22,
                ease,
              }}
              className="mt-7 max-w-xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8"
            >
              Dr. Thomas provides thoughtful, evidence-based care
              focused on helping patients understand their health and make
              confident decisions about their treatment.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.34,
                ease,
              }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-teal-900 pl-6 pr-2 py-2 text-sm font-medium text-mint-100 transition-all duration-300 hover:bg-teal-800 hover:shadow-lg focus-ring"
              >
                <span>Book an Appointment</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-500 text-teal-950 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} strokeWidth={2} />
                </span>
              </a>

              <a
                href="#about"
                className="group text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                Discover my approach
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.46,
                ease,
              }}
              className="mt-12 flex items-center gap-7 border-t border-[var(--color-border)] pt-6"
            >
              <div>
                <p className="font-display text-lg text-teal-900">
                  MBBS, FCPS
                </p>

                <p className="mt-1 text-xs text-ink-faint">
                  Internal Medicine
                </p>
              </div>

              <span className="h-10 w-px bg-[var(--color-border)]" />

              <div>
                <p className="font-display text-lg text-teal-900">
                  14+
                </p>

                <p className="mt-1 text-xs text-ink-faint">
                  Years of practice
                </p>
              </div>
            </motion.div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}
          <div className="relative lg:col-span-6">

            {/* Vertical Decorative Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease,
              }}
              className="absolute -left-5 top-0 hidden h-full w-px origin-top bg-[var(--color-border)] lg:block"
            />

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease,
              }}
              className="relative"
            >
              <motion.div
                style={{
                  y: imageY,
                  scale: imageScale,
                }}
                className="relative h-[500px] overflow-hidden rounded-[2rem] bg-teal-900 shadow-2xl sm:h-[590px] lg:h-[650px]"
              >
                <Image
                  src={images.heroDoctor}
                  alt="Dr. Amelia Thomas, Internal Medicine specialist"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-1000 hover:scale-[1.03]"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/75 via-transparent to-transparent" />

                {/* Top Label */}
                <div className="absolute left-6 top-6">
                  <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/90">
                      Trusted · Experienced · Personal
                    </span>
                  </div>
                </div>

                {/* Bottom Information */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="rounded-2xl border border-white/15 bg-teal-950/40 p-5 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-mint-100/60">
                      Specialist in
                    </p>

                    <p className="mt-1 font-display text-xl text-mint-100 sm:text-2xl">
                      Internal Medicine & Chronic Care
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =========================
                  PATIENTS STAT CARD
              ========================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.75,
                  ease,
                }}
                className="absolute bottom-40 -left-4 hidden rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-xl sm:block lg:-left-10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-900 text-brass-500">
                    <Plus size={17} strokeWidth={2} />
                  </div>

                  <div>
                    <div className="font-display text-2xl text-teal-900">
                      <Counter
                        value={stats[0].value}
                        suffix={stats[0].suffix}
                      />
                    </div>

                    <p className="text-[11px] text-ink-faint">
                      Patients treated
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =========================
                  SATISFACTION CARD
              ========================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.9,
                  ease,
                }}
                className="absolute -right-4 top-1/3 hidden rounded-2xl border border-[var(--color-border)] bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md lg:block"
              >
                <div className="font-display text-2xl text-teal-900">
                  <Counter
                    value={stats[2].value}
                    suffix={stats[2].suffix}
                  />
                </div>

                <p className="mt-0.5 text-[11px] text-ink-faint">
                  Patient satisfaction
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
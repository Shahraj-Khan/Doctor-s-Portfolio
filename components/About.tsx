"use client";

import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { images, stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-content px-6">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">

          {/* =========================
              IMAGE SIDE
          ========================= */}
          <Reveal className="lg:col-span-5">
            <div className="relative">

              {/* Decorative offset frame */}
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[1.5rem] border border-brass-500/30 sm:-right-5 sm:-top-5" />

              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-teal-900">
                <Image
                  src={images.aboutWard}
                  alt="Dr. Thomas attending to a patient on hospital rounds"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-1000 hover:scale-[1.04]"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-transparent" />

                {/* Image top label */}
                <div className="absolute left-5 top-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-teal-950/30 px-3.5 py-2 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-brass-500" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/90">
                      Internal Medicine
                    </span>
                  </div>
                </div>

                {/* Image bottom information */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                        Experience
                      </p>

                      <p className="mt-1 font-display text-2xl text-white">
                        14+ Years
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass-500 text-teal-950">
                      <Plus size={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating patient stat */}
              <div className="absolute -bottom-5 -right-3 rounded-xl border border-[var(--color-border)] bg-white px-5 py-4 shadow-xl sm:-right-7">
                <div className="font-display text-2xl text-teal-900">
                  10K+
                </div>

                <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                  Patients treated
                </p>
              </div>
            </div>
          </Reveal>

          {/* =========================
              CONTENT SIDE
          ========================= */}
          <div className="lg:col-span-7">

            {/* Section label */}
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-brass-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brass-600">
                  About Me
                </span>
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal delay={0.05}>
              <h2 className="max-w-2xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-ink text-balance sm:text-5xl lg:text-[4.2rem]">
                A practice built on{" "}
                <span className="italic text-teal-900">
                  listening.
                </span>
              </h2>
            </Reveal>

            {/* Accent line */}
            <Reveal delay={0.1}>
              <div className="mt-7 h-px w-full max-w-xl bg-[var(--color-border)]" />
            </Reveal>

            {/* Intro */}
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-xl text-lg leading-8 text-ink-soft">
                Dr. Thomas is an Internal Medicine specialist skilled in
                diagnosing, treating, and preventing chronic diseases. For
                over a decade, the practice has centered on one idea: care
                improves when patients understand exactly what&apos;s happening
                to them and why.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-5 max-w-xl text-base leading-7 text-ink-faint sm:text-lg sm:leading-8">
                From first consultation to long-term management, every plan
                is built around your specific history, lifestyle, and goals —
                not a generic protocol.
              </p>
            </Reveal>

            {/* =========================
                MINI STATS
            ========================= */}
            <Reveal delay={0.28}>
              <div className="mt-9 grid max-w-xl grid-cols-3 border-y border-[var(--color-border)] py-5">

                <div>
                  <p className="font-display text-2xl text-teal-900 sm:text-3xl">
                    10K+
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                    Patients
                  </p>
                </div>

                <div className="border-l border-[var(--color-border)] pl-5">
                  <p className="font-display text-2xl text-teal-900 sm:text-3xl">
                    14+
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                    Years
                  </p>
                </div>

                <div className="border-l border-[var(--color-border)] pl-5">
                  <p className="font-display text-2xl text-teal-900 sm:text-3xl">
                    98%
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                    Satisfaction
                  </p>
                </div>

              </div>
            </Reveal>

            {/* =========================
                CTA
            ========================= */}
            <Reveal delay={0.35}>
              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-ink focus-ring"
              >
                <span className="border-b border-ink/30 pb-1 transition-colors duration-300 group-hover:border-brass-500 group-hover:text-brass-600">
                  More about Dr. Thomas
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-900 text-mint-100 transition-all duration-300 group-hover:bg-brass-500 group-hover:text-teal-950">
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-[1px]"
                  />
                </span>
              </a>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
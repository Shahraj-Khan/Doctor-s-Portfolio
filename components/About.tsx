"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { images } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative rounded-xl2 overflow-hidden aspect-[4/5]">
              <Image
                src={images.aboutWard}
                alt="Dr. Thomas attending to a patient on hospital rounds"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl text-ink text-balance">
                A practice built on listening
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
                Dr. Thomas is an Internal Medicine specialist skilled in
                diagnosing, treating, and preventing chronic diseases. For
                over a decade, his practice has centered on one idea: care
                improves when patients understand exactly what's happening
                to them and why.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-lg text-ink-soft max-w-xl leading-relaxed">
                From first consultation to long-term management, every plan
                is built around your specific history, lifestyle, and goals —
                not a generic protocol.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-ink hover:border-brass-500 hover:text-brass-600 transition-colors group focus-ring"
              >
                <span>More about Dr. Thomas</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

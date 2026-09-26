"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="flex items-end justify-between gap-6 mb-14">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl text-ink text-balance">
              Case study
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="hidden sm:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink border-b border-ink/20 hover:border-ink pb-1 transition-colors focus-ring"
            >
              More case studies <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {caseStudies.map((c) => (
            <motion.div
              key={c.title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-xl2 overflow-hidden bg-white/70 border border-mint-300"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-ink text-balance">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-ink-faint leading-relaxed">
                  {c.summary}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-teal-900 border-b border-teal-900/30 hover:border-teal-900 pb-0.5 transition-colors focus-ring"
                >
                  Full case study <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

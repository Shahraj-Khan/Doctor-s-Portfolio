"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { articles } from "@/lib/data";

export function Articles() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between gap-6 sm:mb-14">
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-brass-500" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brass-600">
                  From the journal
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl leading-[0.98] tracking-[-0.035em] text-ink sm:text-5xl">
                Read articles
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="hidden sm:block">
            <a
              href="#"
              className="group inline-flex items-center gap-2 border-b border-ink/20 pb-1.5 text-sm font-medium text-ink-soft transition-colors duration-300 hover:border-ink hover:text-ink focus-ring"
            >
              <span>View all articles</span>

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        {/* Articles */}
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {articles.map((article, index) => (
            <motion.a
              href="#"
              key={article.title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              className="group relative flex overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-white/75 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-[40%] shrink-0 overflow-hidden sm:w-2/5 sm:aspect-auto">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 40vw, 280px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-950/10 transition-opacity duration-500 group-hover:opacity-0" />

                {/* Article number */}
                <span className="absolute left-4 top-4 font-display text-3xl leading-none text-white/75 drop-shadow-sm">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brass-500" />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                      Health Journal
                    </span>
                  </div>

                  <h3 className="font-display text-lg leading-[1.15] tracking-[-0.015em] text-ink transition-colors duration-300 group-hover:text-teal-900 sm:text-xl">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 text-ink-faint">
                    {article.date} <span className="mx-1.5">·</span>{" "}
                    {article.readTime}
                  </p>
                </div>

                {/* Read link */}
                <span className="mt-6 inline-flex w-fit items-center gap-1.5 border-b border-teal-900/20 pb-0.5 text-xs font-medium text-teal-900 transition-all duration-300 group-hover:border-teal-900">
                  Read article

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>

              {/* Bottom hover accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-brass-500"
              />
            </motion.a>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
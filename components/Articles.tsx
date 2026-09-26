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
        <div className="flex items-end justify-between gap-6 mb-14">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl text-ink text-balance">
              Read articles
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="hidden sm:block">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink border-b border-ink/20 hover:border-ink pb-1 transition-colors focus-ring"
            >
              Read more <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {articles.map((a) => (
            <motion.a
              href="#"
              key={a.title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group rounded-xl2 overflow-hidden bg-white/70 border border-mint-300 flex flex-col sm:flex-row"
            >
              <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 280px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-lg text-ink text-balance leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-xs text-ink-faint">
                    {a.date} · {a.readTime}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-teal-900 border-b border-teal-900/30 group-hover:border-teal-900 pb-0.5 transition-colors w-fit">
                  Read more <ArrowUpRight size={13} />
                </span>
              </div>
            </motion.a>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

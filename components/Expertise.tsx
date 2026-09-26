"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { expertise } from "@/lib/data";

export function Expertise() {
  return (
    <section id="expertise" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="flex items-end justify-between gap-6 mb-14">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl text-ink text-balance">
              Areas of expertise
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="hidden sm:block">
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink border-b border-ink/20 hover:border-ink pb-1 transition-colors focus-ring"
            >
              See more <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {expertise.map((item) => (
            <motion.div
              key={item.title}
              variants={revealItem}
              className="group relative rounded-xl2 overflow-hidden aspect-[3/4]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-teal-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-mint-100/70 text-xs mb-2 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[85%]">
                  {item.description}
                </p>
                <div className="flex items-center justify-between rounded-full bg-mint-100/10 backdrop-blur-md px-4 py-2.5 border border-mint-100/15">
                  <span className="text-mint-100 text-sm">{item.title}</span>
                  <ArrowUpRight size={15} className="text-mint-100/80" />
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

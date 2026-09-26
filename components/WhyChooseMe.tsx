"use client";

import { motion } from "framer-motion";
import { HeartPulse, Microscope, Compass, HandHeart } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { whyChooseMe } from "@/lib/data";

const icons = [HeartPulse, Microscope, Compass, HandHeart];

export function WhyChooseMe() {
  return (
    <section className="py-20 sm:py-28 bg-mint-200/60">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl text-ink text-balance max-w-lg">
              Why patients choose this practice
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-faint max-w-xs text-sm sm:text-right">
              Trusted medical care focused on accuracy, compassion, and
              long-term health.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {whyChooseMe.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                variants={revealItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="rounded-xl2 bg-teal-900 p-7 text-mint-100 flex flex-col justify-between min-h-[220px]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint-100/10 text-brass-400">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <div className="mt-8">
                  <h3 className="font-display text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-mint-100/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

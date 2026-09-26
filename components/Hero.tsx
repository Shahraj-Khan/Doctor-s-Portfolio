"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Counter } from "./Counter";
import { images, stats } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Decorative vertical rules echoing a chart / vitals motif */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[repeating-linear-gradient(90deg,#16231F_0px,#16231F_1px,transparent_1px,transparent_64px)]" />
      </div>

      <div className="relative mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-brass-600 font-medium text-sm mb-5"
            >
              Internal Medicine · Chronic Disease Care
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-balance text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-ink"
            >
              Meet Dr.{" "}
              <span className="italic text-teal-900">Amelia Thomas</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-md text-ink-soft text-base sm:text-lg"
            >
              MBBS, FCPS (Medicine) — helping patients understand, manage, and
              overcome chronic conditions with clarity and care.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex items-center gap-5"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-900 pl-6 pr-2 py-2 text-mint-100 hover:bg-teal-800 transition-colors focus-ring"
              >
                <span className="text-sm">Book Appointment</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brass-500 text-teal-950 transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-6 sm:gap-10 justify-start lg:justify-end"
            >
              {stats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl sm:text-4xl text-teal-900">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-ink-faint mt-1 max-w-[9rem]">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 sm:mt-16 rounded-xl2 overflow-hidden bg-teal-900"
        >
          <motion.div style={{ y, opacity }} className="relative h-[420px] sm:h-[560px] md:h-[640px]">
            <Image
              src={images.heroDoctor}
              alt="Dr. Amelia Thomas, Internal Medicine specialist, smiling in a white coat with a stethoscope"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-top scale-110"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent" />

          <div className="absolute bottom-0 inset-x-0 flex flex-wrap items-end justify-between gap-6 p-6 sm:p-9">
            <div>
              <p className="text-mint-100/70 text-xs mb-1">Credentials</p>
              <p className="font-display text-mint-100 text-xl sm:text-2xl">
                MBBS, FCPS (Medicine)
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <div className="font-display text-2xl text-mint-100">
                  <Counter value={stats[0].value} suffix={stats[0].suffix} />
                </div>
                <div className="text-[11px] text-mint-100/60 mt-0.5">
                  Patients treated
                </div>
              </div>
              <div>
                <div className="font-display text-2xl text-mint-100">
                  <Counter value={stats[1].value} suffix={stats[1].suffix} />
                </div>
                <div className="text-[11px] text-mint-100/60 mt-0.5">
                  Years experience
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

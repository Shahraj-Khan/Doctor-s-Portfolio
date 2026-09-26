"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { services } from "@/lib/data";

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="rounded-xl2 bg-teal-900 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl text-mint-100 text-balance">
                  My Services
                </h2>
                <p className="mt-4 text-mint-100/65 text-sm leading-relaxed max-w-xs">
                  Personalized medical services designed to support your
                  health at every stage of life.
                </p>
              </div>
              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => scroll(-1)}
                  aria-label="Previous service"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-mint-100/20 text-mint-100 hover:bg-mint-100/10 transition-colors focus-ring"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scroll(1)}
                  aria-label="Next service"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-500 text-teal-950 hover:bg-brass-400 transition-colors focus-ring"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div
              ref={trackRef}
              className="flex gap-4 overflow-x-auto no-scrollbar px-6 sm:px-4 pb-8 lg:pb-0 lg:py-6 snap-x snap-mandatory"
            >
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group relative min-w-[260px] sm:min-w-[280px] aspect-[4/5] rounded-xl2 overflow-hidden snap-start shrink-0"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="280px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-mint-100/60 text-xs mb-2 leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
                      {s.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-mint-100 text-sm font-medium max-w-[80%]">
                        {s.title}
                      </span>
                      <ArrowUpRight size={16} className="text-mint-100/80 shrink-0" />
                    </div>
                  </div>
                </div>
              ))}
              <div className="min-w-[1px] shrink-0 lg:hidden" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

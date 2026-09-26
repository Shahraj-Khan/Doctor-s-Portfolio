"use client";

import { Stethoscope, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";

const columns = [
  {
    title: "Navigate",
    links: ["Home", "About", "Expertise", "Services", "Contact"],
  },
  {
    title: "Practice",
    links: ["Case Studies", "Articles", "FAQ", "Consultation Fees"],
  },
];

export function Footer() {
  return (
    <footer className="pt-20 pb-10">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="rounded-xl2 bg-teal-950 text-mint-100 p-8 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-12">
            <div>
              <a href="#home" className="flex items-center gap-2 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brass-500 text-teal-950">
                  <Stethoscope size={17} strokeWidth={2} />
                </span>
                <span className="font-display text-lg">Dr. Thomas</span>
              </a>
              <p className="text-mint-100/55 text-sm max-w-xs leading-relaxed">
                Internal Medicine specialist dedicated to clear, compassionate,
                evidence-based care for chronic and everyday health concerns.
              </p>
              <div className="flex gap-2 mt-6">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-mint-100/8 hover:bg-mint-100/15 transition-colors focus-ring"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-mint-100/50 text-xs mb-4">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-mint-100/80 hover:text-brass-400 transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-6 border-t border-mint-100/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-mint-100/45">
            <p>© {new Date().getFullYear()} Dr. Amelia Thomas. All rights reserved.</p>
            <p>Designed for clarity, built for care.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Stethoscope } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Fees", href: "#fees" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-4"
    >
      <div
        className={`w-full max-w-content flex items-center justify-between rounded-full px-5 sm:px-7 transition-all duration-500 ${
          scrolled
            ? "h-16 bg-white/70 backdrop-blur-xl shadow-card border border-white/60"
            : "h-20 bg-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-900 text-mint-100 transition-transform group-hover:scale-105">
            <Stethoscope size={17} strokeWidth={2} />
          </span>
          <span className="font-display text-lg text-ink tracking-tight">
            Dr. Thomas
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors relative group focus-ring rounded"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-teal-900 px-5 py-2.5 text-sm text-mint-100 hover:bg-teal-800 transition-colors focus-ring"
        >
          Consult Me
        </a>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-ink focus-ring"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-teal-950/98 backdrop-blur-sm lg:hidden"
          >
            <div className="flex justify-between items-center px-6 pt-6">
              <span className="font-display text-lg text-mint-100">Dr. Thomas</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-mint-100 focus-ring"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-2 px-8 pt-16">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="font-display text-3xl text-mint-100/90 hover:text-brass-400 transition-colors py-3"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

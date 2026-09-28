"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 1 }}
          className="fixed inset-0 z-[9999] pointer-events-none"
        >
          {/* LEFT DOOR */}
          <motion.div
            initial={{ x: "0%" }}
            exit={{
              x: "-100%",
              transition: {
                duration: 1.1,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="absolute inset-y-0 left-0 w-1/2 bg-teal-950"
          />

          {/* RIGHT DOOR */}
          <motion.div
            initial={{ x: "0%" }}
            exit={{
              x: "100%",
              transition: {
                duration: 1.1,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="absolute inset-y-0 right-0 w-1/2 bg-teal-950"
          />

          {/* CENTER CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.96,
              transition: { duration: 0.25 },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <div className="flex flex-col items-center">

              {/* HEART + ECG */}
              <div className="relative h-28 w-28">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                >
                  {/* Heart */}
                  <path
                    d="M50 86
                    C44 80 18 64 12 45
                    C7 29 16 17 30 17
                    C39 17 46 22 50 30
                    C54 22 61 17 70 17
                    C84 17 93 29 88 45
                    C82 64 56 80 50 86Z"
                    stroke="rgba(216,194,155,0.4)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* ECG */}
                  <motion.path
                    d="M8 50
                    H27
                    L34 50
                    L39 39
                    L45 62
                    L51 27
                    L57 50
                    H70
                    L76 44
                    L81 50
                    H92"
                    stroke="#d8c29b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.2,
                    }}
                  />
                </svg>

                {/* Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.25, 0.1],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-8 rounded-full bg-brass-400/20 blur-2xl"
                />
              </div>

              {/* BRAND */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35,
                  duration: 0.5,
                }}
                className="mt-6 text-center"
              >
                <h1 className="font-display text-2xl tracking-tight text-mint-100">
                  Dr. Thomas
                </h1>

                <p className="mt-1.5 text-[9px] uppercase tracking-[0.32em] text-brass-400/80">
                  Internal Medicine
                </p>
              </motion.div>

              {/* LOADING LINE */}
              <div className="mt-8 h-px w-24 overflow-hidden bg-white/10">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-full w-1/2 bg-brass-400"
                />
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
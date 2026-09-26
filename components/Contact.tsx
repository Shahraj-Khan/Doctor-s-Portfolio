"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Facebook, Instagram, Twitter, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { images } from "@/lib/data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal className="relative rounded-xl2 overflow-hidden min-h-[420px]">
            <Image
              src={images.contactRoom}
              alt="Dr. Thomas greeting a patient in the consultation room"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 grid grid-cols-3 gap-4">
              {[
                { icon: Clock, label: "Work Hours", value: "Mon–Fri, 9AM–7PM" },
                { icon: MapPin, label: "Location", value: "Gulshan, Dhaka" },
                { icon: Phone, label: "Support", value: "hello@drthomas.com" },
              ].map((item) => (
                <div key={item.label}>
                  <item.icon size={15} className="text-brass-400 mb-2" />
                  <p className="text-mint-100 text-xs font-medium">{item.label}</p>
                  <p className="text-mint-100/60 text-[11px] mt-0.5 leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute top-7 left-7 flex gap-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-mint-100/10 backdrop-blur-md text-mint-100 border border-mint-100/15"
                >
                  <Icon size={14} />
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="rounded-xl2 bg-white/70 border border-mint-300 p-7 sm:p-9">
            <h2 className="font-display text-3xl sm:text-4xl text-ink">
              Book an appointment
            </h2>
            <p className="mt-3 text-ink-faint text-sm max-w-sm">
              Questions? Comments? Share a message and we&rsquo;ll get back to
              you within one business day.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 flex flex-col items-start gap-3 py-10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-900 text-mint-100">
                  <Check size={20} />
                </span>
                <p className="font-display text-xl text-ink">Request received</p>
                <p className="text-ink-faint text-sm">
                  We&rsquo;ll confirm your appointment by email shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-8 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Name"
                    className="rounded-xl bg-white border border-mint-300 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus-ring outline-none"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="rounded-xl bg-white border border-mint-300 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus-ring outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="date"
                    className="rounded-xl bg-white border border-mint-300 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus-ring outline-none"
                  />
                  <select
                    required
                    defaultValue=""
                    className="rounded-xl bg-white border border-mint-300 px-4 py-3 text-sm text-ink focus-ring outline-none"
                  >
                    <option value="" disabled>
                      Choose service
                    </option>
                    <option>General Medicine</option>
                    <option>Chronic Disease Management</option>
                    <option>Preventive Screening</option>
                    <option>Second Opinion</option>
                  </select>
                </div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-xl bg-white border border-mint-300 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus-ring outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-teal-900 py-3.5 text-sm text-mint-100 hover:bg-teal-800 transition-colors focus-ring"
                >
                  Book Appointment <ArrowUpRight size={15} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

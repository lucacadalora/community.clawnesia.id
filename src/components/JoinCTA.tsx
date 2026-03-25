"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const links = [
  { label: "Telegram", href: "#" },
  { label: "WhatsApp", href: "#" },
  { label: "Instagram", href: "#" },
];

export function JoinCTA() {
  return (
    <section id="join" className="section-shell bg-sand">
      <div className="section-inner">
        <ScrollReveal className="w-full max-w-full overflow-hidden rounded-[32px] border border-sand bg-cream-card p-6 text-center shadow-card sm:p-8 md:p-12">
          <p className="eyebrow">Join</p>
          <h2 className="mt-4 font-heading text-h3 font-semibold text-carbon md:text-h2">
            Gabung Komunitas Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-stone md:text-body-lg">
            Masuk ke channel tempat builder Indonesia sharing workflow, template, dan use case AI agent yang benar-benar kepakai.
          </p>
          <div className="mt-8 flex w-full max-w-full flex-col items-stretch justify-center gap-3 md:flex-row md:items-center md:gap-4">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full max-w-full items-center justify-center whitespace-normal rounded-full bg-primary px-5 py-3 text-center font-ui text-body-sm font-semibold text-white shadow-btn transition-all hover:bg-primary-hover hover:shadow-btn-hover md:w-auto md:min-w-[180px] md:py-4 md:text-body"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

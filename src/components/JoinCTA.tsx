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
    <section id="join" className="section-shell bg-claw-dark text-claw-text-primary">
      <div className="section-inner">
        <ScrollReveal className="w-full max-w-full overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(239,254,147,0.16),transparent_40%),radial-gradient(circle_at_bottom,rgba(255,90,54,0.14),transparent_45%),rgba(255,255,255,0.03)] p-6 text-center shadow-glass sm:p-8 md:p-12">
          <p className="eyebrow text-claw-lime">Join</p>
          <h2 className="mt-4 font-heading text-h3 font-semibold text-claw-text-primary md:text-h2">
            Gabung Komunitas Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-claw-text-muted md:text-body-lg">
            Masuk ke channel tempat builder Indonesia sharing workflow, template, dan use case AI agent yang benar-benar kepakai.
          </p>
          <div className="mt-8 flex w-full max-w-full flex-col items-stretch justify-center gap-3 md:flex-row md:items-center md:gap-4">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full max-w-full items-center justify-center whitespace-normal rounded-full bg-claw-coral px-5 py-3 text-center font-ui text-body-sm font-semibold text-white shadow-glow-coral transition-colors hover:bg-claw-coral-light md:w-auto md:min-w-[180px] md:py-4 md:text-body"
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

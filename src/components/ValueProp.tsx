"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const personas = [
  {
    title: "Pengusaha UMKM",
    description:
      "Otomasi customer service, inventory, dan pembukuan dengan AI agent.",
    accent: "bg-claw-lime text-claw-text-strong shadow-glow-lime",
    icon: "🏪",
  },
  {
    title: "Eksportir",
    description:
      "AI yang riset pasar, follow-up buyer, dan manage dokumen ekspor 24/7.",
    accent: "bg-claw-lime-muted text-claw-lime shadow-glow-lime",
    icon: "🌍",
  },
  {
    title: "Freelancer & Agency",
    description:
      "Satu AI agent bisa handle pekerjaan 3 asisten virtual untuk tim kamu.",
    accent: "bg-claw-dark-elevated text-claw-text-primary",
    icon: "💼",
  },
  {
    title: "Startup Founder",
    description:
      "Deploy AI agents untuk marketing, ops, dan customer support dari hari pertama.",
    accent: "bg-claw-coral text-white shadow-glow-coral",
    icon: "🚀",
  },
];

export function ValueProp() {
  return (
    <section className="section-shell dot-pattern">
      <div className="section-inner">
        <ScrollReveal className="max-w-3xl">
          <p className="eyebrow text-claw-lime">Value Prop</p>
          <h2 className="mt-4 font-heading text-h3 font-semibold text-claw-text-primary md:text-h2">
            AI Agents sudah di sini. Dan mereka mengubah segalanya.
          </h2>
          <p className="mt-4 text-body text-claw-text-muted md:text-body-lg">
            Kami bantu kamu deploy AI yang bekerja, bukan cuma chatbot.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {personas.map((persona, index) => (
            <ScrollReveal key={persona.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-8 shadow-glass transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div
                  className={`mb-8 flex h-12 w-12 items-center justify-center rounded-full text-body ${persona.accent}`}
                >
                  {persona.icon}
                </div>
                <h3 className="font-heading text-h5 font-medium text-claw-text-primary">
                  {persona.title}
                </h3>
                <p className="mt-4 text-body text-claw-text-muted">
                  {persona.description}
                </p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

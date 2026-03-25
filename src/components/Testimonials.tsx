"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const framerEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    name: "Raka Pratama",
    title: "Owner toko online",
    quote:
      "AI agent dari Clawnesia Build sudah handle 80% customer service toko saya.",
  },
  {
    name: "Nadia Kusuma",
    title: "Eksportir furnitur",
    quote:
      "Sekarang saya punya AI yang riset buyer ekspor otomatis setiap hari.",
  },
  {
    name: "Arif Hidayat",
    title: "Freelancer automation",
    quote:
      "Workshop-nya langsung praktek, pulang-pulang sudah punya AI agent jalan.",
  },
];

export function Testimonials() {
  return (
    <section className="section-shell bg-white">
      <div className="section-inner">
        <ScrollReveal className="max-w-3xl">
          <p className="eyebrow text-claw-lime">Testimoni</p>
          <h2 className="mt-4 font-heading text-h3 font-semibold text-claw-text-primary md:text-h2">
            Hasil nyata dari builder Indonesia
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.08}>
              <motion.article
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: framerEase }}
                className="flex h-full w-full min-w-0 max-w-full flex-col justify-between rounded-[24px] border border-slate-200 bg-white p-8 shadow-card"
              >
                <p className="text-body italic text-claw-text-muted md:text-body-lg">
                  “{testimonial.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-claw-lime font-heading text-body font-semibold text-claw-text-strong shadow-glow-lime">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-ui text-body font-semibold text-claw-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="font-ui text-caption text-claw-text-muted">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

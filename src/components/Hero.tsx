"use client";

import { motion } from "framer-motion";

const framerEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const heroImages = [
  "Customer Service Bot",
  "Auto-Research",
  "Social Media Agent",
  "Export Assistant",
  "Inventory Manager",
  "Financial Tracker",
  "Lead Generator",
  "Content Creator",
];

const navLinks = [
  { label: "Komunitas", href: "#join" },
  { label: "The Blueprint", href: "https://blueprint.clawnesia.id" },
];

const headingLines = [
  "Deploy AI Agents",
  "Yang Bekerja 24/7",
  "Untuk Bisnismu",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const line = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: framerEase,
    },
  },
};

export function Hero() {
  return (
    <section className="dot-pattern relative min-h-screen overflow-hidden bg-cream text-carbon">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(255,143,80,0.14),transparent_60%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(194,94,32,0.08),transparent_55%)]" />
      <div className="section-shell relative flex min-h-screen flex-col">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="section-inner-wide flex min-w-0 items-center justify-between gap-4"
        >
          <a href="#" className="font-heading text-body-sm font-semibold tracking-[0.18em] uppercase sm:text-body">
            Clawnesia Build
          </a>
          <nav className="hidden items-center gap-3 md:flex md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-ui text-caption text-carbon hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.header>

        <div className="section-inner-wide flex min-w-0 flex-1 flex-col justify-center gap-12 py-16">
          <div className="max-w-4xl min-w-0">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-2"
            >
              {headingLines.map((lineText) => (
                <motion.h1
                  key={lineText}
                  variants={line}
                  className="font-heading text-[1.5rem] font-bold leading-[1.1] tracking-tighter text-carbon md:text-h1 lg:text-display"
                >
                  {lineText}
                </motion.h1>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: framerEase }}
              className="mt-6 max-w-2xl text-body text-stone md:text-body-lg"
            >
              Komunitas builder Indonesia yang menggunakan AI agents untuk otomasi bisnis nyata.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: framerEase }}
              className="mt-6 flex w-full max-w-full flex-col gap-3 md:mt-8 md:flex-row md:gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#join"
                className="block w-full max-w-full whitespace-normal rounded-full bg-primary px-5 py-3 text-center font-ui text-[0.85rem] font-semibold text-white shadow-btn transition-all hover:bg-primary-hover hover:shadow-btn-hover md:w-auto md:px-8 md:py-4 md:text-body"
              >
                Gabung Komunitas
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://blueprint.clawnesia.id"
                className="block w-full max-w-full whitespace-normal rounded-full border border-sand bg-white px-5 py-3 text-center font-ui text-[0.85rem] font-semibold text-carbon shadow-card transition-colors hover:bg-sand/50 md:w-auto md:px-8 md:py-4 md:text-body"
              >
                Lihat Blueprint
              </motion.a>
            </motion.div>
          </div>

          <div className="relative w-full max-w-full overflow-hidden rounded-[20px] border border-sand bg-white p-3 shadow-card md:rounded-[32px] md:p-4">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
              <p className="font-ui text-caption uppercase tracking-eyebrow text-stone-muted">
                Use case AI agents
              </p>
              <span className="rounded-full bg-terracotta-bg px-3 py-1 font-ui text-caption text-terracotta">
                OpenClaw workflows
              </span>
            </div>
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex w-max gap-4"
            >
              {[...heroImages, ...heroImages].map((label, index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex h-48 w-[220px] shrink-0 flex-col justify-between rounded-[20px] border border-sand bg-white p-4 shadow-card sm:h-56 sm:w-[260px] sm:rounded-[28px] sm:p-5 md:h-72 md:w-[320px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="pill-tag">Clawnesia</span>
                    <span className="h-3 w-3 rounded-full bg-success" />
                  </div>
                  <div>
                    <p className="font-heading text-h5 text-carbon">{label}</p>
                    <p className="mt-2 max-w-[16rem] text-body-sm text-stone">
                      AI agent siap dipakai untuk operasional, riset, dan growth tim kecil.
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  { label: "The Blueprint", href: "https://clawnesia.id" },
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
    <section className="relative min-h-screen overflow-hidden bg-claw-dark text-claw-text-primary">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(239,254,147,0.24),transparent_60%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,90,54,0.16),transparent_55%)]" />
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
                className="font-ui text-caption text-claw-text-muted hover:text-claw-lime"
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
                  className="font-heading text-[1.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-claw-text-primary md:text-h1 lg:text-display"
                >
                  {lineText}
                </motion.h1>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: framerEase }}
              className="mt-6 max-w-2xl text-body text-claw-text-muted md:text-body-lg"
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
                className="block w-full max-w-full whitespace-normal rounded-full bg-claw-coral px-5 py-3 text-center font-ui text-[0.85rem] font-semibold text-white shadow-glow-coral transition-colors hover:bg-claw-coral-light md:w-auto md:px-8 md:py-4 md:text-body"
              >
                Gabung Komunitas
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://clawnesia.id"
                className="block w-full max-w-full whitespace-normal rounded-full border border-white/20 px-5 py-3 text-center font-ui text-[0.85rem] font-semibold text-claw-text-primary hover:bg-white/5 md:w-auto md:px-8 md:py-4 md:text-body"
              >
                Lihat Blueprint
              </motion.a>
            </motion.div>
          </div>

          <div className="relative w-full max-w-full overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-3 shadow-glass backdrop-blur-sm md:rounded-[32px] md:p-4">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
              <p className="font-ui text-caption uppercase tracking-[0.2em] text-claw-text-muted">
                Use case AI agents
              </p>
              <span className="rounded-full border border-claw-lime/30 bg-claw-lime-muted px-3 py-1 font-ui text-caption text-claw-lime shadow-glow-lime">
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
                  className="flex h-48 w-[220px] shrink-0 flex-col justify-between rounded-[20px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-glass sm:h-56 sm:w-[260px] sm:rounded-[28px] sm:p-5 md:h-72 md:w-[320px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="pill-tag">Clawnesia</span>
                    <span className="h-3 w-3 rounded-full bg-claw-lime shadow-glow-lime" />
                  </div>
                  <div>
                    <p className="font-heading text-h5 text-claw-text-primary">{label}</p>
                    <p className="mt-2 max-w-[16rem] text-body-sm text-claw-text-muted">
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

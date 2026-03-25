"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const tabs = ["Learn", "Build", "Earn"] as const;
type Tab = (typeof tabs)[number];

const buildProjects = [
  {
    company: "UMKM",
    title: "AI Customer Service Bot",
    earnings: "Rp 0",
    difficulty: "Pemula",
    duration: "2 jam",
    year: "Gratis",
    status: "Siap jalan",
  },
  {
    company: "Ekspor",
    title: "AI Market Research Agent",
    earnings: "Rp 299K",
    difficulty: "Menengah",
    duration: "1 hari",
    year: "Workshop",
    status: "Hands-on",
  },
  {
    company: "Startup",
    title: "Full AI Operations Suite",
    earnings: "Rp 1.5jt",
    difficulty: "Lanjutan",
    duration: "1 minggu",
    year: "Blueprint",
    status: "Deploy",
  },
];

export function Ecosystem() {
  const [activeTab, setActiveTab] = useState<Tab>("Learn");
  const tabLabels: Record<Tab, string> = {
    Learn: "Belajar",
    Build: "Bangun",
    Earn: "Hasilkan",
  };

  return (
    <section className="section-shell dot-pattern">
      <div className="section-inner">
        <ScrollReveal className="max-w-3xl">
          <p className="eyebrow text-claw-lime">Ecosystem</p>
          <h2 className="mt-4 font-heading text-h3 font-semibold text-claw-text-primary md:text-h2">
            Ekosistem Belajar AI Agent Untuk Semua
          </h2>
          <a
            href="#join"
            className="mt-5 inline-flex items-center rounded-full bg-claw-coral px-6 py-3 font-ui text-body font-semibold text-white shadow-glow-coral transition-colors hover:bg-claw-coral-light"
          >
            Gabung Komunitas
          </a>
        </ScrollReveal>

        <div className="mt-10 flex w-full max-w-full flex-wrap rounded-[28px] border border-white/10 bg-claw-dark-surface p-2 sm:inline-flex sm:w-auto sm:flex-nowrap sm:rounded-full">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`min-w-0 flex-1 rounded-full px-4 py-3 font-ui text-body-sm font-semibold transition sm:flex-none sm:px-5 ${
                  isActive
                    ? "bg-claw-coral text-white shadow-glow-coral"
                    : "text-claw-text-muted hover:bg-white/5 hover:text-claw-text-primary"
                }`}
              >
                {tabLabels[tab]}
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          {activeTab === "Learn" && (
            <ScrollReveal>
              <div className="grid gap-8 rounded-[32px] border border-white/[0.08] bg-gradient-soft p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                <div className="min-w-0">
                  <p className="eyebrow text-claw-lime">Belajar</p>
                  <h3 className="mt-4 font-heading text-h3 font-semibold text-claw-text-primary">
                    Dari nol sampai deploy
                  </h3>
                  <ul className="mt-6 space-y-3 text-body text-claw-text-muted">
                    <li>Materi terstruktur yang gampang diikutin</li>
                    <li>Video tutorial step-by-step</li>
                    <li>Template siap pakai untuk langsung eksekusi</li>
                  </ul>
                </div>
                <div className="min-w-0 rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-5 shadow-glass backdrop-blur sm:p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {["OpenClaw setup", "WhatsApp flow", "Riset buyer", "Ops dashboard"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-5 shadow-glass"
                      >
                        <p className="pill-tag">{item}</p>
                        <p className="mt-4 font-heading text-h5 text-claw-text-primary">
                          Modul praktikal
                        </p>
                        <p className="mt-2 text-body-sm text-claw-text-muted">
                          Belajar langsung dari use case bisnis yang relevan buat market Indonesia.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {activeTab === "Build" && (
            <ScrollReveal>
              <div className="rounded-[32px] border border-white/[0.08] bg-claw-dark-surface p-6 sm:p-8 lg:p-10">
                <p className="eyebrow text-claw-lime">Bangun</p>
                <h3 className="mt-4 font-heading text-h3 font-semibold text-claw-text-primary">
                  Karena paham tanpa praktek = nol
                </h3>
                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  {buildProjects.map((project, index) => (
                    <motion.article
                      key={project.title}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="min-w-0 rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-6 shadow-glass"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="pill-tag">{project.company}</span>
                        <span className="font-ui text-caption uppercase tracking-[0.16em] text-claw-text-muted">
                          {project.year}
                        </span>
                      </div>
                      <h4 className="mt-5 font-heading text-h5 text-claw-text-primary">
                        {project.title}
                      </h4>
                      <p className="mt-3 text-body-sm text-claw-text-muted">
                        Project {index + 1} yang dirancang buat langsung dipakai di bisnis nyata.
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-3 text-body-sm text-claw-text-primary">
                        <div className="rounded-2xl bg-claw-dark-elevated p-3">
                          <p className="font-ui text-caption uppercase tracking-[0.16em] text-claw-text-muted">
                            Harga
                          </p>
                          <p className="mt-1 font-heading text-h5">{project.earnings}</p>
                        </div>
                        <div className="rounded-2xl bg-claw-dark-elevated p-3">
                          <p className="font-ui text-caption uppercase tracking-[0.16em] text-claw-text-muted">
                            Status
                          </p>
                          <p className="mt-1 font-heading text-body">{project.status}</p>
                        </div>
                        <div className="rounded-2xl bg-claw-dark-elevated p-3">
                          <p className="font-ui text-caption uppercase tracking-[0.16em] text-claw-text-muted">
                            Level
                          </p>
                          <p className="mt-1 font-heading text-body">{project.difficulty}</p>
                        </div>
                        <div className="rounded-2xl bg-claw-dark-elevated p-3">
                          <p className="font-ui text-caption uppercase tracking-[0.16em] text-claw-text-muted">
                            Durasi
                          </p>
                          <p className="mt-1 font-heading text-body">{project.duration}</p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {activeTab === "Earn" && (
            <ScrollReveal>
              <div className="grid gap-6 rounded-[32px] bg-claw-dark p-6 text-claw-text-primary sm:p-8 lg:grid-cols-3 lg:p-10">
                {[
                  {
                    title: "Freelance",
                    description: "Ambil project implementasi AI agent buat UMKM, startup, atau personal brand.",
                  },
                  {
                    title: "Consulting",
                    description: "Naik kelas dari belajar ke jasa setup AI agent untuk klien yang butuh hasil cepat.",
                  },
                  {
                    title: "Partnership",
                    description: "Masuk jalur kolaborasi agency dan partner yang butuh talent AI agent lokal.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="min-w-0 rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-6 shadow-glass"
                  >
                    <p className="pill-tag">{item.title}</p>
                    <p className="mt-5 font-heading text-h4 text-claw-text-primary">{item.title}</p>
                    <p className="mt-3 text-body text-claw-text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}

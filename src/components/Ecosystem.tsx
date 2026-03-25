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
    <section className="section-shell bg-cream">
      <div className="section-inner">
        <ScrollReveal className="max-w-3xl">
          <p className="eyebrow">Ecosystem</p>
          <h2 className="mt-4 font-heading text-h3 font-semibold text-carbon md:text-h2">
            Ekosistem Belajar AI Agent Untuk Semua
          </h2>
          <a
            href="#join"
            className="mt-5 inline-flex items-center rounded-full bg-primary px-6 py-3 font-ui text-body font-semibold text-white shadow-btn transition-all hover:bg-primary-hover hover:shadow-btn-hover"
          >
            Gabung Komunitas
          </a>
        </ScrollReveal>

        <div className="mt-10 flex w-full max-w-full flex-wrap rounded-[28px] border border-sand bg-sand p-2 shadow-card sm:inline-flex sm:w-auto sm:flex-nowrap sm:rounded-full">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`min-w-0 flex-1 rounded-full px-4 py-3 font-ui text-body-sm font-semibold transition sm:flex-none sm:px-5 ${
                  isActive
                    ? "bg-white text-carbon shadow-card"
                    : "bg-sand text-stone hover:text-carbon"
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
              <div className="grid gap-8 rounded-[32px] border border-sand bg-white p-6 shadow-card sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                <div className="min-w-0">
                  <p className="eyebrow">Belajar</p>
                  <h3 className="mt-4 font-heading text-h3 font-semibold text-carbon">
                    Dari nol sampai deploy
                  </h3>
                  <ul className="mt-6 space-y-3 text-body text-stone">
                    <li>Materi terstruktur yang gampang diikutin</li>
                    <li>Video tutorial step-by-step</li>
                    <li>Template siap pakai untuk langsung eksekusi</li>
                  </ul>
                </div>
                <div className="min-w-0 rounded-[28px] border border-sand bg-white p-5 shadow-card sm:p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {["OpenClaw setup", "WhatsApp flow", "Riset buyer", "Ops dashboard"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[22px] border border-sand bg-white p-5 shadow-card"
                      >
                        <p className="pill-tag">{item}</p>
                        <p className="mt-4 font-heading text-h5 text-carbon">
                          Modul praktikal
                        </p>
                        <p className="mt-2 text-body-sm text-stone">
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
              <div className="rounded-[32px] border border-sand bg-white p-6 shadow-card sm:p-8 lg:p-10">
                <p className="eyebrow">Bangun</p>
                <h3 className="mt-4 font-heading text-h3 font-semibold text-carbon">
                  Karena paham tanpa praktek = nol
                </h3>
                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  {buildProjects.map((project, index) => (
                    <motion.article
                      key={project.title}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="min-w-0 rounded-[20px] border border-sand bg-white p-6 shadow-card"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="pill-tag">{project.company}</span>
                        <span className="font-ui text-caption uppercase tracking-eyebrow text-stone-muted">
                          {project.year}
                        </span>
                      </div>
                      <h4 className="mt-5 font-heading text-h5 text-carbon">
                        {project.title}
                      </h4>
                      <p className="mt-3 text-body-sm text-stone">
                        Project {index + 1} yang dirancang buat langsung dipakai di bisnis nyata.
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-3 text-body-sm text-carbon">
                        <div className="rounded-2xl border border-sand bg-cream p-3">
                          <p className="font-ui text-caption uppercase tracking-eyebrow text-stone-muted">
                            Harga
                          </p>
                          <p className="mt-1 font-heading text-h5">{project.earnings}</p>
                        </div>
                        <div className="rounded-2xl border border-sand bg-cream p-3">
                          <p className="font-ui text-caption uppercase tracking-eyebrow text-stone-muted">
                            Status
                          </p>
                          <p className="mt-1 font-heading text-body">{project.status}</p>
                        </div>
                        <div className="rounded-2xl border border-sand bg-cream p-3">
                          <p className="font-ui text-caption uppercase tracking-eyebrow text-stone-muted">
                            Level
                          </p>
                          <p className="mt-1 font-heading text-body">{project.difficulty}</p>
                        </div>
                        <div className="rounded-2xl border border-sand bg-cream p-3">
                          <p className="font-ui text-caption uppercase tracking-eyebrow text-stone-muted">
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
              <div className="grid gap-6 rounded-[32px] border border-sand bg-white p-6 text-carbon shadow-card sm:p-8 lg:grid-cols-3 lg:p-10">
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
                    className="min-w-0 rounded-[24px] border border-sand bg-white p-6 shadow-card"
                  >
                    <p className="pill-tag">{item.title}</p>
                    <p className="mt-5 font-heading text-h4 text-carbon">{item.title}</p>
                    <p className="mt-3 text-body text-stone">{item.description}</p>
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

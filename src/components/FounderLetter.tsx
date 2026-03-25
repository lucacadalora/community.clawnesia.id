import { ScrollReveal } from "./ScrollReveal";

export function FounderLetter() {
  return (
    <section className="section-shell dot-pattern">
      <div className="section-inner">
        <ScrollReveal className="relative w-full max-w-full overflow-hidden rounded-[32px] border border-sand bg-white p-6 shadow-card sm:p-8 md:p-12">
          <div className="absolute right-8 top-8 hidden h-28 w-28 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(255,143,80,0.18),rgba(255,235,224,0.9))] md:block" />
          <div className="mx-auto max-w-[680px]">
            <p className="eyebrow">Founder Letter</p>
            <h2 className="mt-4 font-heading text-h3 font-semibold text-carbon md:text-h2">
              Dari Luca & David
            </h2>
            <div className="mt-8 space-y-6 text-body text-stone md:text-body-lg md:leading-[1.8]">
              <p>
                Kami berdua percaya AI agents akan mengubah cara Indonesia berbisnis. Bukan
                teori, bukan sekadar prompting, tapi sistem yang benar-benar jalan 24/7 buat
                bantu operasional, sales, dan support.
              </p>
              <p>
                Luca datang dari dunia AI infrastructure dan deployment enterprise. Dari sana
                kelihatan jelas bahwa teknologi ini sudah siap dipakai lebih luas, asal ada
                panduan yang praktikal dan komunitas yang bisa bantu eksekusi.
              </p>
              <p>
                David setiap hari dekat dengan UMKM, eksportir, dan owner bisnis yang mau naik
                kelas tapi sering mentok di tools yang cuma berhenti di level chat. Clawnesia
                Build kami buat supaya lebih banyak orang Indonesia bisa deploy AI agents yang
                benar-benar kerja untuk bisnisnya.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-ui text-body font-semibold text-carbon">
                  Luca Cada Lora
                </p>
                <p className="font-ui text-body-sm text-stone-muted">
                  Founder jatevo.ai, CEO aiccelerate.id
                </p>
              </div>
              <div>
                <p className="font-ui text-body font-semibold text-carbon">
                  David Alfa Sunarna
                </p>
                <p className="font-ui text-body-sm text-stone-muted">
                  Founder webekspor.id, CTO Bisa Ekspor
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

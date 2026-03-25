import { Marquee } from "./Marquee";
import { ScrollReveal } from "./ScrollReveal";

const cities = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Surakarta",
  "Medan",
  "Bali",
  "Makassar",
  "Semarang",
  "Yogyakarta",
  "Malang",
  "Palembang",
  "Balikpapan",
];

export function CommunityMap() {
  return (
    <section className="section-shell bg-claw-dark text-claw-text-primary">
      <div className="section-inner-wide">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ScrollReveal className="min-w-0">
            <p className="eyebrow text-claw-lime">Community</p>
            <h2 className="mt-4 font-heading text-h3 font-semibold text-claw-text-primary md:text-h2">
              Bergabung dengan builder yang sudah duluan
            </h2>
            <a
              href="#join"
              className="mt-6 inline-flex items-center gap-2 font-ui text-body font-semibold text-claw-lime"
            >
              500+ anggota komunitas aktif
              <span aria-hidden="true">→</span>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="min-w-0">
            <div className="grid-overlay relative w-full max-w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-glass">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,254,147,0.18),transparent_30%),radial-gradient(circle_at_70%_60%,rgba(255,90,54,0.16),transparent_26%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.08),transparent_22%)]" />
              <div className="relative grid gap-5 md:grid-cols-2">
                {["Telegram aktif", "Workshop bulanan", "Sharing builder", "Review use case"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-5 shadow-glass"
                    >
                      <p className="font-heading text-h5 text-claw-text-primary">{item}</p>
                      <p className="mt-2 text-body-sm text-claw-text-muted">
                        Tempat ngobrol soal AI agent yang beneran dipakai di bisnis harian.
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12">
          <Marquee
            className="border-y border-white/10 py-5"
            trackClassName="font-heading text-h4 text-claw-text-muted md:text-h3"
            items={cities.map((city) => (
              <span key={city} className="inline-flex items-center gap-4">
                <span>{city}</span>
                <span className="h-2 w-2 rounded-full bg-claw-lime shadow-glow-lime" />
              </span>
            ))}
          />
        </div>
      </div>
    </section>
  );
}

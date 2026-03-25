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
    <section className="section-shell bg-cream dot-pattern">
      <div className="section-inner-wide">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ScrollReveal className="min-w-0">
            <p className="eyebrow">Community</p>
            <h2 className="mt-4 font-heading text-h3 font-semibold text-carbon md:text-h2">
              Bergabung dengan builder yang sudah duluan
            </h2>
            <a
              href="#join"
              className="mt-6 inline-flex items-center gap-2 font-ui text-body font-semibold text-primary"
            >
              500+ anggota komunitas aktif
              <span aria-hidden="true">→</span>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="min-w-0">
            <div className="grid-overlay relative w-full max-w-full overflow-hidden rounded-[32px] border border-sand bg-cream-card shadow-card p-6 shadow-card">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,143,80,0.12),transparent_30%),radial-gradient(circle_at_70%_60%,rgba(194,94,32,0.12),transparent_26%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.04),transparent_22%)]" />
              <div className="relative grid gap-5 md:grid-cols-2">
                {["Telegram aktif", "Workshop bulanan", "Sharing builder", "Review use case"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-sand bg-cream-card shadow-card p-5"
                    >
                      <p className="font-heading text-h5 text-carbon">{item}</p>
                      <p className="mt-2 text-body-sm text-stone">
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
            className="border-y border-sand py-5"
            trackClassName="font-heading text-h4 text-carbon/60 md:text-h3"
            items={cities.map((city) => (
              <span key={city} className="inline-flex items-center gap-4">
                <span>{city}</span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
            ))}
          />
        </div>
      </div>
    </section>
  );
}

import { Marquee } from "./Marquee";
import { ScrollReveal } from "./ScrollReveal";

const sponsors = [
  "OpenClaw",
  "Claude",
  "GPT",
  "Gemini",
  "Telegram",
  "WhatsApp",
  "Jatevo.ai",
  "Web Ekspor",
];

export function Sponsors() {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow">Teknologi</p>
          <h2 className="mt-4 font-heading text-h3 font-semibold text-carbon md:text-h2">
            Teknologi yang kami gunakan
          </h2>
          <p className="mt-4 text-body text-stone md:text-body-lg">
            Fondasinya practical: tools yang memang kepakai untuk deploy AI agents.
          </p>
        </ScrollReveal>

        <div className="mt-12 overflow-hidden">
          <Marquee
            trackClassName="gap-16"
            items={sponsors.map((sponsor) => (
              <div
                key={sponsor}
                className="flex h-16 w-[160px] max-w-full shrink-0 items-center justify-center rounded-[20px] border border-sand bg-white px-4 text-center font-heading text-h5 text-stone-muted shadow-card grayscale opacity-70 transition duration-300 hover:opacity-100 sm:w-[180px] sm:px-8"
              >
                {sponsor}
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
}

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
    <section className="section-shell dot-pattern">
      <div className="section-inner">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow text-claw-lime">Teknologi</p>
          <h2 className="mt-4 font-heading text-h3 font-semibold text-claw-text-primary md:text-h2">
            Teknologi yang kami gunakan
          </h2>
          <p className="mt-4 text-body text-claw-text-muted md:text-body-lg">
            Fondasinya practical: tools yang memang kepakai untuk deploy AI agents.
          </p>
        </ScrollReveal>

        <div className="mt-12 overflow-hidden">
          <Marquee
            trackClassName="gap-16"
            items={sponsors.map((sponsor) => (
              <div
                key={sponsor}
                className="flex h-16 w-[160px] max-w-full shrink-0 items-center justify-center rounded-[20px] border border-slate-200 bg-white px-4 text-center font-heading text-h5 text-claw-text-muted shadow-card grayscale opacity-60 transition duration-300 hover:text-claw-lime hover:grayscale-0 hover:opacity-100 sm:w-[180px] sm:px-8"
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

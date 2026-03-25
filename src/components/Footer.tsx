const footerLinks = ["Privacy", "Terms", "Instagram", "TikTok", "WhatsApp"];

export function Footer() {
  return (
    <footer className="section-shell bg-sand pb-12 pt-24 text-carbon">
      <div className="section-inner">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="font-heading text-h5 text-carbon">
              Clawnesia Build
            </a>
            <p className="mt-4 max-w-xs text-body-sm text-stone">
              Komunitas builder Indonesia untuk deploy AI agents yang bekerja buat bisnis nyata.
            </p>
          </div>
          <div>
            <p className="font-ui text-caption uppercase tracking-eyebrow text-terracotta">
              Legal
            </p>
            <div className="mt-4 space-y-3">
              {footerLinks.slice(0, 2).map((link) => (
                <a key={link} href="#" className="block text-body-sm text-stone hover:text-primary">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-ui text-caption uppercase tracking-eyebrow text-terracotta">
              Social
            </p>
            <div className="mt-4 space-y-3">
              {footerLinks.slice(2, 5).map((link) => (
                <a key={link} href="#" className="block text-body-sm text-stone hover:text-primary">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-ui text-caption uppercase tracking-eyebrow text-terracotta">
              Copyright
            </p>
            <p className="mt-4 text-body-sm text-stone">© 2026 Clawnesia Build</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

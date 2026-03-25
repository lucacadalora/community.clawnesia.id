const footerLinks = ["Privacy", "Terms", "Instagram", "TikTok", "WhatsApp"];

export function Footer() {
  return (
    <footer className="section-shell bg-[#111827] pb-12 pt-24 text-white">
      <div className="section-inner">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="font-heading text-h5 text-white">
              Clawnesia Build
            </a>
            <p className="mt-4 max-w-xs text-body-sm text-claw-text-muted">
              Komunitas builder Indonesia untuk deploy AI agents yang bekerja buat bisnis nyata.
            </p>
          </div>
          <div>
            <p className="font-ui text-caption uppercase tracking-[0.2em] text-claw-lime">
              Legal
            </p>
            <div className="mt-4 space-y-3">
              {footerLinks.slice(0, 2).map((link) => (
                <a key={link} href="#" className="block text-body-sm text-claw-text-muted hover:text-claw-lime">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-ui text-caption uppercase tracking-[0.2em] text-claw-lime">
              Social
            </p>
            <div className="mt-4 space-y-3">
              {footerLinks.slice(2, 5).map((link) => (
                <a key={link} href="#" className="block text-body-sm text-claw-text-muted hover:text-claw-lime">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-ui text-caption uppercase tracking-[0.2em] text-claw-lime">
              Copyright
            </p>
            <p className="mt-4 text-body-sm text-claw-text-muted">© 2026 Clawnesia Build</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

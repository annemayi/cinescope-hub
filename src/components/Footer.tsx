export function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl tracking-wider text-primary">CINEVERSE</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your gateway to cinematic discovery. Celebrating the art of film since 2024.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Gallery", href: "#gallery" },
                { label: "Reviews", href: "#reviews" },
                { label: "Genres", href: "#genres" },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground">Connect</h4>
            <div className="mt-3 flex gap-4">
              {["Twitter", "GitHub", "YouTube"].map((s) => (
                <span key={s} className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-gold">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-8 border-border" />
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CineVerse. All rights reserved.</p>
          <p>Designed with 🎬 by CineVerse Team</p>
        </div>
      </div>
    </footer>
  );
}

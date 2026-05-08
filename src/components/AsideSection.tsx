export function AsideSection() {
  return (
    <section id="genres" className="bg-surface py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
        {/* Genres */}
        <div>
          <h2 className="font-display text-3xl tracking-wider text-foreground">
            <span className="text-gradient-red">Genres</span>
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Sci-Fi", "Action", "Thriller", "Drama", "Horror", "Comedy", "Romance", "Animation", "Fantasy", "Documentary"].map((g) => (
              <span key={g} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                {g}
              </span>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <aside>
          <h2 className="font-display text-3xl tracking-wider text-foreground">
            <span className="text-gradient-gold">Upcoming</span>
          </h2>
          <ul className="mt-6 space-y-3">
            {[
              { title: "Dune: Part Three", year: "2027" },
              { title: "Avatar 3", year: "2025" },
              { title: "The Batman: Part II", year: "2027" },
            ].map((m) => (
              <li key={m.title} className="flex items-center justify-between rounded-lg bg-card px-4 py-3">
                <span className="text-sm font-medium text-foreground">{m.title}</span>
                <span className="text-xs text-gold">{m.year}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Trivia */}
        <aside>
          <h2 className="font-display text-3xl tracking-wider text-foreground">
            Fun <span className="text-gradient-red">Trivia</span>
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="rounded-lg bg-card px-4 py-3">
              🎬 The longest movie ever made is <strong className="text-foreground">Logistics</strong> at 857 hours.
            </li>
            <li className="rounded-lg bg-card px-4 py-3">
              🏆 <strong className="text-foreground">Walt Disney</strong> holds the record for most Oscars — 22 wins.
            </li>
            <li className="rounded-lg bg-card px-4 py-3">
              🎭 The word "cinema" comes from the Greek <em className="text-gold">kinema</em>, meaning movement.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-4xl tracking-wider text-foreground sm:text-5xl">
        The Magic of <span className="text-gradient-gold">Cinema</span>
      </h2>
      <hr className="my-6 border-border" />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <p>
            Movies are more than entertainment — they are <strong className="text-foreground">windows into other worlds</strong>,
            mirrors of our humanity, and bridges between cultures. From the golden age of Hollywood to the streaming revolution,
            cinema continues to <em>shape how we see the world</em>.
          </p>
          <p>
            At CineVerse, we celebrate every frame, score, and performance.
            Whether you love mind-bending <mark className="rounded bg-gold/20 px-1 text-gold">Sci-Fi</mark> epics
            or edge-of-your-seat thrillers, you'll find your next favorite film here.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-display text-xl tracking-wider text-foreground">Top 3 Favorite Movies</h3>
            <ol className="list-inside list-decimal space-y-1 text-muted-foreground">
              <li>Interstellar</li>
              <li>Inception</li>
              <li>Avengers: Endgame</li>
            </ol>
          </div>
          <div>
            <h3 className="mb-2 font-display text-xl tracking-wider text-foreground">Favorite Genres</h3>
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>Sci-Fi</li>
              <li>Action</li>
              <li>Thriller</li>
              <li>Drama</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blockquote */}
      <blockquote className="blockquote-accent my-12 rounded-r-lg px-8 py-6">
        <p className="font-display text-2xl italic tracking-wide text-foreground sm:text-3xl">
          "Why do we fall, sir? So that we can learn to pick ourselves up."
        </p>
        <cite className="mt-3 block text-sm text-gold">— Batman Begins (2005)</cite>
      </blockquote>

      {/* Description List */}
      <div className="rounded-xl bg-card p-6">
        <h3 className="mb-4 font-display text-xl tracking-wider text-foreground">Film Terminology</h3>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold text-gold">
              <abbr title="The person who oversees the creative aspects of a film">Director</abbr>
            </dt>
            <dd className="mt-1 text-sm text-muted-foreground">
              The creative visionary responsible for translating a screenplay into a visual narrative on screen.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gold">Cinematography</dt>
            <dd className="mt-1 text-sm text-muted-foreground">
              The art and science of visual storytelling in film through lighting, framing, and camera movement.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gold">
              <abbr title="Computer Generated Imagery">CGI</abbr>
            </dt>
            <dd className="mt-1 text-sm text-muted-foreground">
              Computer-generated imagery used to create visual effects that would be impractical to achieve in live action.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

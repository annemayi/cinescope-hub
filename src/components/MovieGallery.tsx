import { useState } from "react";
import { movies, type Movie } from "@/lib/movie-data";

function StarRating({ rating }: { rating: number }) {
  const stars = Math.round(rating / 2);
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill={i <= stars ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"
          className={i <= stars ? "star-filled" : "star-empty"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

function MovieModal({ movie, onClose }: { movie: Movie; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <article
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground transition-colors hover:text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="flex flex-col gap-6 sm:flex-row">
          <img src={movie.poster} alt={movie.title} className="h-72 w-48 shrink-0 rounded-lg object-cover" loading="lazy" width={192} height={288} />
          <div className="space-y-3">
            <h2 className="font-display text-3xl tracking-wider text-foreground">{movie.title}</h2>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded bg-primary/20 px-2 py-0.5 text-primary">{movie.genre}</span>
              <span>{movie.year}</span>
              <StarRating rating={movie.rating} />
              <span className="font-semibold text-gold">{movie.rating}/10</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{movie.synopsis}</p>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Director</h3>
              <p className="text-sm text-muted-foreground">{movie.director}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Cast</h3>
              <p className="text-sm text-muted-foreground">{movie.cast.join(", ")}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export function MovieGallery() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? movies : movies.slice(0, 3);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-display text-4xl tracking-wider text-foreground sm:text-5xl">
        Movie <span className="text-gradient-red">Gallery</span>
      </h2>
      <p className="mt-2 text-muted-foreground">Click any movie to discover more details.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map((movie) => (
          <article
            key={movie.id}
            className="card-glow group cursor-pointer overflow-hidden rounded-xl bg-card"
            onClick={() => setSelectedMovie(movie)}
          >
            <div className="relative overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={400}
                height={256}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="rounded bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">{movie.rating}</span>
                <span className="text-xs text-foreground/80">{movie.genre}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display text-xl tracking-wider text-foreground">{movie.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{movie.year} • {movie.director}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="rounded-lg border border-border bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:border-primary hover:text-primary"
        >
          {showAll ? "Show Less" : "Show More Movies"}
        </button>
      </div>

      {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </section>
  );
}

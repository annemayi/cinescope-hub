import { useState } from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

function InteractiveStars({ rating, onChange }: { rating: number; onChange: (r: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(i)}
          className="transition-transform hover:scale-125"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
            fill={i <= (hover || rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"
            className={i <= (hover || rating) ? "star-filled" : "star-empty"}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </button>
      ))}
    </div>
  );
}

export function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([
    { name: "Alex", rating: 5, comment: "Interstellar blew my mind! The visuals and soundtrack are unmatched." },
    { name: "Jordan", rating: 4, comment: "Inception keeps you thinking for days. A masterpiece of storytelling." },
  ]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) {
      setError("Please fill in all fields and select a rating.");
      return;
    }
    setReviews([{ name: name.trim(), rating, comment: comment.trim() }, ...reviews]);
    setName("");
    setRating(0);
    setComment("");
    setError("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="reviews" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-4xl tracking-wider text-foreground sm:text-5xl">
        Movie <span className="text-gradient-gold">Reviews</span>
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8">
        <h3 className="font-display text-xl tracking-wider text-foreground">Write a Review</h3>
        {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
        {success && (
          <p className="mt-2 animate-fade-in text-sm font-medium text-green-400">
            ✓ Review submitted successfully!
          </p>
        )}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="review-name" className="mb-1 block text-sm text-muted-foreground">Your Name</label>
            <input
              id="review-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-input bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Rating</label>
            <InteractiveStars rating={rating} onChange={setRating} />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="review-comment" className="mb-1 block text-sm text-muted-foreground">
            Your Review <span className="text-xs">({comment.length}/300)</span>
          </label>
          <textarea
            id="review-comment"
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 300))}
            placeholder="Share your thoughts on a movie..."
            rows={4}
            className="w-full rounded-lg border border-input bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="mt-4 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews list */}
      <div className="mt-10 space-y-4">
        {reviews.map((r, i) => (
          <article key={i} className="card-glow rounded-xl bg-card p-5">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">{r.name}</h4>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                    fill={s <= r.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"
                    className={s <= r.rating ? "star-filled" : "star-empty"}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

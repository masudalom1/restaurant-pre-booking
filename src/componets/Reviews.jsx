import { useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");
const IconStar = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className={props.className}
  >
    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
  </svg>
);
const IconSparkles = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={props.className}
  >
    <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
    <path d="M5 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
    <path d="M19 14l.7 2.1L22 16l-2.3.9L19 19l-.7-2.1L16 16l2.3-.9z" />
  </svg>
);
const glass = "backdrop-blur-md bg-white/10 border border-white/15";
const REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    headline: "Seamless celebration!",
    text: "We booked a table and added the birthday package. Food was served right on time — no waiting, just smiles.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Rohan Das",
    headline: "No lines, only good times",
    text: "Loved the pre-order feature. We finished dessert by the time the walk-ins got seated.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sneha Kapoor",
    headline: "Best in town",
    text: "Ambience, service, and that lava cake — 11/10 would rebook.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
];
// ---------- Section Heading ----------
function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <div className={cn("mb-10", align === "center" && "text-center")}>
      {eyebrow && (
        <div className="mb-3 flex items-center justify-center gap-2">
          <IconSparkles className="w-4 h-4 text-fuchsia-400" />
          <span className="text-xs tracking-[0.2em] uppercase text-fuchsia-300/80">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white/95 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Loved by Guests"
          title="4.9★ Average • 10k+ Diners"
          subtitle="Real experiences from real people."
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-1 rounded-[2rem] blur-2xl bg-gradient-to-r from-fuchsia-500/10 via-cyan-400/10 to-purple-500/10" />
          <div className={cn("relative rounded-[2rem] p-6", glass)}>
            <div className="flex items-center gap-4">
              <img
                src={REVIEWS[index].avatar}
                alt={REVIEWS[index].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="text-white font-semibold">
                  {REVIEWS[index].name}
                </div>
                <div className="text-white/60 text-sm">
                  {REVIEWS[index].headline}
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1 text-yellow-300">
                {Array.from({ length: REVIEWS[index].rating }).map((_, i) => (
                  <IconStar key={i} className="w-4 h-4" />
                ))}
              </div>
            </div>
            <p className="mt-4 text-white/80">“{REVIEWS[index].text}”</p>
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={prev}
                className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/15"
              >
                Prev
              </button>
              <button
                onClick={next}
                className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/15"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

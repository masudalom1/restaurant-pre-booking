import { motion, AnimatePresence } from "framer-motion";

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
const cn = (...classes) => classes.filter(Boolean).join(" ");
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

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
    "https://t4.ftcdn.net/jpg/02/83/40/05/240_F_283400521_EBWKN3NMtZexYj7qHxQCf0ba999WZM8d.jpg",
    "https://t4.ftcdn.net/jpg/02/65/80/93/240_F_265809361_4L1JrVZCgw5VhtmuaxkD9OJBG90euyvo.jpg",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1200&auto=format&fit=crop",
  ];
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Ambience"
          title="Designed for Moments"
          subtitle="From cozy corners to skyline views — pick a vibe and celebrate right."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt="gallery"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

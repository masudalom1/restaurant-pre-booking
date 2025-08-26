// ---------- FAQ ----------
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const FAQS = [
  {
    q: "Is the pre-booking charge refundable?",
    a: "The ₹499 pre-booking charge is fully adjusted in your final bill. In case of cancellation 6+ hours before your slot, it’s refunded as wallet credit.",
  },
  {
    q: "Can I reschedule my booking?",
    a: "Yes, you can reschedule up to 2 hours before your slot, subject to availability.",
  },
  {
    q: "Do you allow walk-ins?",
    a: "We operate on pre‑booking to ensure zero wait time and a premium experience.",
  },
  {
    q: "Do you take celebration requests?",
    a: "Absolutely! Add cakes, décor, music and custom notes while booking.",
  },
];
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
const glass = "backdrop-blur-md bg-white/10 border border-white/15";
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

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Need Help?"
          title="Frequently Asked Questions"
        />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className={cn("rounded-2xl p-4", glass)}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left flex items-center justify-between gap-4"
              >
                <div className="text-white font-semibold">{f.q}</div>
                <div className="text-white/60">{open === i ? "−" : "+"}</div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-white/70 mt-2 overflow-hidden"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

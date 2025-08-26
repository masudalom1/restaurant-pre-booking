import { motion, AnimatePresence } from "framer-motion";
const IconCalendar = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={props.className}
  >
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const cn = (...classes) => classes.filter(Boolean).join(" ");
const glass = "backdrop-blur-md bg-white/10 border border-white/15";

const IconUsers = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={props.className}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

const IconClock = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={props.className}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l4 2" />
  </svg>
);

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

export default function Steps() {
  const steps = [
    {
      t: "Pick Slot",
      d: "Choose date, time & number of guests.",
      icon: <IconCalendar className="w-5 h-5" />,
    },
    {
      t: "Select Table",
      d: "Only seats matching your group show up.",
      icon: <IconUsers className="w-5 h-5" />,
    },
    {
      t: "Pre‑Order",
      d: "Add dishes & celebration packages.",
      icon: <IconSparkles className="w-5 h-5" />,
    },
    {
      t: "Dine On‑Time",
      d: "Arrive, get seated, start eating — no waiting.",
      icon: <IconClock className="w-5 h-5" />,
    },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Simple & Fast" title="How It Works" />
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={cn("rounded-2xl p-5", glass)}
            >
              <div className="flex items-center gap-3 text-white">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                  {s.icon}
                </div>
                <div className="font-semibold">{s.t}</div>
              </div>
              <p className="text-white/60 mt-2">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

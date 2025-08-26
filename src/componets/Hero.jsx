import { motion, AnimatePresence } from "framer-motion";

function Chip({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        "bg-white/5 text-white/90 border-white/10",
        className
      )}
    >
      {children}
    </span>
  );
}
function Button({ children, onClick, className, type = "button", iconRight }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center gap-2 rounded-2xl px-5 py-3",
        "text-white font-semibold",
        gradientBorder,
        "before:rounded-2xl",
        "[&>span]:relative [&>span]:z-[1]",
        "hover:shadow-[0_0_0_6px_rgba(255,255,255,0.06)]",
        className
      )}
    >
      <span className={cn("absolute inset-[2px] rounded-2xl", glass)} />
      <span>{children}</span>
      {iconRight && (
        <span className="relative z-[1]">
          <IconArrowRight className="w-5 h-5" />
        </span>
      )}
    </button>
  );
}
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
const cn = (...classes) => classes.filter(Boolean).join(" ");
const gradientBorder =
  "relative before:absolute before:inset-0 before:rounded-2xl before:p-[1.5px] before:bg-gradient-to-r before:from-fuchsia-500/60 before:via-cyan-400/60 before:to-purple-500/60 before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[mask-composite:exclude]";
const glass = "backdrop-blur-md bg-white/10 border border-white/15";
const IconMapPin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={props.className}
  >
    <path d="M12 22s8-4.5 8-12a8 8 0 1 0-16 0c0 7.5 8 12 8 12z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconArrowRight = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={props.className}
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);
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
export default function Hero({ onScrollToBooking }) {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,.25),rgba(6,182,212,.12)_35%,transparent_60%)]" />
        <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full blur-[100px] bg-fuchsia-500/20" />
        <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] rounded-full blur-[120px] bg-cyan-400/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Chip className="mb-4">Pre‑Booking • Zero Wait</Chip>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                Dine in the{" "}
                <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
              <p className="mt-4 text-white/70 text-lg max-w-xl">
                Reserve your table, pre‑order dishes, and add celebration
                packages. Hassle‑free dining that starts on time.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button onClick={onScrollToBooking} iconRight>
                  <span>Book a Table</span>
                </Button>
                <a
                  href="#menu"
                  className="text-white/80 hover:text-white font-medium"
                >
                  Explore Menu
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-white/70">
                <div className="flex items-center gap-2">
                  <IconStar className="w-5 h-5 text-yellow-300" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconUsers className="w-5 h-5" />
                  <span>10k+ happy diners</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn("relative rounded-3xl p-2", gradientBorder)}
            >
              <div className={cn("rounded-3xl overflow-hidden", glass)}>
                <div className="relative aspect-[4/3]">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
                    alt="Restaurant hero"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                      className={cn(
                        "rounded-2xl p-3 flex items-center justify-between",
                        glass
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <IconMapPin className="w-5 h-5 text-cyan-300" />
                        <div className="text-white/90 text-sm">
                          Downtown • Skyline View • Live Kitchen
                        </div>
                      </div>
                      <Chip>Open Today 11:00–23:00</Chip>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="mx-auto max-w-7xl px-4 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "Avg. Serve Time", v: "7 min" },
            { k: "Pre‑orders Served", v: "120k+" },
            { k: "Celebrations Hosted", v: "9,800" },
            { k: "Repeat Guests", v: "95%" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn("rounded-2xl p-4", glass)}
            >
              <div className="text-white text-2xl font-extrabold">{s.v}</div>
              <div className="text-white/60 text-sm">{s.k}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

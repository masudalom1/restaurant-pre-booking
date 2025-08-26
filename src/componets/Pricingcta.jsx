// ---------- Pricing / CTA ----------
const cn = (...classes) => classes.filter(Boolean).join(" ");
const glass = "backdrop-blur-md bg-white/10 border border-white/15";
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
const gradientBorder =
  "relative before:absolute before:inset-0 before:rounded-2xl before:p-[1.5px] before:bg-gradient-to-r before:from-fuchsia-500/60 before:via-cyan-400/60 before:to-purple-500/60 before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[mask-composite:exclude]";
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
// ---------- Button ----------
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
export default function PricingCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <SectionHeading
              eyebrow="Book Smart"
              title="Secure Your Table with ₹499"
              subtitle="Your charge is fully adjusted in the final bill. Skip queues, start with soups."
              align="left"
            />
            <ul className="space-y-2 text-white/80">
              <li>• Free reschedule up to 2 hours before slot</li>
              <li>• Celebration packages from ₹999</li>
              <li>• Priority seating & faster service</li>
            </ul>
            <a href="#booking" className="inline-block mt-6">
              <Button iconRight>
                <span>Reserve Now</span>
              </Button>
            </a>
          </div>
          <div>
            <div className={cn("rounded-3xl p-6", glass)}>
              <div className="flex items-end gap-2">
                <div className="text-5xl font-black text-white">₹499</div>
                <div className="text-white/60 mb-2">/ per booking</div>
              </div>
              <p className="text-white/70 mt-2">
                Adjusted in final bill • No hidden fees.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className={cn("rounded-2xl p-4", glass)}>
                  <div className="text-white font-semibold">Weekdays</div>
                  <div className="text-white/70 text-sm">11:00–23:00</div>
                </div>
                <div className={cn("rounded-2xl p-4", glass)}>
                  <div className="text-white font-semibold">Weekends</div>
                  <div className="text-white/70 text-sm">10:00–24:00</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-white/80 text-sm">
                  Hot tip: add dessert combo during pre‑order to unlock a
                  surprise treat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

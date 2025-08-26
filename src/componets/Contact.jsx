// ---------- Contact ----------
// ---------- Section Heading ----------
const cn = (...classes) => classes.filter(Boolean).join(" ");
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
const IconPhone = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={props.className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.88.31 1.74.57 2.57a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.51-1.09a2 2 0 0 1 2.11-.45c.83.26 1.69.45 2.57.57A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconMail = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={props.className}
  >
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);
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

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="We’re Near You" title="Contact & Location" />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className={cn("rounded-3xl p-6", glass)}>
            <div className="flex items-center gap-3 text-white">
              <IconMapPin className="w-5 h-5" /> 221B Skyline Avenue, Downtown,
              [City]
            </div>
            <div className="flex items-center gap-3 text-white mt-3">
              <IconPhone className="w-5 h-5" /> +91‑98765‑43210
            </div>
            <div className="flex items-center gap-3 text-white mt-3">
              <IconMail className="w-5 h-5" /> contact@auroradine.com
            </div>
            <p className="text-white/70 mt-4">
              Parking available • Wheelchair accessible • Live music on weekends
            </p>
            <div className="mt-6">
              <a href="#booking">
                <Button iconRight>
                  <span>Book Your Slot</span>
                </Button>
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.953033601153!2d144.96316!3d-37.814217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzUxLjIiUyAxNDTCsDU3JzQ3LjQiRQ!5e0!3m2!1sen!2s!4v1614642997609"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

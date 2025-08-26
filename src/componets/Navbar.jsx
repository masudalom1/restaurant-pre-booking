import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");
const glass = "backdrop-blur-md bg-white/10 border border-white/15";

const gradientBorder =
  "relative before:absolute before:inset-0 before:rounded-2xl before:p-[1.5px] before:bg-gradient-to-r before:from-fuchsia-500/60 before:via-cyan-400/60 before:to-purple-500/60 before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[mask-composite:exclude]";
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "#menu", label: "Menu" },
    { href: "#booking", label: "Book" },
    { href: "#reviews", label: "Reviews" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3",
            glass,
            "border-white/10"
          )}
        >
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400" />
            <div className="text-white font-extrabold tracking-tight">
              Aurora Dine
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-white/80 hover:text-white transition"
              >
                {it.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="#booking">
              <Button className="">
                <span>Reserve Now</span>
              </Button>
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white/90"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mx-auto max-w-7xl px-4"
          >
            <div className={cn("mt-2 rounded-2xl p-4", glass)}>
              <div className="grid gap-2">
                {items.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
                  >
                    {it.label}
                  </a>
                ))}
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="mt-2"
                >
                  <Button className="w-full justify-center">
                    <span>Reserve Now</span>
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

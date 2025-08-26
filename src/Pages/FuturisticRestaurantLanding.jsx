import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../componets/Footer";
import Contact from "../componets/Contact";
import FAQ from "../componets/Faq";
import PricingCTA from "../componets/Pricingcta";
import Steps from "../componets/Steps";
import Gallery from "../componets/Glallaery";
import Reviews from "../componets/Reviews";
import MenuGrid from "../componets/Menu";
import Navbar from "../componets/Navbar";
import Hero from "../componets/Hero";
import BookingWidget from "../componets/Bookingwidget";

// ---------- Utilities ----------
const cn = (...classes) => classes.filter(Boolean).join(" ");

const shimmer =
  "bg-[linear-gradient(110deg,rgba(255,255,255,.1)35%,rgba(255,255,255,.25)40%,rgba(255,255,255,.1)45%)] bg-[length:200%_100%] animate-[shimmer_2.5s_infinite]";

const gradientBorder =
  "relative before:absolute before:inset-0 before:rounded-2xl before:p-[1.5px] before:bg-gradient-to-r before:from-fuchsia-500/60 before:via-cyan-400/60 before:to-purple-500/60 before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[mask-composite:exclude]";

const glass = "backdrop-blur-md bg-white/10 border border-white/15";

// Table geometry is only visual; we include capacity + id for logic
const TABLES = [
  { id: "T1", x: 15, y: 18, capacity: 2 },
  { id: "T2", x: 35, y: 18, capacity: 4 },
  { id: "T3", x: 55, y: 18, capacity: 4 },
  { id: "T4", x: 75, y: 18, capacity: 6 },
  { id: "T5", x: 20, y: 52, capacity: 6 },
  { id: "T6", x: 45, y: 52, capacity: 8 },
  { id: "T7", x: 70, y: 52, capacity: 2 },
  { id: "T8", x: 85, y: 52, capacity: 4 },
];

// Existing demo bookings (in a real app, fetch from API)
const DEMO_BOOKINGS = [
  {
    id: "b1",
    tableId: "T3",
    date: "2025-08-21",
    start: "12:00",
    end: "14:00",
    people: 4,
  },
  {
    id: "b2",
    tableId: "T6",
    date: "2025-08-21",
    start: "19:00",
    end: "21:00",
    people: 7,
  },
];

// ---------- Icons (inline SVGs) ----------
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

// ---------- Helper Functions ----------
function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function rangesOverlap(aStart, aEnd, bStart, bEnd) {
  return Math.max(aStart, bStart) < Math.min(aEnd, bEnd);
}

function isTableAvailable(tableId, date, start, end, bookings) {
  const s = timeToMinutes(start);
  const e = timeToMinutes(end);
  return bookings
    .filter((b) => b.tableId === tableId && b.date === date)
    .every(
      (b) => !rangesOverlap(s, e, timeToMinutes(b.start), timeToMinutes(b.end))
    );
}

function clamp(min, v, max) {
  return Math.max(min, Math.min(max, v));
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

function FloorMap({ date, start, end, people, onSelectTable, bookings }) {
  // compute availability per table
  const availability = useMemo(() => {
    const map = {};
    for (const t of TABLES) {
      const okCapacity = t.capacity >= people;
      const okTime = isTableAvailable(t.id, date, start, end, bookings);
      map[t.id] = okCapacity && okTime;
    }
    return map;
  }, [date, start, end, people, bookings]);

  return (
    <div
      className={cn(
        "relative w-full aspect-[16/9] overflow-hidden rounded-3xl",
        glass
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.06),transparent_60%)]" />
      {/* Decorative grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        viewBox="0 0 100 56"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            x1={(i + 1) * 5}
            y1="0"
            x2={(i + 1) * 5}
            y2="56"
            stroke="white"
            strokeWidth="0.2"
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={(i + 1) * 5.6}
            x2="100"
            y2={(i + 1) * 5.6}
            stroke="white"
            strokeWidth="0.2"
          />
        ))}
      </svg>

      {/* Tables */}
      {TABLES.map((t) => {
        const available = availability[t.id];
        return (
          <motion.button
            key={t.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => available && onSelectTable(t)}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-sm font-semibold",
              available
                ? "bg-emerald-500/90 hover:bg-emerald-500 text-white"
                : "bg-white/10 text-white/50 cursor-not-allowed",
              shimmer
            )}
            style={{ left: `${t.x}%`, top: `${t.y}%` }}
          >
            {t.id} • {t.capacity}p
          </motion.button>
        );
      })}

      {/* Legend */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-white/80">
        <span className="inline-block w-3 h-3 rounded bg-emerald-500" />{" "}
        Available
        <span className="inline-block w-3 h-3 rounded bg-white/20 ml-3" />{" "}
        Unavailable
      </div>
    </div>
  );
}

// ---------- Main Page ----------
export default function RestaurantLanding() {
  const pageRef = useRef(null);
  const bookingRef = useRef(null);

  // demo bookings state
  const [bookings, setBookings] = useState(DEMO_BOOKINGS);
  const [query, setQuery] = useState(null);
  const [availableTables, setAvailableTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [toast, setToast] = useState(null);

  const handleScrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function handleBookingSearch(input) {
    setQuery(input);
    // calculate availability list
    const list = TABLES.filter(
      (t) =>
        t.capacity >= input.people &&
        isTableAvailable(t.id, input.date, input.start, input.end, bookings)
    );
    setAvailableTables(list);
    setSelectedTable(null);
  }

  function handleSelectTable(t) {
    if (!query) return;
    setSelectedTable(t);
  }

  function confirmBooking() {
    if (!query || !selectedTable) return;
    const newBooking = {
      id: Math.random().toString(36).slice(2),
      tableId: selectedTable.id,
      date: query.date,
      start: query.start,
      end: query.end,
      people: query.people,
    };
    setBookings((prev) => [...prev, newBooking]);
    setToast({
      type: "success",
      msg: `Booked ${selectedTable.id} on ${query.date} ${query.start}–${query.end} for ${query.people}p`,
    });
    // scroll to top of booking section
    setTimeout(
      () => bookingRef.current?.scrollIntoView({ behavior: "smooth" }),
      50
    );
  }

  // auto-hide toast
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(id);
  }, [toast]);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0B0B13] text-white">
      {/* Subtle global background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,.08),transparent_60%)]" />
        <div className="absolute -top-24 right-0 w-[40rem] h-[40rem] blur-[120px] bg-fuchsia-500/20" />
        <div className="absolute bottom-0 -left-24 w-[40rem] h-[40rem] blur-[120px] bg-cyan-400/20" />
      </div>

      <Navbar />
      <Hero onScrollToBooking={handleScrollToBooking} />

      {/* Sticky Booking Bar */}
      <div className="sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className={cn("rounded-2xl p-3 flex items-center gap-3", glass)}>
            <IconCalendar className="w-5 h-5 text-fuchsia-300" />
            <div className="text-sm text-white/80">
              Pre‑book to skip queues • Celebration add‑ons available
            </div>
            <div className="ml-auto">
              <a href="#booking">
                <Button>
                  <span>Start Booking</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <section id="booking" ref={bookingRef} className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Reserve"
            title="Book Your Table & Pre‑Order"
            subtitle="Select date, time, people — we’ll show you real‑time availability. Add celebration packages to level up."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <BookingWidget onSubmit={handleBookingSearch} />
              {query && (
                <div className="mt-4">
                  <div className="text-white/80 text-sm mb-2">
                    Available tables for <strong>{query.date}</strong> •{" "}
                    <strong>{query.start}</strong>–<strong>{query.end}</strong>{" "}
                    • <strong>{query.people}</strong> guests
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableTables.length === 0 && (
                      <div className="text-white/60">
                        No tables match this slot. Try a different time or
                        reduce duration.
                      </div>
                    )}
                    {availableTables.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => handleSelectTable(t)}
                        className={cn(
                          "px-4 py-2 rounded-xl border",
                          selectedTable?.id === t.id
                            ? "bg-emerald-500 text-white border-transparent"
                            : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
                        )}
                      >
                        {t.id} • {t.capacity}p
                      </button>
                    ))}
                  </div>
                  {selectedTable && (
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-white/80 text-sm">
                        Selected: <strong>{selectedTable.id}</strong> • Capacity{" "}
                        <strong>{selectedTable.capacity}</strong>
                      </div>
                      <Button onClick={confirmBooking} iconRight>
                        <span>Confirm Booking</span>
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              <FloorMap
                date={query?.date || DEMO_BOOKINGS[0].date}
                start={query?.start || DEMO_BOOKINGS[0].start}
                end={query?.end || DEMO_BOOKINGS[0].end}
                people={query?.people || 2}
                onSelectTable={handleSelectTable}
                bookings={bookings}
              />
              <div className="mt-3 text-xs text-white/50">
                Tap a green table to select. Greyed tables are unavailable for
                the chosen slot or capacity.
              </div>
            </div>
          </div>
        </div>
      </section>

      <MenuGrid />
      <Steps />
      <Reviews />
      <Gallery />
      <PricingCTA />
      <FAQ />
      <Contact />
      <Footer />

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className={cn("px-4 py-3 rounded-xl", glass)}>
              <div className="text-white/90 text-sm">{toast.msg}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/91"
        className="fixed bottom-6 right-6 z-50"
        aria-label="WhatsApp"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-emerald-500"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M20.52 3.48A11.93 11.93 0 0012.02 0C5.39.01.02 5.38 0 12.01a11.94 11.94 0 001.77 6.25L0 24l5.9-1.54a11.98 11.98 0 006.13 1.68h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.52-8.46zM12.03 22.1h-.01a10.1 10.1 0 01-5.15-1.41l-.37-.22-3.5.91.94-3.41-.24-.35A10.08 10.08 0 011.9 12c.01-5.59 4.55-10.13 10.13-10.13 2.7 0 5.24 1.05 7.15 2.96A10.07 10.07 0 0122.16 12c0 5.58-4.55 10.1-10.13 10.1zm5.63-7.54c-.31-.16-1.85-.91-2.13-1.01-.28-.1-.48-.16-.68.16-.2.31-.77 1-94 1.22-.17.16-.33.23-.62.08-.31-.16-1.3-.48-2.48-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.2-.31.31-.51.1-.2.05-.38-.02-.54-.07-.16-.68-1.64-.93-2.24-.24-.58-.5-.5-.68-.5h-.57c-.2 0-.52.08-.79.38-.27.31-1.05 1.02-1.05 2.48 0 1.46 1.08 2.87 1.23 3.07.16.2 2.13 3.24 5.17 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.08 1.85-.76 2.11-1.49.26-.73.26-1.35.18-1.49-.08-.14-.28-.23-.59-.39z" />
          </svg>
        </motion.div>
      </a>

      {/* Scroll to top */}
      <a href="#" className="fixed bottom-6 left-6 z-50" aria-label="Top">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 border border-white/10"
        >
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.div>
      </a>
    </div>
  );
}

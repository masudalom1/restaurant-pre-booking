import { useState, useMemo } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const gradientBorder =
  "relative before:absolute before:inset-0 before:rounded-2xl before:p-[1.5px] before:bg-gradient-to-r before:from-fuchsia-500/60 before:via-cyan-400/60 before:to-purple-500/60 before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[mask-composite:exclude]";

const glass = "backdrop-blur-md bg-white/10 border border-white/15";
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
function clamp(min, v, max) {
  return Math.max(min, Math.min(max, v));
}
function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

export default function BookingWidget({ onSubmit }) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  const [date, setDate] = useState(minDate);
  const [start, setStart] = useState("12:00");
  const [duration, setDuration] = useState(120);
  const [people, setPeople] = useState(2);
  const [celebration, setCelebration] = useState("none");
  const [notes, setNotes] = useState("");
  const end = useMemo(() => {
    const endMinutes = clamp(
      0,
      timeToMinutes(start) + Number(duration),
      24 * 60
    );
    const eh = String(Math.floor(endMinutes / 60)).padStart(2, "0");
    const em = String(endMinutes % 60).padStart(2, "0");
    return `${eh}:${em}`;
  }, [start, duration]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, start, end, duration, people, celebration, notes });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("rounded-3xl p-4 md:p-6", glass)}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="text-sm text-white/70 mb-1 flex items-center gap-2">
            <IconCalendar className="w-4 h-4" /> Date
          </label>
          <input
            type="date"
            min={minDate}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-white/70 mb-1 flex items-center gap-2">
            <IconClock className="w-4 h-4" /> Start Time
          </label>
          <input
            type="time"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-white/70 mb-1">Duration</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white"
          >
            {[60, 90, 120, 150, 180].map((d) => (
              <option key={d} value={d}>
                {d} min
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-white/70 mb-1 flex items-center gap-2">
            <IconUsers className="w-4 h-4" /> Number of People
          </label>
          <input
            type="number"
            min={1}
            max={12}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-white/70 mb-1">Celebration</label>
          <select
            value={celebration}
            onChange={(e) => setCelebration(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white"
          >
            <option value="none">None</option>
            <option value="birthday">Birthday Package (+₹999)</option>
            <option value="anniversary">Anniversary Package (+₹1,499)</option>
            <option value="custom">Custom Request</option>
          </select>
        </div>
        <div className="flex flex-col sm:col-span-2 lg:col-span-3">
          <label className="text-sm text-white/70 mb-1">Notes (optional)</label>
          <input
            type="text"
            placeholder="Allergies, seating preference, surprise message, etc."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="text-white/75 text-sm">
          <span className="font-semibold text-white">Pre‑booking charge:</span>{" "}
          ₹499 (adjusted in final bill)
          <span className="ml-2 opacity-70">
            • End time auto‑calculated: <strong>{end}</strong>
          </span>
        </div>
        <Button type="submit" iconRight>
          <span>Check Availability</span>
        </Button>
      </div>
    </form>
  );
}

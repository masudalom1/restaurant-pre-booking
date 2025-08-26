import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
const MENU = [
  {
    id: "m1",
    name: "Crispy Paneer Tikka",
    price: 249,
    category: "Starters",
    img: "https://t4.ftcdn.net/jpg/10/76/33/75/360_F_1076337504_NNcAHDbQAm0Qn9Yl5AP1z3ynlGKsRdnM.jpg",
    featured: true,
    tags: ["Veg", "Spicy", "Tandoor"],
    desc: "Char-grilled cottage cheese with house spice rub & mint chutney.",
  },
  {
    id: "m2",
    name: "BBQ Chicken Wings",
    price: 299,
    category: "Starters",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["Non-Veg", "Smoky"],
    desc: "Sticky-sweet BBQ glaze, toasted sesame & spring onion.",
  },
  {
    id: "m3",
    name: "Butter Chicken + Naan",
    price: 499,
    category: "Mains",
    img: "https://t3.ftcdn.net/jpg/06/01/41/68/360_F_601416862_AfYdeefqT1kGqWTx1DZCsJZVzYIDFzPR.jpg",
    featured: true,
    tags: ["Signature", "Creamy"],
    desc: "Silky tomato-butter gravy, tender chicken, served with garlic naan.",
  },
  {
    id: "m4",
    name: "Paneer Butter Masala + Rice",
    price: 399,
    category: "Mains",
    img: "https://t4.ftcdn.net/jpg/01/70/87/83/240_F_170878391_ffaozIJICSdQb6Nl66tTD7rUJShrQpQv.jpg",
    featured: false,
    tags: ["Veg", "Comfort"],
    desc: "Rich, velvety curry with steamed basmati rice.",
  },
  {
    id: "m5",
    name: "Chocolate Lava Cake",
    price: 199,
    category: "Desserts",
    img: "https://t3.ftcdn.net/jpg/14/50/09/96/240_F_1450099635_ZH9j0R5aREUPiSRVQ4kg2K3lU72HZjap.jpg",
    featured: true,
    tags: ["Best Seller", "Warm"],
    desc: "Molten center, vanilla ice cream, cocoa dust.",
  },
  {
    id: "m6",
    name: "Cold Coffee (Classic)",
    price: 149,
    category: "Beverages",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["Chilled"],
    desc: "Strong pour-over shaken with milk & ice.",
  },
  {
    id: "m7",
    name: "Rasmalai Cheesecake",
    price: 249,
    category: "Desserts",
    img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["Fusion", "Creamy"],
    desc: "Silky cheesecake with saffron & pistachio crumble.",
  },
  {
    id: "m8",
    name: "Virgin Mojito",
    price: 199,
    category: "Beverages",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    tags: ["Minty", "Refreshing"],
    desc: "Lime, mint, fizz — stay cool.",
  },
];
const CATEGORIES = ["Starters", "Mains", "Desserts", "Beverages"];
const cn = (...classes) => classes.filter(Boolean).join(" ");
const gradientBorder =
  "relative before:absolute before:inset-0 before:rounded-2xl before:p-[1.5px] before:bg-gradient-to-r before:from-fuchsia-500/60 before:via-cyan-400/60 before:to-purple-500/60 before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[mask-composite:exclude]";

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

export default function MenuGrid() {
  const [cat, setCat] = useState("All");
  const cats = ["All", ...CATEGORIES];
  const items = useMemo(
    () => (cat === "All" ? MENU : MENU.filter((m) => m.category === cat)),
    [cat]
  );

  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Signature Menu"
          title="Crafted Plates, Faster Service"
          subtitle="Pre‑order your favorites so they arrive as you do. Featured dishes are chef‑curated best‑sellers."
        />
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "px-4 py-2 rounded-xl border text-sm",
                c === cat
                  ? "bg-white/15 text-white border-white/20"
                  : "bg-white/5 text-white/70 border-white/10 hover:text-white hover:bg-white/10"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn("rounded-3xl overflow-hidden", gradientBorder)}
            >
              <div className={cn("rounded-3xl overflow-hidden", glass)}>
                <div className="relative h-48">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {m.featured && (
                    <div className="absolute top-3 left-3">
                      <Chip className="bg-fuchsia-500/90 border-0">
                        Featured
                      </Chip>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-white font-bold text-lg">{m.name}</h3>
                      <p className="text-white/60 text-sm mt-1">{m.desc}</p>
                    </div>
                    <div className="text-white font-extrabold">₹{m.price}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/15 border border-white/10">
                      Add to Pre‑order
                    </button>
                    <a
                      href="#booking"
                      className="text-white/80 hover:text-white text-sm"
                    >
                      Book & Order →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

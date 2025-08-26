export default // ---------- Footer ----------
function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400"/>
            <div className="text-white/80">© {new Date().getFullYear()} Aurora Dine</div>
          </div>
          <div className="text-white/60 text-sm">Pre‑booking only • All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer className="relative  bg-[#211832] text-white overflow-hidden">

      {/* Top Glow Line */}
      <div className="absolute inset-x-0 -top-4 h-10 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-2xl opacity-80" />

      {/* Footer Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-white">
                Crowbar Affiliate Hub
              </h3>
              <p className="text-xs text-slate-300">
                Creator Referral Program
              </p>
            </div>
          </div>

          {/* Rights */}
          <div className="text-center md:text-right text-sm text-slate-300">
            © 2025 Crowbar Connected Network  
            <br />
            <span className="text-xs text-slate-400">
              Empowering Creators • Unified Ecosystem • Growth Engine
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 blur-2xl opacity-70" />
    </footer>
  );
}

import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-slate-900/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-white font-semibold tracking-tight">Flames Blue</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-200/80">
          <a href="#audio" className="hover:text-white transition-colors">Audio</a>
          <a href="#video" className="hover:text-white transition-colors">Video</a>
          <a href="/test" className="hover:text-white transition-colors">System Test</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-blue-200/80 hover:text-white hover:border-white/20 transition-colors">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}

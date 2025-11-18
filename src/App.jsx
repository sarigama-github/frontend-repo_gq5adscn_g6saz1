import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_45%)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Showcase />

        <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-200/70 text-sm">Built with interactive 3D and rich media.</p>
            <a href="/test" className="text-sm text-white/80 hover:text-white">Run system diagnostics</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

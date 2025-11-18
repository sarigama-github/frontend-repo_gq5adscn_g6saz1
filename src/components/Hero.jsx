import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth, non-blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs text-blue-200/80 backdrop-blur">Interactive • Modern • Sleek</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Experience audio like never before
          </h1>
          <p className="mt-4 text-blue-200/90 text-base md:text-lg">
            Explore our 3D-rendered headphones. Spin, zoom, and interact with every detail.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#audio" className="inline-flex items-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-blue-50 transition-colors">
              Explore Audio
            </a>
            <a href="#video" className="inline-flex items-center rounded-lg border border-white/20 text-white font-semibold px-5 py-3 hover:border-white/40 transition-colors">
              Watch Demos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

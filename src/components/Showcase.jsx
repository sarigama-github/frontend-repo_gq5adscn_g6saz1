import { PlayCircle, Music2, Waves } from 'lucide-react'

export default function Showcase() {
  return (
    <section id="audio" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Immersive audio demos</h2>
            <p className="text-blue-200/90">Hear the detail. These short samples showcase spatial clarity and rich bass response.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Ambient Focus', length: '1:12' },
                { title: 'Deep Bass', length: '0:58' },
                { title: 'Vocal Clarity', length: '1:06' },
                { title: 'Cinematic', length: '1:20' }
              ].map((track, i) => (
                <button key={i} className="group flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/40 p-4 text-left hover:bg-slate-800/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                      <Music2 size={18} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{track.title}</p>
                      <p className="text-xs text-blue-200/70">{track.length}</p>
                    </div>
                  </div>
                  <PlayCircle className="text-white/70 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>

          <div id="video" className="rounded-2xl overflow-hidden border border-white/10 bg-slate-800/40">
            <div className="aspect-video relative">
              <video className="w-full h-full object-cover" controls poster="https://images.unsplash.com/photo-1518442075507-a204863b3918?q=80&w=2070&auto=format&fit=crop">
                <source src="https://cdn.coverr.co/videos/coverr-sound-wave-7639/1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-200/80">
                <Waves size={18} />
                <span className="text-sm">Frequency response demo</span>
              </div>
              <a href="#" className="text-sm text-white/80 hover:text-white">View all videos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

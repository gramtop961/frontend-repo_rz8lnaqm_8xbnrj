import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0 w-full h-full">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for depth (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="z-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance projects
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Halo, saya
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent"> Developer</span>
              <br /> yang suka membangun pengalaman digital modern
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Saya fokus pada pembuatan website yang cepat, interaktif, dan berkarakter. Mari wujudkan ide Anda menjadi produk digital yang berkesan.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-slate-900 shadow hover:shadow-lg transition-all"
              >
                Lihat Proyek
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-white/80">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" aria-label="Email" className="hover:text-white transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right column left mostly for Spline to remain interactive */}
          <div className="relative h-[50vh] md:h-[70vh]" />
        </div>
      </div>
    </section>
  )
}

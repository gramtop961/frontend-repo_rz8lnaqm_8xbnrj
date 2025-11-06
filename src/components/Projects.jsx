import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Dashboard Analytics',
    desc: 'Visualisasi data interaktif dengan chart real-time dan tema gelap yang elegan.',
    tags: ['React', 'Tailwind', 'Recharts'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'E-commerce UI',
    desc: 'Antarmuka belanja modern dengan fokus pada pengalaman pengguna dan kecepatan.',
    tags: ['Next.js', 'Stripe', 'Framer Motion'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Landing Page SaaS',
    desc: 'Halaman marketing untuk produk SaaS dengan animasi halus dan konversi tinggi.',
    tags: ['Vite', 'Tailwind', 'SEO'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Proyek Terpilih</h2>
          <p className="mt-3 text-white/70">Beberapa karya yang pernah saya bangun dan kembangkan.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                  </div>
                  <ExternalLink className="mt-1 h-5 w-5 text-white/70 group-hover:text-white" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

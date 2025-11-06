import { motion } from 'framer-motion'
import { Code2, Palette, Database, Rocket } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', desc: 'React, Next.js, Vite, TypeScript, Tailwind CSS, Framer Motion' },
  { icon: Database, title: 'Backend', desc: 'FastAPI, Node.js, REST API, MongoDB, Prisma' },
  { icon: Palette, title: 'UI/UX', desc: 'Design system, aksesibilitas, prototyping, micro-interactions' },
  { icon: Rocket, title: 'Performance', desc: 'Optimasi, SEO, PWA, analitik, best practices' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Keahlian</h2>
          <p className="mt-3 text-white/70">Kombinasi keterampilan teknis dan sentuhan desain untuk hasil yang berkelas.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/10 p-3 ring-1 ring-white/20">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl transition-transform group-hover:scale-125" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

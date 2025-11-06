import { motion } from 'framer-motion'
import { Mail, Send, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Kontak</h2>
          <p className="mt-3 text-white/70">Terbuka untuk kolaborasi, freelance, atau diskusi santai seputar produk digital.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const data = Object.fromEntries(new FormData(form))
                const subject = encodeURIComponent(`Halo, saya ${data.name}`)
                const body = encodeURIComponent(`${data.message}\n\nDari: ${data.name} <${data.email}>`)
                window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-1 block text-sm text-white/80">Nama</label>
                <input name="name" required placeholder="Nama Anda" className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input type="email" name="email" required placeholder="email@domain.com" className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Pesan</label>
                <textarea name="message" rows="4" required placeholder="Ceritakan kebutuhan Anda" className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-slate-900 shadow transition hover:shadow-lg">
                <Send className="h-4 w-4" />
                Kirim Pesan
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/10 p-2 ring-1 ring-white/20"><Mail className="h-5 w-5 text-cyan-300" /></div>
              <a href="mailto:you@example.com" className="text-white/80 hover:text-white">you@example.com</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/10 p-2 ring-1 ring-white/20"><Phone className="h-5 w-5 text-cyan-300" /></div>
              <span className="text-white/80">+62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/10 p-2 ring-1 ring-white/20"><MapPin className="h-5 w-5 text-cyan-300" /></div>
              <span className="text-white/80">Jakarta, Indonesia</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

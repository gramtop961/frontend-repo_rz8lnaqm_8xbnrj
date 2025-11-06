import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} — Dibuat dengan cinta dan secangkir kopi.
      </footer>
    </div>
  )
}

export default App

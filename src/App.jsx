import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Approach from './components/Approach'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Approach />
        <CTA />
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-white/80">© {new Date().getFullYear()} Tweezers. All rights reserved.</div>
            <div className="text-sm text-slate-400">Professional equity and derivatives advisory. Capital at risk. Past performance is not indicative of future results.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

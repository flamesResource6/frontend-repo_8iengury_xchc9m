import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300/90 backdrop-blur">
            Trusted by 50+ active clients
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Premium, risk-managed portfolio guidance for serious investors
          </h1>
          <p className="mt-5 text-slate-300 text-lg">
            Tweezers delivers disciplined trading strategies, proactive risk controls, and transparent communication so your capital works harder—without surprises.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-6 py-3 font-medium shadow-lg shadow-blue-500/20">
              Book a 15‑min Consultation
            </a>
            <a href="#approach" className="inline-flex items-center justify-center rounded-lg border border-white/15 text-white px-6 py-3 font-medium hover:bg-white/5">
              Explore Our Approach
            </a>
          </div>
          <div className="mt-6 text-slate-400 text-sm">
            SEBI-compliant advisory • Clear fees • No hidden agendas
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

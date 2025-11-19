function Features() {
  const features = [
    {
      title: 'Expert Portfolio Guidance',
      desc: 'Allocation frameworks anchored in data, macro context, and multi-cycle experience—tailored to your risk profile.',
    },
    {
      title: 'Risk‑Managed Trading',
      desc: 'Disciplined entries, staged exits, and dynamic hedging built to protect downside while pursuing asymmetric gains.',
    },
    {
      title: 'Personalised Strategies',
      desc: 'Bespoke strategies factoring goals, timeline, tax sensitivity, and liquidity—no one‑size‑fits‑all playbook.',
    },
    {
      title: 'Transparent Communication',
      desc: 'Clear rationales, timely updates, and performance reviews so you always know what we’re doing and why.',
    },
  ]

  return (
    <section id="expertise" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(59,130,246,0.10),transparent),radial-gradient(600px_circle_at_90%_10%,rgba(99,102,241,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Why clients choose Tweezers</h2>
          <p className="mt-3 text-slate-300">Institutional discipline, boutique attention. We combine rigorous process with human judgment to deliver durable results.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <h3 className="text-white font-medium text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

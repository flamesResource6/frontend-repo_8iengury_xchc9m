function Approach() {
  const steps = [
    {
      title: 'Discovery & Fit',
      text: 'Understand objectives, constraints, and risk tolerance. If we’re not the right partner, we’ll say so.'
    },
    {
      title: 'Strategy Build',
      text: 'Design allocation and trading playbooks aligned to goals—cash flows, drawdown limits, and tax profile.'
    },
    {
      title: 'Execution & Risk',
      text: 'Methodical entries, position sizing, and protective stops. We adapt to regimes without chasing noise.'
    },
    {
      title: 'Ongoing Reporting',
      text: 'Transparent updates and review cadence so you see what changed, what’s next, and what it means.'
    }
  ]

  return (
    <section id="approach" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">A process built for confidence</h2>
            <p className="mt-3 text-slate-300">We combine quantitative discipline with seasoned discretion. You get clarity on risk, rationale, and results—every step.</p>

            <div className="mt-10 space-y-5">
              {steps.map((s, i) => (
                <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="absolute -left-3 -top-3 h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-semibold">{i+1}</div>
                  <h3 className="text-white font-medium">{s.title}</h3>
                  <p className="mt-1.5 text-slate-300 text-sm">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
            <div className="text-white font-medium">What you can expect</div>
            <ul className="mt-4 space-y-3 text-slate-300 text-sm">
              <li>• Personalised strategy, not mass‑produced tips</li>
              <li>• Risk first: we protect downside before seeking upside</li>
              <li>• Evidence‑based decisions with clear rationales</li>
              <li>• Structured reporting and on‑call communication</li>
              <li>• Alignment via transparent fees</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach

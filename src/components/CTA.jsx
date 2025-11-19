function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to invest with confidence?</h2>
            <p className="mt-3 text-white/90 max-w-2xl">
              Join Tweezers and get a personalised, risk‑managed plan with transparent communication. Limited new client slots open monthly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="mailto:hello@tweezers.capital?subject=Consultation%20Request" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-semibold">
                Book Your Consultation
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold">
                Join Tweezers
              </a>
            </div>

            <div className="mt-4 text-sm text-white/80">Prefer a call? +91‑00000‑00000 • Mon‑Fri 9am–6pm</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

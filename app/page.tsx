export default function Home() {
  const faqs = [
    {
      q: "Which bank and expense tools do you support?",
      a: "We integrate with Plaid and Teller for bank accounts, plus QuickBooks, Xero, and Stripe for expense tracking."
    },
    {
      q: "How accurate is the runway prediction?",
      a: "Our ML model analyzes 12+ months of cash flow patterns to forecast runway within a 5% margin, updated daily."
    },
    {
      q: "Can I share the dashboard with my investors?",
      a: "Yes. Generate a read-only investor link with one click — no login required for your investors."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Startup Burn Rate Alerter
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know before you run out of{" "}
          <span className="text-[#58a6ff]">runway</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your bank accounts and expense tools. Get ML-powered runway predictions and early alerts before cash becomes critical.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $39/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">No credit card required for 14-day trial</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["Real-time", "Cash flow monitoring"],
            ["ML-powered", "Runway prediction"],
            ["Instant", "Investor dashboard sharing"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-bold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per company</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited bank account connections",
              "Daily ML runway forecasts",
              "Customizable alert thresholds",
              "Investor read-only dashboard",
              "Slack & email notifications",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} BurnAlert. All rights reserved.
      </footer>
    </main>
  );
}

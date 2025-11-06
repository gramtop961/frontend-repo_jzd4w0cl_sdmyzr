import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section id="get-started" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative isolate overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white p-8">
          <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-violet-200 blur-3xl" />
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-violet-700 ring-1 ring-violet-200">
                <ShieldCheck className="h-3.5 w-3.5" /> Secure by design
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">Ready to see Aegis in action?</h3>
              <p className="mt-2 text-zinc-600">Start a 14‑day trial. No credit card required.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-300/30 transition hover:bg-violet-600"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-violet-800 ring-1 ring-zinc-200 transition hover:bg-zinc-50"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Aegis Secure Inc.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-700">Privacy</a>
            <a href="#" className="hover:text-zinc-700">Terms</a>
            <a href="#" className="hover:text-zinc-700">Status</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;

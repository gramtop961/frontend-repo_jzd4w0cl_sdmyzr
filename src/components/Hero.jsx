import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate" id="hero">
      {/* 3D Scene */}
      <div className="relative h-[80vh] w-full md:h-[88vh]">
        <Spline
          scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient glow overlays (won't block interactions) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl md:h-80 md:w-80" />
          <div className="absolute bottom-0 left-8 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl md:h-56 md:w-56" />
          <div className="absolute right-8 top-20 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl md:h-40 md:w-40" />
        </div>
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="pointer-events-auto mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Real-time Threat Prevention
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Fortify your business with next‑gen cyber defense
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base text-zinc-300 md:text-lg">
              Autonomous protection, continuous monitoring, and instant response. Built for security teams that demand speed, clarity, and control.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-zinc-400">
              <p>Zero Trust Architecture</p>
              <p>ISO 27001 Compliant</p>
              <p>99.99% Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

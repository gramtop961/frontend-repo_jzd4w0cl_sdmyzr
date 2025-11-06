import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate" id="hero">
      {/* 3D Full-width Cover */}
      <div className="relative h-[88vh] w-full">
        <Spline
          scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle purple glows that don't block interactions */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl md:h-96 md:w-96" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl md:h-56 md:w-56" />
        </div>
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="pointer-events-auto mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300" />
              Enterprise‑grade protection
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Confident security for a connected world
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base text-white/80 md:text-lg">
              Detect, prevent, and respond in real time with a unified platform built for scale, trust, and clarity.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-violet-800 shadow-lg shadow-violet-500/20 transition hover:bg-violet-50"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-white/70">
              <p>Zero Trust Architecture</p>
              <p>ISO 27001 & SOC 2</p>
              <p>99.99% Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

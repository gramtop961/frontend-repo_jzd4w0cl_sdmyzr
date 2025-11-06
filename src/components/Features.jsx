import React from 'react';
import { Shield, Radar, Lock, Activity } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Adaptive Shielding',
    desc: 'Continuously hardens your attack surface using AI-driven policies and posture checks.',
  },
  {
    icon: Radar,
    title: 'Threat Intelligence',
    desc: 'Correlates global telemetry to predict and neutralize emerging threats before impact.',
  },
  {
    icon: Lock,
    title: 'Zero Trust Access',
    desc: 'Granular identity controls with device attestation and continuous verification.',
  },
  {
    icon: Activity,
    title: 'Incident Response',
    desc: 'Automated playbooks and forensics to accelerate containment and recovery.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Security without compromise</h2>
        <p className="mt-3 text-zinc-300">
          A unified platform designed to protect identities, devices, and data across your entire ecosystem.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-500/40 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-500/30">
              <Icon className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <div id="solutions" className="mt-20 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        <div className="col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-8">
          <h3 className="text-2xl font-semibold">Unified Security Graph</h3>
          <p className="mt-2 max-w-2xl text-zinc-300">
            Real-time correlation across identities, endpoints, networks, and cloud workloads.
            Visualize relationships, detect anomalies, and act with confidence.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-300 md:grid-cols-2">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Lateral movement detection</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Risk-based access control</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Sensitive data discovery</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Automated remediation</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Built for compliance</h3>
          <p className="mt-2 text-zinc-300">
            Streamline audits and maintain alignment with SOC 2, ISO 27001, HIPAA, and GDPR.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300">
            <div className="rounded-xl bg-black/40 p-4 ring-1 ring-white/10">Asset Inventory</div>
            <div className="rounded-xl bg-black/40 p-4 ring-1 ring-white/10">Policy Engine</div>
            <div className="rounded-xl bg-black/40 p-4 ring-1 ring-white/10">Audit Trails</div>
            <div className="rounded-xl bg-black/40 p-4 ring-1 ring-white/10">Evidence Vault</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

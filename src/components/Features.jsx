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
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Security without compromise</h2>
        <p className="mt-3 text-zinc-600">
          A unified platform designed to protect identities, devices, and data across your entire ecosystem.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-violet-300 hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 ring-1 ring-violet-200">
              <Icon className="h-5 w-5 text-violet-700" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-200/40 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <div id="solutions" className="mt-20 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        <div className="col-span-2 rounded-2xl border border-violet-200/60 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white p-8">
          <h3 className="text-2xl font-semibold text-zinc-900">Unified Security Graph</h3>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Real-time correlation across identities, endpoints, networks, and cloud workloads.
            Visualize relationships, detect anomalies, and act with confidence.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-700 md:grid-cols-2">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-600"/> Lateral movement detection</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-600"/> Risk-based access control</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-600"/> Sensitive data discovery</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-600"/> Automated remediation</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-zinc-900">Built for compliance</h3>
          <p className="mt-2 text-zinc-600">
            Streamline audits and maintain alignment with SOC 2, ISO 27001, HIPAA, and GDPR.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-700">
            <div className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">Asset Inventory</div>
            <div className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">Policy Engine</div>
            <div className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">Audit Trails</div>
            <div className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">Evidence Vault</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

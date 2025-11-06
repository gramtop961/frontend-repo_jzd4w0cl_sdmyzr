import React from 'react';
import { ShieldCheck } from 'lucide-react';

const brands = [
  'Acme Corp',
  'Globex',
  'Initech',
  'Umbrella',
  'WayneTech',
  'Stark Industries',
];

const TrustBadges = () => {
  return (
    <section id="trust" className="bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 ring-1 ring-violet-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted by modern security teams
          </div>
          <p className="text-sm text-zinc-600">
            Teams across cloud, finance, and SaaS rely on our platform to protect identities, devices, and data at scale.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((b) => (
            <div
              key={b}
              className="flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

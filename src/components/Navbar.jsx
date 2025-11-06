import React from 'react';
import { ShieldCheck, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500/15 ring-1 ring-violet-400/30">
            <ShieldCheck className="h-5 w-5 text-violet-600" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight text-zinc-900">Aegis Secure</p>
            <p className="text-xs text-zinc-500">Cyber Defense Platform</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          <a href="#features" className="hover:text-zinc-900">Features</a>
          <a href="#solutions" className="hover:text-zinc-900">Solutions</a>
          <a href="#trust" className="hover:text-zinc-900">Trust</a>
          <a href="#contact" className="hover:text-zinc-900">Contact</a>
          <a
            href="#get-started"
            className="rounded-full bg-violet-600/10 px-4 py-2 font-medium text-violet-700 ring-1 ring-violet-600/30 transition hover:bg-violet-600/20 hover:text-violet-800"
          >
            Get Started
          </a>
        </nav>
        <button className="md:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6 text-zinc-700" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

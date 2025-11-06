import React from 'react';
import { ShieldCheck, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/20 ring-1 ring-emerald-400/30">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">Aegis Secure</p>
            <p className="text-xs text-zinc-400">Cyber Defense Platform</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#solutions" className="hover:text-white">Solutions</a>
          <a href="#trust" className="hover:text-white">Trust</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a
            href="#get-started"
            className="rounded-full bg-emerald-500/10 px-4 py-2 font-medium text-emerald-300 ring-1 ring-emerald-500/40 transition hover:bg-emerald-500/20 hover:text-emerald-200"
          >
            Get Started
          </a>
        </nav>
        <button className="md:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6 text-zinc-300" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

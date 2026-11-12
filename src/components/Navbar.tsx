'use client';
import { Phone, Calendar } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="font-extrabold text-xl tracking-tight text-slate-900">
          LOCAL<span className="text-amber-600">SERVICE</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+11234567890"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600 px-3 py-2 rounded-lg transition"
          >
            <Phone className="w-4 h-4 text-amber-600" />
            <span className="hidden sm:inline">(123) 456-7890</span>
          </a>

          <a
            href="#estimate"
            className="flex items-center gap-2 bg-amber-600 text-white font-semibold text-sm px-4 py-2 rounded-xl hover:bg-amber-700 transition shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Get Quote</span>
          </a>
        </div>
      </div>
    </header>
  );
}
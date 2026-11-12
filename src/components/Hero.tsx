import { Star, MapPin } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center pt-12 pb-16 px-4 overflow-hidden">
      {/* 1. Gambar sebagai background dengan overlay gelap agar teks kontras */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/asset1.jpg"
          alt="Background Salon Hewan"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay hitam transparan agar gambar agak meredup */}
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />
      </div>

      {/* 2. Konten Teks dengan Kotak Backdrop Blur Transparan */}
      <div className="relative z-10 max-w-4xl mx-auto text-center bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-medium mb-6">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Serving Charlotte, NC & Surrounding Areas</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Professional Care Your Dog Deserves.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            100% Kennel-Free, stress-free grooming tailored to your pet. Clear pricing, instant booking, and 10+ years of local experience.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="#estimate"
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-3.5 rounded-xl transition transform hover:-translate-y-0.5 shadow-lg shadow-amber-600/20"
            >
              Calculate Instant Price
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition transform hover:-translate-y-0.5"
            >
              Send Inquiry
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9/5</span>
            <span>(120+ Verified Local Reviews)</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
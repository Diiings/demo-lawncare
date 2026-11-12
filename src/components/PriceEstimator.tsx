'use client';

import { useState } from 'react';
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

const SIZES = [
  { id: 'small', label: 'Small (< 20 lbs)', basePrice: 65 },
  { id: 'medium', label: 'Medium (20-40 lbs)', basePrice: 85 },
  { id: 'large', label: 'Large (40-70 lbs)', basePrice: 110 },
  { id: 'doodle', label: 'Doodle / Specialty', basePrice: 130 },
];

export default function PriceEstimator() {
  const [selectedSize, setSelectedSize] = useState('small');
  const [addons, setAddons] = useState<string[]>([]);

  const currentSizeObj = SIZES.find((s) => s.id === selectedSize) || SIZES[0];

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const addonPrice = addons.length * 15;
  const totalPrice = currentSizeObj.basePrice + addonPrice;

  return (
    <section id="estimate" className="relative min-h-screen flex flex-col py-16 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Instant Price Estimator</h2>
            <p className="text-slate-600 mt-2">Select your dog size to get an accurate cost breakdown.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Controls */}
          <FadeIn direction="right" delay={0.1} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                1. Select Pet Size
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SIZES.map((size) => (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-3 text-xs font-semibold rounded-xl border text-left transition ${
                      selectedSize === size.id
                        ? 'border-amber-600 bg-amber-50 text-amber-900 shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {size.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                2. Add-on Treatments (+$15 each)
              </label>
              <div className="space-y-2">
                {['Nail Grind & Paw Balm', 'De-shedding Treatment', 'Teeth Brushing'].map((addon) => (
                  <label
                    key={addon}
                    className="flex items-center justify-between p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50"
                  >
                    <span className="text-sm font-medium text-slate-700">{addon}</span>
                    <input
                      type="checkbox"
                      checked={addons.includes(addon)}
                      onChange={() => toggleAddon(addon)}
                      className="accent-amber-600 w-4 h-4"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 bg-amber-50/60 border border-amber-200/60 rounded-xl">
                <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Est. Time</div>
                  <div className="text-[11px] text-slate-600">~ 1.5 to 2 Hours</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-amber-50/60 border border-amber-200/60 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Safe</div>
                  <div className="text-[11px] text-slate-600">Cage-free care</div>
                </div>
              </div>
            </div>
          </FadeIn>

          

          {/* Price Output */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                Estimated Total
              </h3>

              <div className="h-14 flex items-center overflow-hidden mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={totalPrice}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-5xl font-black text-amber-400"
                  >
                    ${totalPrice}
                  </motion.div>
                </AnimatePresence>
              </div>

              <ul className="space-y-3 text-sm text-slate-300 mb-8 border-t border-slate-800 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Bath, Blowout & Haircut included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Nail Trim & Ear Cleaning included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>100% Kennel-Free Experience</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="block text-center w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-xl transition"
              >
                Book Appointment Now
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
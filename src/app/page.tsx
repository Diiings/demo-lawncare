'use client';

import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import PriceEstimator from '@/src/components/PriceEstimator';
import ContactForm from '@/src/components/ContactModal';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PriceEstimator />
      <ContactForm />
      <Footer />
    </main>
  );
}
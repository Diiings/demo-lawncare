'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | string>('2026');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 text-center text-xs text-slate-400 border-t border-slate-200">
      © {year} Local Service Business. All rights reserved.
    </footer>
  );
}
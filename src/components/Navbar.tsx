import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#141414]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold">AML Expert</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#program" className="hover:text-red-600 transition-colors">Program</a>
            <a href="#testimonials" className="hover:text-red-600 transition-colors">Success Stories</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors">Pricing</a>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
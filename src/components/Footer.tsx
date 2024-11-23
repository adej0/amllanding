import React from 'react';
import { Shield, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold">AML Expert</span>
            </div>
            <p className="text-gray-400">Transform your career with industry-leading AML/KYC training.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#program" className="hover:text-red-600 transition-colors">Our Program</a></li>
              <li><a href="#testimonials" className="hover:text-red-600 transition-colors">Success Stories</a></li>
              <li><a href="#pricing" className="hover:text-red-600 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-red-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@amlexpert.com</li>
              <li>1-800-AML-EXPERT</li>
              <li>123 Finance Street</li>
              <li>New York, NY 10004</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AML Expert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export default function TestimonialCard({ name, role, company, image, quote }: TestimonialProps) {
  return (
    <div className="bg-[#1f1f1f] p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-all">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
          <p className="text-red-600 text-sm">{company}</p>
        </div>
      </div>
      <blockquote className="text-gray-300">"{quote}"</blockquote>
    </div>
  );
}
import React from 'react';
import { Shield, BookOpen, Users, Target, Award, Play, ChevronRight, CheckCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestimonialCard from './components/TestimonialCard';

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="card-hover bg-[#1f1f1f] p-6 rounded-lg border border-gray-800 hover:border-gray-600">
      <Icon className="w-10 h-10 text-red-600 mb-4" />
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function App() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior AML Analyst",
      company: "Goldman Sachs",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      quote: "This program fast-tracked my career transition into AML compliance. Within 3 months, I landed a senior position."
    },
    {
      name: "Michael Rodriguez",
      role: "KYC Team Lead",
      company: "JPMorgan Chase",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      quote: "The real-world scenarios and case studies were invaluable. They prepared me for actual challenges I face daily."
    },
    {
      name: "Emily Watson",
      role: "Compliance Director",
      company: "Barclays",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      quote: "Best investment in my career. The program's comprehensive approach helped me secure a director position."
    },
    {
      name: "David Park",
      role: "Financial Crime Specialist",
      company: "HSBC",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      quote: "The networking opportunities alone were worth it. I connected with industry leaders who guided my career path."
    },
    {
      name: "Lisa Thompson",
      role: "Regulatory Compliance Manager",
      company: "Deutsche Bank",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      quote: "From a traditional banking role to compliance management in 6 months. The transformation was remarkable."
    },
    {
      name: "James Wilson",
      role: "AML Advisory Lead",
      company: "Morgan Stanley",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      quote: "The program's focus on emerging technologies in AML gave me a competitive edge in the industry."
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Modern financial district"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl pt-20">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Break Into AML/KYC
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Transform your financial expertise into a six-figure career in compliance
            </p>
            <div className="flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded text-xl font-medium flex items-center gap-2 transition-colors">
                <Play className="w-6 h-6 fill-current" />
                Watch Preview
              </button>
              <button className="bg-gray-800/80 hover:bg-gray-700/80 px-8 py-4 rounded text-xl font-medium flex items-center gap-2 transition-colors">
                More Info
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#1f1f1f] p-8 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
              <p className="text-gray-400">Increase in AML positions since 2020</p>
            </div>
            <div className="bg-[#1f1f1f] p-8 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold text-red-600 mb-2">$150K+</div>
              <p className="text-gray-400">Average Senior AML Analyst Salary</p>
            </div>
            <div className="bg-[#1f1f1f] p-8 rounded-lg border border-gray-800">
              <div className="text-4xl font-bold text-red-600 mb-2">92%</div>
              <p className="text-gray-400">Job Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section id="program" className="py-20 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Program Overview</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80"
                alt="Training session"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
                  <p className="text-gray-400">Six intensive modules covering all aspects of AML/KYC compliance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Experts</h3>
                  <p className="text-gray-400">Learn from professionals with decades of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                  <p className="text-gray-400">Real-world case studies and hands-on exercises</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career Support</h3>
                  <p className="text-gray-400">Resume review, interview prep, and job placement assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={BookOpen}
              title="Comprehensive Training"
              description="Master compliance fundamentals through our intensive 6-module program"
            />
            <FeatureCard
              icon={Users}
              title="Real-World Scenarios"
              description="Practice with actual case studies from leading financial institutions"
            />
            <FeatureCard
              icon={Target}
              title="Career Coaching"
              description="Get personalized guidance from industry veterans"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Investment in Your Future</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#1f1f1f] p-8 rounded-lg border border-gray-800">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Complete AML/KYC Program</h3>
                <div className="text-4xl font-bold text-red-600 mb-2">$2,999</div>
                <p className="text-gray-400">or 12 monthly payments of $299</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Full access to all 6 training modules",
                  "Real-world case studies and exercises",
                  "1-on-1 career coaching sessions",
                  "Resume review and optimization",
                  "Interview preparation",
                  "Lifetime access to course updates",
                  "Industry networking opportunities"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 px-8 py-4 rounded text-xl font-medium transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-[#141414] to-[#1f1f1f]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our next cohort and start your journey towards a rewarding career in AML/KYC
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded text-xl font-medium inline-flex items-center gap-2 transition-colors">
            Get Started Now
            <ChevronRight className="w-6 h-6" />
          </button>
          <p className="mt-4 text-gray-400">Limited spots available. Next cohort starts soon!</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
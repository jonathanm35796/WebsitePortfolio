'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Network Automation Engineer
              <span className="block text-blue-600">Building Digital Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Specializing in network engineering, automation, and infrastructure optimization.
              Experienced in Python development, Cisco systems, and cloud technologies.
            </p>

            <div className="flex gap-4 pt-4">
              <Link 
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Projects
              </Link>
              <Link 
                href="#contact"
                className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <Image
                src="/profile-pic.png"
                alt="Jonathan McFarland"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

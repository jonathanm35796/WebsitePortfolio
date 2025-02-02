'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Network Automation Engineer
          <span className="block text-blue-600 mt-2">Building Digital Solutions</span>
        </h1>
        
        <p className="text-xl text-gray-700 max-w-2xl">
          I create modern web applications with a focus on user experience,
          performance, and scalability. Let&apos;s build something amazing together.
        </p>

        <div className="flex gap-4 pt-4">
          <Link 
          href="#projects"
          className="btn btn-primary px-8"
          >
          View Projects
          </Link>
          <Link 
          href="#contact"
          className="btn bg-white/80 text-gray-800 hover:bg-white/90 focus:ring-gray-500 px-8"
          >
          Contact Me
          </Link>
        </div>
        </div>

        <div className="flex-1 relative">
        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
          <div className="absolute inset-0 bg-blue-100/20 rounded-2xl -rotate-6"></div>
          <Image
          src="/profile-pic.png"
          alt="Profile"
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

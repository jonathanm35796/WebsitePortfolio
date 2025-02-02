"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="hero" className="min-h-screen flex items-center justify-center bg-[#1A2238]">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Jonathan McFarland
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Network Automation Engineer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl"
            >
              Specializing in network engineering, automation, and infrastructure optimization.
              Experienced in Python development, Cisco systems, and cloud technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="bg-white text-[#1A2238] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#expertise"
                className="bg-[#800000] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#660000] transition duration-300 border border-white/20"
              >
                View Expertise
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="w-full aspect-square relative max-w-md">
              {/* Use a subtler background for the profile picture */}
              <div className="absolute inset-0 bg-gray-700 rounded-full z-[-1]"></div>
              <Image
                src="/profile-pic.png"
                alt="Jonathan McFarland"
                width={600}
                height={600}
                className="rounded-full object-cover border-4 border-white/20"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

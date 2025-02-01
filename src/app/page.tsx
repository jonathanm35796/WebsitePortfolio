'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Career from '../components/Career';
import Expertise from '../components/Expertise';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section id="hero">
          <Hero />
        </section>
        <section id="career">
          <Career />
        </section>
        <section id="expertise">
          <Expertise />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
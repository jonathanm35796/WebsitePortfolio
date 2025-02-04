"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Career from "../components/Career";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen pt-20"> {/* Added padding-top to account for fixed navbar */}
        <Hero />
        <Career />
        <Expertise />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

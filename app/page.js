"use client";
import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Journal from "@/components/Journal";
import Explorations from "@/components/Explorations";
import Stats from "@/components/Stats";
import ContactFooter from "@/components/ContactFooter";
import SmoothScroll from "@/components/SmoothScroll";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-bg selection:bg-accent-gradient selection:text-white overflow-hidden font-body">
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      
      {!loading && (
        <SmoothScroll>
          <Navbar />
          <Hero />
          <Works />
          <Journal />
          <Explorations />
          <Stats />
          <ContactFooter />
        </SmoothScroll>
      )}
    </main>
  );
}

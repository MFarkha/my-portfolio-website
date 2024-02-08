'use client';

import React, { useEffect } from "react";
import About from "./_components/About";
import ProjectList from "./_components/ProjectList";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";

export default function Home() {
  useEffect(() => {
    async function initSR() {
      const { targetElements, defaultProps } = await import("./_lib/scrollRevealConfig");
      const { initScrollReveal } = await import("./_lib/scrollReveal");
      initScrollReveal(targetElements, defaultProps);
    }
    initSR();
  }, []);
  return (
    <>
      <div id="top"></div>
      <Hero />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  );
}

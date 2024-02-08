'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import bgImage from "../../public/background-19-mini.webp";

const Hero = () => {
  const [matches, setMatches] = useState(false);
  const bgImageStyle = {
    backgroundImage: `url("${bgImage.src}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  useEffect(() => {
    const mediaMatch = window.matchMedia('(min-width: 600px)');
    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }
    mediaMatch.addEventListener('change', handler);
    return () => mediaMatch.removeEventListener('change',handler);
  }, []);

  return (
    <section id="hero" className="jumbotron"
        style={ (matches) ? bgImageStyle : {} }
      >
      <div className="container" >
        {/* <h1 className="hero-title load-hidden"> */}
        <h1 className="hero-title">
          Hi, my name is <span className="text-color-main">Farkhad Maten</span>
          <br />
          {`I'm the Developer you need.`}
        </h1>
        <p className="hero-cta load-hidden">
          <Link
            rel="noreferrer"
            className="cta-btn cta-btn--hero"
            href="#about"
          >
            Know more
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Hero;

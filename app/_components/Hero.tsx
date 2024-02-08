import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title load-hidden">
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

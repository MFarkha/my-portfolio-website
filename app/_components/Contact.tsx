import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper load-hidden">
          <p className="contact-wrapper__text">Email me</p>
          <Link
            target="_blank"
            className="cta-btn cta-btn--resume"
            href="mailto:farhad.maten@hotmail.com"
          >
            Call to Action
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;

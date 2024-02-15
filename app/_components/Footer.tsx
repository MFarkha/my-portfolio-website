import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <Link rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </Link>
        <div className="social-links">
          <Link rel="noreferrer" href="#!" target="_blank">
            <i className="fa fa-twitter fa-inverse"></i>
          </Link>
          <Link rel="noreferrer" href="#!" target="_blank">
            <i className="fa fa-linkedin fa-inverse"></i>
          </Link>
          <Link rel="noreferrer" href="#!" target="_blank">
            <i className="fa fa-github fa-inverse"></i>
          </Link>
        </div>

        <hr />

        <p className="footer__text">
          © 2024 - Farkhad Maten <br/>
          <Link rel="noreferrer" href="https://github.com/MFarkha/my-portfolio-website" target="_blank">
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

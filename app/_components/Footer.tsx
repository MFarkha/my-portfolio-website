import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a rel="noreferrer" href="#!" target="_blank">
            <i className="fa fa-twitter fa-inverse"></i>
          </a>
          <a rel="noreferrer" href="#!" target="_blank">
            <i className="fa fa-linkedin fa-inverse"></i>
          </a>
          <a rel="noreferrer" href="#!" target="_blank">
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>

        <hr />

        <p className="footer__text">
          © 2021 - Based on the template developed by
          <Link rel="noreferrer" href="https://github.com/cobidev" target="_blank">
            Jacobo Martínez
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

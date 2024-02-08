import React from "react";
import Image from "next/image";
import Link from "next/link";
import myProfilePhoto from "../../public/profile-mini.jpg";

const About = () => {

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <Image
                alt="My Profile Photo"
                className="img-fluid rounded shadow-lg"
                width={200}
                height={300}
                src={myProfilePhoto}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
                This is where you can describe about yourself. The more you
                describe about yourself, the more chances you can!
              </p>
              <p className="about-wrapper__info-text">
                Extra Information about you! like hobbies and your goals.
              </p>
              <span className="d-flex mt-3">
                <Link
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="/resume.pdf"
                >
                  View Resume
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import myProfilePhoto from "../../public/my-profile-mini2.webp";

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
                width={300}
                height={450}
                src={myProfilePhoto}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
              Technically sophisticated professional with 14 years experience.
              <br/><br/>
              Skilled in holistic design and patterns for Cloud environments, platform enhancements, application architecture.
              <br/><br/>
              Expert at automating software development processes, aimed at improving stability, reliability, and efficiency.
              </p><br/>
              <p className="about-wrapper__info-text">
                I enjoy playing tennis, watch a favourite football team (Man Utd) and spend time with my family.
                <br/><br/>
                I like to learn new technologies and challenge myself for new software projects doing a full lifecycle: design, development and delivery!
              </p>
              <span className="d-flex mt-3">
                <Link
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="https://www.linkedin.com/in/farkhad-maten-45312617/"
                >
                  My LinkedIn
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

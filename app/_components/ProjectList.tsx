'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import myProjectPhoto from '../../public/my-robofriends-screen.webp';

const ProjectList = () => {
  useEffect(() => {
    async function initTiltAnimation() {
      (await import('../_lib/tiltAnimation')).default()
    }
    initTiltAnimation();
  }, [])
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {/* <!-- Notice: each .row is a project --> */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text load-hidden">
                <h3 className="project-wrapper__text-title">
                  My Robofriends
                </h3>
                <div>
                  <p className="mb-4">
                    An example of a modern PWA application built on React/Next.js web framework.
                  </p>
                  <p className="mb-4">

                    Under the hood:<br />
                    - Typescript language <br />
                    - Unit tests (Vitest) <br />
                    - Continious Integration (Github Actions) <br />
                  </p>
                </div>
                <Link
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://mfarkha.github.io/my-robofriends/"
                >
                  See Live
                </Link>
                <Link
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/MFarkha/my-robofriends"
                >
                  Source Code
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image load-hidden">
                <Link rel="noreferrer" href="#!" target="_blank">
                  <div
                    data-tilt
                    data-tilt-max="4"
                    data-tilt-glare="true"
                    data-tilt-max-glare="0.5"
                    className="thumbnail rounded js-tilt"
                  >
                    <Image
                      alt="Project Image"
                      className="img-fluid"
                      src={myProjectPhoto}
                      width={1024}
                      height={768}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- /END Project --> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;

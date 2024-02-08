'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
                  Project My-robofriends
                </h3>
                <div>
                  <p className="mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Excepturi neque, ipsa animi maiores repellendus distinctio
                    aperiam earum dolor voluptatum consequatur blanditiis
                    inventore debitis fuga numquam voluptate ex architecto
                    itaque molestiae.
                  </p>
                </div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="#!"
                >
                  See Live
                </a>
                <Link
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="#!"
                >
                  Source Code
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image load-hidden">
                <a rel="noreferrer" href="#!" target="_blank">
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
                      src="/logo.png"
                      width="100"
                      height="100"
                    />
                  </div>
                </a>
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

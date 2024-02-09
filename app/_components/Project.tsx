import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "./ProjectList";

type props = {
    key: number,
} & ProjectData

const Project = (data: props) => {
    return (
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text load-hidden">
                <h3 className="project-wrapper__text-title">
                  { data.name }
                </h3>
                <div>
                  <p className="mb-4">
                    { data.shortDesc }
                  </p>
                  <p className="mb-4">
                    { data.longDesc }
                  </p>
                </div>
                <Link
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href={ data.liveView }
                >
                  See Live
                </Link>
                <Link
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn text-color-main"
                  href={ data.sourceCode }
                >
                  Source Code
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image load-hidden">
                <Link rel="noreferrer" href={ data.liveView } target="_blank">
                  <div
                    data-tilt
                    data-tilt-max="4"
                    data-tilt-glare="true"
                    data-tilt-max-glare="0.5"
                    className="thumbnail rounded js-tilt"
                  >
                    <Image
                      alt={ `Project ${data.name}` }
                      className="img-fluid"
                      src={data.photo}
                      width={800} // 1024
                      height={479} // 613
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
    )
}

export default Project;
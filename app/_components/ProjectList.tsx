'use client';
import React, { useEffect } from "react";
import myProjectPhoto from '../../public/my-robofriends-screen.webp';
import Project from "./Project";

export type ProjectData = typeof projectsData[0];

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
          {
            projectsData.map((p: ProjectData, key: number)=> {
              return (
                <Project {...p} key={key}/>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};


const projectsData = [
  {
    name: 'My Robofriends',
    shortDesc: 'An example of a modern PWA application built on React/Next.js web framework.',
    longDesc: (
      <>
        Under the hood: <br />
          - Typescript language <br/>
          - Unit tests (Vitest) <br />
          - Continious Integration (Github Actions) <br />
      </>
    ),
    liveView: 'https://mfarkha.github.io/my-robofriends/',
    sourceCode: 'https://github.com/MFarkha/my-robofriends',
    photo: myProjectPhoto,
  },
]

export default ProjectList;

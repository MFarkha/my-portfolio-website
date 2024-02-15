'use client';
import React, { useEffect } from "react";
import myProjectPhoto1 from '../../public/my-robofriends-screen.webp';
import myProjectPhoto2 from '../../public/my-fra-screen.webp';
import myProjectPhoto3 from '../../public/my-nasa-mc-screen.webp';

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
    shortDesc: 'The app displays a list of robots (images from https://robohash.org/)',
    longDesc: (
      <>
        Under the hood: <br />
          - Progressive Web Application (PWA)
          - React <br/>
          - Next.js <br/>
          - Typescript language <br/>
          - Unit tests (Vitest) <br />
          - Continious Integration (Github Actions) <br />
      </>
    ),
    liveView: 'https://mfarkha.github.io/my-robofriends/',
    sourceCode: 'https://github.com/MFarkha/my-robofriends',
    photo: myProjectPhoto1,
  },
  {
    name: 'Face Recognition App',
    shortDesc: 'The app allows to recognize human faces out of any provided image',
    longDesc: (
      <>
        <strong>Frontend</strong>: <br />
          - React (create react app) <br/>
          - Client session management (JWT handler) <br />
          - Unit tests (Jest/Testing Library) <br />
          - CI/CD: Github Pages <br />
          - Continuous Delivery using Terraform onto AWS S3/CloudFront <br/>
        <br/>
        <strong>Backend</strong>:  <br />
          - JavaScript/Node.js, REST API: Express <br/>
          - Invoke of Clarif.ai API for face recognition <br/>
          - AWS Lambda function (its deployment through AWS CDK) <br/>
          - Database: Postgres <br/>
          - Authorization: JWT, session cache: Redis <br/>
          - Containerized app: Docker/Docker Compose <br/>
          - CI/CD (Github Actions) <br />
          - CD using AWS CDK onto Elastic Cloud Service (ECS) <br/>
          - CD using eksctl onto Elastic Kubernetes Service (EKS) <br/>
      </>
    ),
    liveView: '',
    sourceCode: 'https://github.com/MFarkha/my-face-recognition',
    photo: myProjectPhoto2,
  },
  {
    name: 'NASA Mission Control application',
    shortDesc: `The app allows to 'launch' space missions based on real-life rocket and SpaceX data.
        No affiliation with NASA or SpaceX in any way. Created for educational purposes only.`,
    longDesc: (
      <>
        <strong>Frontend</strong>: <br />
          - React (create react app) <br/>
          - Unit tests (Jest/Testing Library) <br />
          - CI/CD: Github Pages <br />
        <br/>
        <strong>Backend</strong>:  <br />
          - JavaScript/Node.js, REST API: Express <br/>
          - Invoke of SpaceX Data API for data of space launches<br/>
          - Database: MongoDB Atlas <br/>
          - Authorization: OAuth<br/>
          - CI/CD (Github Actions) <br />
      </>
    ),
    liveView: '',
    sourceCode: 'https://github.com/MFarkha/my-face-recognition',
    photo: myProjectPhoto3,
  },
]

export default ProjectList;

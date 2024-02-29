import React from "react";
// importing custom hook to fetch data from contentful
import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  // Calling and destructuring the data from useFetchProjects hook
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading</h2>
      </section>
    );
  }

  // Rendering our list of projects
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, url, title } = project;  
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

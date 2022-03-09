import React from "react";
import Project from "../components/Project";
import projectsList from "../resources/projectsData.json";

const Projects = () => {
  return (
    <>
      {projectsList.map((project) => (
        <Project
          image={project.imgLink}
          name={project.name}
          link={project.link}
          shortDescription={project.ShortDesc}
          technologies={project.techno}
          key={project.id}
          demo={project.demo}
        />
      ))}
    </>
  );
};

export default Projects;

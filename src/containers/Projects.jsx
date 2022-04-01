import React from "react";
import Project from "../components/Project";
import projectsList from "../resources/projectsData.json";
//Contexto de proyectos - para cambiar la información de los proyectos de forma dinamica
import ProjectContext from "../context/ProjectContext";
import ProjectStates from "../hooks/projectState";

const Projects = () => { 
  //El proyecto debe ser un ESTADO EN UN CONTEXTO al que se accede desde cada modal en Project
    const projectSelectedValue = ProjectStates();
  return (
    <ProjectContext.Provider value={projectSelectedValue}>
      {projectsList.map((project) => (
        <Project
          key={project.id}
          image={project.imgLink}
          name={project.name}
          link={project.link}
          shortDesc={project.shortDesc}
          longDesc={project.longDesc}
          technologies={project.techno}
          demo={project.demo}
        />
      ))}
    </ProjectContext.Provider>
  );
};

export default Projects;

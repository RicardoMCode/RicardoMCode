import React from "react";
import Project from "../components/Project";
import proyectImage from "@images/certificado1.png";

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      img: proyectImage,
      name: "Name Proyect",
      link: "wwww.facebook.com",
      shortDesc: "Aqui se planteó un proyecto para la definición y gestión de X xo Y",
      techno: ["HTML5", "CSS3", "JS", "React", "Webpack"],
    },
    {
      id: 2,
      img: proyectImage,
      name: "Name Proyect",
      link: "wwww.facebook.com",
      shortDesc: "Aqui se planteó un proyecto para la definición y gestión de X xo Y",
      techno: ["HTML5", "CSS3", "JS", "React", "Webpack"],
    },
    {
      id: 3,
      img: proyectImage,
      name: "Name Proyect",
      link: "wwww.facebook.com",
      shortDesc: "Aqui se planteó un proyecto para la definición y gestión de X xo Y",
      techno: ["HTML5", "CSS3", "JS", "React", "Webpack"],
    },
    {
      id: 4,
      img: proyectImage,
      name: "Name Proyect",
      link: "wwww.facebook.com",
      shortDesc: "Aqui se planteó un proyecto para la definición y gestión de X xo Y",
      techno: ["HTML5", "CSS3", "JS", "React", "Webpack"],
    },
  ];

  return (
    <>
      {projectsList.map((project) => (
        <Project
          image={project.img}
          name={project.name}
          link={project.link}
          shortDescription={project.shortDesc}
          technologies={project.techno}
          key={project.id}
        />
      ))}
    </>
  );
};

export default Projects;

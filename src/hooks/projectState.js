import {useState} from "react";

const projectState = () => {
  const [ nameProject, setNameProject] = useState(null);
  const [ idProject, setidProject] = useState(null);
  const [ imgLinkProject, setImgLinkProject] = useState(null);
  const [ technoProject, setTechnoProject] = useState(null);
  const [ shortDescProject, setShortDescProject] = useState(null);
  const [ longDescProject, setLongDescProject] = useState(null);
  const [ linkProject, setLinkProject] = useState(null);
  const [ demoProject, setDemoProject] = useState(null);
  return { 
    nameProject, setNameProject,
    idProject, setidProject,
    imgLinkProject, setImgLinkProject,
    technoProject, setTechnoProject,
    shortDescProject, setShortDescProject,
    longDescProject, setLongDescProject,
    linkProject, setLinkProject,
    demoProject, setDemoProject
  };
}
export default projectState;


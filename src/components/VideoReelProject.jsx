import React from "react";
import { useContext } from "react";
import projectContext from "../context/ProjectContext";

const VideoReelProject = () => {
  const {linkProject} = useContext(projectContext);
  return (
    <div className="video-container">
      <iframe
        className="video-demoreel"
        src={linkProject}
        title="Video-reel"
        frameBorder="0"
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoReelProject;

import React from "react";

const VideoReelProject = ({ videolink }) => {
  return (
    <div className="video-container">
      <iframe
        className="video-demoreel"
        src={videolink}
        title="Video-reel"
        frameBorder="0"
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoReelProject;

import "./videolist.css";
import React from "react";
import VideoItem from "../Youtube/videoitem";

const VideoList = ({ videos, handleVideoSelect }) => {
  if (!videos) {
    return (
      <div className="noSearch">
        <p>No results shown</p>
      </div>
    );
  }
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });

  return (
    <div className="list">
      <div className="items" style={{marginTop:"800px"}}>{renderedVideos}</div>
    </div>
  );
};
export default VideoList;

import "./videolist.css";
import React from "react";
import VideoItem from "../Youtube/videoitem";

const VideoList = ({ videos, handleVideoSelect }) => {
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
      <div className="items">{renderedVideos}</div>
    </div>
  );
};
export default VideoList;

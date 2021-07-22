import "./videolist.css";
import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="video">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header ">{video.snippet.title}</div>
        <div className="header">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};
export default VideoItem;


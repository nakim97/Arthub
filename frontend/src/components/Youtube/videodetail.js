import "./videolist.css";
import React from "react";
import Searchbar from "./searchbar";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="noSearch">
        <p>Search for anything you want lo learn...</p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>

        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

import "./videolist.css";
import React from "react";


const VideoDetail = ({ video }) => {
  

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed" >
        <iframe src={videoSrc} allowFullScreen title="Video player"  />
      </div>
     
    </div>
  );
};

export default VideoDetail;

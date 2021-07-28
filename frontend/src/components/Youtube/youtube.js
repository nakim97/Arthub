import React, { useState } from "react";
import SearchBar from "../Youtube/searchbar";
import youtube from "../../APIs/youtube";
import VideoList from "../Youtube/videolist";
import VideoDetail from "../Youtube/videodetail";
import OutsideClickHandler from 'react-outside-click-handler';
import "./youtube.css";

export default function Youtube() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hidden, setHidden] = useState(false);
  
  const handleSubmit = async (termFromSearchBar) => {

    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    setVideos(response.data.items);
    console.log("this is resp", response);
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container" style={{ marginTop: "1em" }}>
      <SearchBar handleFormSubmit={handleSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column" style={{ marginTop: "800px" }}>
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}
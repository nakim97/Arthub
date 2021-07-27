import React from "react";
import SearchBar from "../Youtube/searchbar";
import youtube from "../../APIs/youtube";
import VideoList from "../Youtube/videolist";
import VideoDetail from "../Youtube/videodetail";
import OutsideClickHandler from 'react-outside-click-handler';


import "./youtube.css";

class YouTube extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  constructor() {
    super();
    this.state = {
      hidden: false
    };
  
  }
  operation(){
    this.setState({
      hidden: true
    })
  }
  

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };


  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            {this.state.hidden?
            <div className="eleven wide column" style={{marginTop:"800px"}}>
            <OutsideClickHandler
      onOutsideClick={() => this.operation()}
    >
              {
                this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo} />
              }
             
    </OutsideClickHandler>
            </div>
            :null}
          
            <div className="five wide column"  >
                <VideoList 
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YouTube;

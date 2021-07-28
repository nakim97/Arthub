import React from "react";
import SearchBar from "../Youtube/searchbar";
import youtube from "../../APIs/youtube";
import VideoList from "../Youtube/videolist";
import VideoDetail from "../Youtube/videodetail";
import ReactModal from 'react-modal';


import "./youtube.css";

class YouTube extends React.Component {
  
  constructor () {
    super();
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    
   
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVideoSelect = this.handleVideoSelect.bind(this);
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

  handleCloseModal () {
    this.setState({ selectedVideo: null});
  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
           
            <div className="eleven wide column" style={{marginTop:"800px"}}>

            <ReactModal isOpen={!!this.state.selectedVideo }  
            onRequestClose={ this.handleCloseModal } 
            ariaHideApp={false} 
            style={{
              overlay: {
                background:"black",
                opacity:"0.9"
              },
              content: {
                background:"black",
                position: 'absolute'
              }
            }}
            >
                <button className="xbtn" onClick={this.handleCloseModal}> X </button>

                {this.state.selectedVideo &&
                  <VideoDetail video={this.state.selectedVideo} /> }

            </ReactModal>
            </div>
            
           
          
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
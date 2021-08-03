import "./Home.css";
import Navbar from "../Navbar/Navbar";
import SchoolIcon from "@material-ui/icons/School";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import carousel1 from "../../Assets/carousel1.jpg";
import carousel2 from "../../Assets/carousel2.jpg";
import carousel3 from "../../Assets/carousel3.jpg";
import carousel4 from "../../Assets/carousel4.jpg";
import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed7 from "../../Assets/homefeed7.jpg";
import homefeed4 from "../../Assets/homefeed4.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import homefeed6 from "../../Assets/homefeed6.jpg";
import { useState, useEffect } from "react";
import youtube from "../../APIs/youtube";
import VideoItem from "../Youtube/videoitem";
import ReactModal from "react-modal";
import VideoDetail from "../Youtube/videodetail";

export default function Home({ handleOnLogout, user, term, setTerm, handleFormSubmit }) {
  const [selectedVideo, setSelectedVideo] = useState([null]);
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  const searchTerms = [
    "how to draw hands",
    "how to draw",
    "how to sketch",
    "how to draw concept art",
  ];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  // This gets a random element from the search terms array
  let myTerm = searchTerms[Math.floor(random(0, searchTerms.length)) - 1];
  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const response = await youtube.get("/search", {
          params: {
            q: myTerm,
          },
        });
        if (response?.data?.items) setVideos(response.data.items);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };
    fetchVideos();
  }, []);


    const handleCloseModal = () => {
      setSelectedVideo(null);
    }
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

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
    <div className="home">
      <Navbar user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm} handleFormSubmit={handleFormSubmit} />
      <div className="homeCarousel">
        <ul>
          <li>
            <img
              className="carouselImg"
              src={carousel1}
              alt=" homecarousel img 1"
            />
          </li>
          <li>
            <img
              className="carouselImg"
              src={carousel2}
              alt=" homecarousel img 2"
            />
          </li>
          <li>
            <img
              className="carouselImg"
              src={carousel3}
              alt=" homecarousel img 3"
            />
          </li>
          <li>
            <img
              className="carouselImg"
              src={carousel4}
              alt=" homecarousel img 4"
            />
          </li>
        </ul>
      </div>

      <div className="exploreTrendingLatest">
        <div className="feedBtns">
          <button
            className="feedExploreBtn"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1561839561-b13bcfe95249?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80" +
                ")",
              backgroundSize: "100%",
            }}
          >
            EXPLORE
          </button>
          <button
            className="feedTrendingBtn"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1572379371012-9e11bfc61b35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" +
                ")",
              backgroundSize: "100%",
            }}
          >
            TRENDING
          </button>
          <button
            className="feedLatestBtn"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1588260692965-2c90db1b8c0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" +
                ")",
              backgroundSize: "100%",
            }}
          >
            LATEST
          </button>
        </div>

        <div className="feed">
          <ul>
            <li>
              <img className="feedImg" src={homefeed1} alt=" home feed img 1" />
            </li>
            <li>
              <img className="feedImg" src={homefeed7} alt=" home feed img 2" />
            </li>
            <li>
              <img className="feedImg" src={homefeed4} alt=" home feed img 4" />
            </li>
            <li>
              <img className="feedImg" src={homefeed5} alt=" home feed img 5" />
            </li>
            <li>
              <img className="feedImg" src={homefeed6} alt=" home feed img 6" />
            </li>
          </ul>
        </div>

        <div className="newLearning">
          <h4>
            {" "}
            <SchoolIcon style={{ marginRight: "5px" }} /> NEW ON ARTHUB LEARNING
          </h4>
          <div className="container">
            
             <div className="eleven wide column" style={{ marginTop: "1200px" }}>

              <ReactModal
                
                isOpen={selectedVideo?.id}
                onRequestClose={handleCloseModal}
                ariaHideApp={false}
                style={{
                  overlay: {
                    background: "black",
                    opacity: "0.9",
                  },
                  content: {
                    background: "black",
                    position: "absolute",
                  },
                }}
              >
                <button className="xbtn" onClick={handleCloseModal}>
                  {" "}
                  X{" "}
                </button>

               {selectedVideo && (
                  <VideoDetail video={selectedVideo} />
                )} 
              </ReactModal>
            </div>

            <div className="list">
              <div className="items" style={{marginTop:"300px"}}>{renderedVideos}</div>
            </div>
          </div>
        </div>

        <div className="trendingMarket" style={{marginTop:"400px"}}>
          <h4>
            {" "}
            <ShoppingCartIcon style={{ marginRight: "5px" }} /> TRENDING ON THE
            MARKETPLACE
          </h4>
          <div className="container">
            <div className="marketContainer">
              <div className="marketImageContainer">
                <li>
                  <img
                    className="marketImg"
                    src={homefeed5}
                    alt=" home feed img 4"
                  />
                </li>
              </div>
              <div className="marketTitlePrice">
                <p className="marketTitle" style={{ textAlign: "left" }}>
                  {" "}
                  Art Piece No.1
                  <span className="marketPrice" style={{ float: "right" }}>
                    {" "}
                    $40{" "}
                  </span>
                </p>
              </div>
              <p className="marketAuthor">by Picasso</p>
              <div className="marketBlurb">
                <p className="marketRating" style={{ textAlign: "left" }}>
                  {" "}
                  &#11088; 4.3
                  <span className="marketBtn" style={{ float: "right" }}>
                    <ShoppingCartIcon style={{ fontSize: "20px" }} />{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="marketContainer">
              <div className="marketImageContainer">
                <li>
                  <img
                    className="marketImg"
                    src={homefeed1}
                    alt=" home feed img 2"
                  />
                </li>
              </div>
              <div className="marketTitlePrice">
                <p className="marketTitle" style={{ textAlign: "left" }}>
                  {" "}
                  Art Piece No.2
                  <span className="marketPrice" style={{ float: "right" }}>
                    {" "}
                    $120{" "}
                  </span>
                </p>
              </div>
              <p className="marketAuthor">by me</p>
              <div className="marketBlurb">
                <p className="marketRating" style={{ textAlign: "left" }}>
                  {" "}
                  &#11088; 5.0
                  <span className="marketBtn" style={{ float: "right" }}>
                    <ShoppingCartIcon style={{ fontSize: "20px" }} />{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="marketContainer">
              <div className="marketImageContainer">
                <li>
                  <img
                    className="marketImg"
                    src={homefeed7}
                    alt=" home feed img 2"
                  />
                </li>
              </div>
              <div className="marketTitlePrice">
                <p className="marketTitle" style={{ textAlign: "left" }}>
                  {" "}
                  Art Piece No.3
                  <span className="marketPrice" style={{ float: "right" }}>
                    {" "}
                    $10{" "}
                  </span>
                </p>
              </div>
              <p className="marketAuthor">by you</p>
              <div className="marketBlurb">
                <p className="marketRating" style={{ textAlign: "left" }}>
                  {" "}
                  &#11088; 2.9
                  <span className="marketBtn" style={{ float: "right" }}>
                    <ShoppingCartIcon style={{ fontSize: "20px" }} />{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="marketContainer">
              <div className="marketImageContainer">
                <li>
                  <img
                    className="marketImg"
                    src={homefeed6}
                    alt=" home feed img 2"
                  />
                </li>
              </div>
              <div className="marketTitlePrice">
                <p className="marketTitle" style={{ textAlign: "left" }}>
                  {" "}
                  Art Piece No.4
                  <span className="marketPrice" style={{ float: "right" }}>
                    {" "}
                    $300{" "}
                  </span>
                </p>
              </div>
              <p className="marketAuthor">by demo</p>
              <div className="marketBlurb">
                <p className="marketRating" style={{ textAlign: "left" }}>
                  {" "}
                  &#11088; 3.4
                  <span className="marketBtn" style={{ float: "right" }}>
                    <ShoppingCartIcon style={{ fontSize: "20px" }} />{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

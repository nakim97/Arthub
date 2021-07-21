import "./Explore.css";
import banner5 from "../../Assets/banner5.png";
import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed2 from "../../Assets/homefeed2.jpg";
import homefeed3 from "../../Assets/homefeed3.jpg";
import homefeed4 from "../../Assets/homefeed4.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import homefeed6 from "../../Assets/homefeed6.jpg";
import homefeed7 from "../../Assets/homefeed7.jpg";
import carousel1 from "../../Assets/carousel1.jpg";
import carousel2 from "../../Assets/carousel2.jpg";
import carousel3 from "../../Assets/carousel3.jpg";
import carousel4 from "../../Assets/carousel4.jpg";

import Navbar from "../Navbar/Navbar";

export default function Explore({user, setUser}) {
  return (
    <div className="explore">
      <Navbar user={user} setUser={setUser} />

      <div className="banner">
        <img
          className="bannerImg"
          src={banner5}
          alt="people standing on a mountain"
        />
        <div className="bannerText">
          <h4>EXPLORE</h4>
        </div>
      </div>

      <div className="exploreButtons">
        <div className="feedBtns">
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
      </div>

      <div className="container">
        <div className="gallery-container w-3 h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={homefeed1} alt="explore page image 1" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img src={homefeed7} alt="explore page image 7" />
            </div>
          </div>
        </div>

        <div className="gallery-container h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={homefeed5} alt="explore page image 5" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-2">
          <div className="gallery-item">
            <div className="image">
              <img src={homefeed6} alt="explore page image 6" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-4 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src={homefeed2} alt="explore page image 2" />
            </div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img src={homefeed3} alt="explore page image 3" />
            </div>
          </div>
        </div>

        <div className="gallery-container h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={homefeed4} alt="explore page image 4" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-3 h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={carousel1} alt="explore page carousel image 1" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-2 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src={carousel2} alt="explore page carousel image 2" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-2 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src={carousel4} alt="explore page carousel image 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

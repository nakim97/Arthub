import "./Explore.css";
import banner5 from "../../Assets/banner5.png";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import { useExplore } from "../../hooks/useExplore";

export default function Explore({ user, handleOnLogout, term, setTerm }) {
  const { myPosts } = useExplore({ user });

  return (
    <div className="explore">
      <Navbar
        user={user}
        handleOnLogout={handleOnLogout}
        term={term}
        setTerm={setTerm}
      />

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
        <div className="gallery-item">
          {myPosts.map((post) => (
            <div className="image1" key={post.photoPostId}>
              <Link to={`/post/${post.photoPostId}`}>
                <img
                  src={`${post.imgPostUrl}`}
                  alt={`Portfolio ${post.photoPostId}`}
                ></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

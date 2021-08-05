import "./ForumSearch.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useForumSearch } from "../../hooks/useForumSearch";

export default function ForumSearch({ user, handleOnLogout, term, setTerm, forumTerm }) {
  const { posts } = useForumSearch({ user, forumTerm });

  return (
    <div className="ForumSearch">
      <Navbar
        user={user}
        handleOnLogout={handleOnLogout}
        term={term}
        setTerm={setTerm}
      />
      <div className="Content">
        <h3 className="Title">Search Results</h3>
      </div>
      {posts.map((post, i) => (
        <div className="portfolio-posts" key={i}>
          <div className="portfolioImage">
            <Link to={`/post/${post.id}`}>
              <img
                className="portfolioImage"
                src={`${post.forum_img_url}`}
                alt={`Forum ${post.id}`}
              />
            </Link>
          </div>
          <div className="Forum" style={{ position: "relative" }}>
            <h4 className="portfolioTitle"> {post.forum_title}</h4>
            <p className="portfolioDescription"> {post.forum_description}</p>
            <p className="likeComments"></p>
          </div>
        </div>
      ))}
    </div>
  );
}

import "./CommunityNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import FilterListIcon from "@material-ui/icons/FilterList";

export default function CommunityNavbar({ forumTerm, setForumTerm }) {
  const navigate = useNavigate();
  // This redirects to the search page to display the posts
  const handleFormSubmit = async () => {
    navigate("/forumsearch");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(forumTerm);
  };

  const handleChange = (event) => {
    setForumTerm(event.target.value);
  };
  return (
    <nav className="communityNavbar">
      <div className="content">
        <div className="links">
          <li className="trending">Trending</li>
          <li className="latest">Latest</li>
        </div>
        <div className="search-bar">
          <form onSubmit={handleSubmit} className="form">
            <div className="field">
              <input
                onChange={handleChange}
                name="search"
                type="text"
                placeholder="Search.."
              />
            </div>
          </form>
        </div>

        <div className="filterBtn">
          <span
            className="filterIcon"
            style={{ display: "flex", textAlign: "center", flexWrap: "wrap" }}
          >
            <FilterListIcon />
          </span>
        </div>
      </div>
    </nav>
  );
}

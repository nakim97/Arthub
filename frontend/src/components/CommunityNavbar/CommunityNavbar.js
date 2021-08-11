import "./CommunityNavbar.css";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useCommunityNavbar } from "../../hooks/useCommunityNavbar";

export default function CommunityNavbar({ user, forumTerm, setForumTerm }) {
  const { handleSubmit, handleChange } = useCommunityNavbar({ forumTerm, setForumTerm });
  return (
    <nav className="communityNavbar">
      <div className="content">
       
        <div className="search-bar">
          <form onSubmit={handleSubmit} className="form">
            <div className="field">
              <input
                onChange={handleChange}
                name="search"
                type="text"
                placeholder="Search Forums..."
              />
            </div>
          </form>
        </div>

        
      </div>
    </nav>
  );
}

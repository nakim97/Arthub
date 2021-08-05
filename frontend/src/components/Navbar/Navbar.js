import "./Navbar.css";
import SubNavbar from "../SubNavbar/SubNavbar";
import BrushIcon from "@material-ui/icons/Brush";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ handleOnLogout, user, term, setTerm }) {

  const navigate = useNavigate();
  // This redirects to the search page to display the posts
  const handleFormSubmit = async () => {
    navigate("/search");
  };
  const isAuthenticated = Boolean(user?.email);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const icon = user?.profile_img_url == null || user?.profile_img_url == "null";
  const navIcon = icon ? (
    <>
      <AccountCircleIcon />
    </>
  ) : (
    <>
      <img
        className="bannerImg"
        src={`${user.profile_img_url}`}
        alt="My profile"
        style={{ height: "20px", width: "20px" }}
      />
    </>
  );
  const buttons = isAuthenticated ? (
    <>
      <ul className="links link-button">
        <Link to="/me" className="Link">
          <div className="userIcon">
            {navIcon}
            <li className="navRegister">Me</li>
          </div>
        </Link>
        <button className="navSignOut" onClick={handleOnLogout}>
          Sign out
        </button>
      </ul>
    </>
  ) : (
    <>
      <ul className="links">
        <Link to="/register" className="Link">
          <li className="navRegister">Sign Up</li>
        </Link>
        <Link to="/login" className="Link">
          <li className="navLogin">Sign In</li>
        </Link>
      </ul>
    </>
  );
  return (
    <div>
      <nav className="Navbar">
        <div className="content">
          <Link to="/" className="Link">
            <div className="logo">
              <BrushIcon style={{ fontSize: 30 }} />
            </div>
          </Link>
          <div className="search-bar">
            <form onSubmit={handleSubmit} className="form">
              <div className="field">
                <input
                  onChange={handleChange}
                  name="search"
                  type="text"
                  placeholder="Search Posts..."
                />
              </div>
            </form>
          </div>

          {/* If we are logged in, render the logout, otherwise use the normal buttons */}
          {/* This renders the buttons above */}
          {buttons}
        </div>
      </nav>
      <div>
        <SubNavbar />
      </div>
    </div>
  );
}

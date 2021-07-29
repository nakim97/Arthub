import "./Navbar.css";
import SubNavbar from "../SubNavbar/SubNavbar";
import BrushIcon from "@material-ui/icons/Brush";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

export default function Navbar({ handleOnLogout, user }) {
  // If the boolean is true, the user exists
  const isAuthenticated = Boolean(user?.email);
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
            {/* <AccountCircleIcon /> */}
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
              <BrushIcon style={{ fontSize: 30, position:"fixed"}} />
            </div>
          </Link>
          <div className="search-bar">
            <input type="text" name="search" placeholder="Search..." />
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

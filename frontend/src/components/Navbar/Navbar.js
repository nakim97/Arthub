import "./Navbar.css";
import SubNavbar from "../SubNavbar/SubNavbar";
import BrushIcon from "@material-ui/icons/Brush";
import { Link } from "react-router-dom";

export default function Navbar({handleOnLogout, user}) {
  const isAuthenticated = Boolean(user?.email);
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
            <input type="text" name="search" placeholder="Search..." />
          </div>
          {/* If we are logged in, render the logout, otherwise use the normal buttons */}
      {/* <div className="buttons">{buttons}</div> */}
          <ul className="links">
            <Link to="/register" className="Link">
              <li className="navRegister">Sign Up</li>
            </Link>
            <Link to="/login" className="Link">
              <li className="navLogin">Sign In</li>
            </Link>
          </ul>
        </div>
      </nav>
      <div>
        <SubNavbar />
      </div>
    </div>
  );
}

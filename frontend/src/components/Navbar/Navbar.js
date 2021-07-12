import "./Navbar.css";
import SubNavbar from "../SubNavbar/SubNavbar";
import BrushIcon from "@material-ui/icons/Brush";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <div className="content">
          <div className="logo">
            <BrushIcon style={{ fontSize: 40 }} />
          </div>
          <div className="search-bar">
            <input type="text" name="search" placeholder="Search..." />
          </div>
          <ul className="links">
            <Link to="/register">
              <li className="navRegister">Sign Up</li>
            </Link>
            <Link to="/login">
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

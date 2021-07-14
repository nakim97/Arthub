import "./Navbar.css";
import SubNavbar from "../SubNavbar/SubNavbar";
import BrushIcon from "@material-ui/icons/Brush";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <div className="content">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className="logo">
              <BrushIcon style={{ fontSize: 30 }} />
            </div>
          </Link>
          <div className="search-bar">
            <input type="text" name="search" placeholder="Search..." />
          </div>
          <ul className="links">
            <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <li className="navRegister">Sign Up</li>
            </Link>
            <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
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

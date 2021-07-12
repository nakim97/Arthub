import "./Navbar.css";
import SubNavbar from "../SubNavbar/SubNavbar";
import BrushIcon from "@material-ui/icons/Brush";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
       <nav>
           <div className="content">
                <div className="logo">
                    <BrushIcon style={{ fontSize: 40 }}/>
                 </div>

                 <div className="search-bar">
                    <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    />
                </div>
                <ul className="links">
                    <li className="navRegister">
                        Sign Up
                    </li>
                    <li className="navLogin">
                        Sign In
                    </li>
                </ul>
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
        </nav>
      <div>
      </div>
        <SubNavbar />
      </div>
  );
}

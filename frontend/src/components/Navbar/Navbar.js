import "./Navbar.css";
import SubNavbar from "../SubNavbar/SubNavbar";
import BrushIcon from "@material-ui/icons/Brush";
import { Link } from "react-router-dom";
import { useNavbar } from "../../hooks/useNavbar";
import Logo from "../../Assets/Logo.png";

export default function Navbar({ handleOnLogout, user, term, setTerm }) {
  const { buttons, handleChange, handleSubmit } = useNavbar({
    handleOnLogout,
    user,
    term,
    setTerm,
  });

  return (
    <div>
      <nav className="Navbar">
        <div className="content">
          <Link to="/" className="Link">
            <div className="logo">
              <img src={Logo} />
              {/* <BrushIcon style={{ fontSize: 30 }} /> */}
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

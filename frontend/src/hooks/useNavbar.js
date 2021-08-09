import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const useNavbar = ({ user, handleOnLogout, term, setTerm }) => {
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
        className="navBannerImg"
        src={`${user.profile_img_url}`}
        alt="My profile"
        style={{ height: "30px", width: "30px" }}
      />
    </>
  );
  const buttons = isAuthenticated ? (
    <>
      <ul className="links link-button">
        <Link to="/me" className="Link">
          <div className="userIcon">
            {navIcon}
            <li className="navRegister">Profile</li>
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

  return {
    buttons,
    handleChange,
    handleSubmit,
  };
};

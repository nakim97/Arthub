import "./SubNavbar.css";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import ExploreIcon from "@material-ui/icons/Explore";
import SchoolIcon from "@material-ui/icons/School";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ForumIcon from "@material-ui/icons/Forum";
import { Link } from "react-router-dom";

export default function SubNavbar() {
  return (
    <nav className="subNavbar">
      <div className="content">
        <ul className="links">
          <Link
            to="/about"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <li className="subNavLink">
              {" "}
              <BubbleChartIcon style={{ marginRight: "5px" }} /> ABOUT
            </li>
          </Link>
          <Link
            to="/explore"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <li className="subNavLink">
              {" "}
              <ExploreIcon style={{ marginRight: "5px" }} /> EXPLORE
            </li>
          </Link>
          <Link
            to="/learning"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <li className="subNavLink">
              {" "}
              <SchoolIcon style={{ marginRight: "5px" }} /> LEARNING
            </li>
          </Link>
          <Link
            to="/market"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <li className="subNavLink">
              {" "}
              <ShoppingCartIcon style={{ marginRight: "5px" }} /> MARKETPLACE
            </li>
          </Link>
          <Link
            to="/community"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <li className="subNavLink">
              {" "}
              <ForumIcon style={{ marginRight: "5px" }} /> COMMUNITY
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

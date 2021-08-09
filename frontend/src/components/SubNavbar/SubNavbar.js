import "./SubNavbar.css";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import ExploreIcon from "@material-ui/icons/Explore";
import SchoolIcon from "@material-ui/icons/School";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ForumIcon from "@material-ui/icons/Forum";
import { NavLink } from "react-router-dom";

export default function SubNavbar() {
  return (
    <nav className="subNavbar">
      <div className="content">
        <ul className="links">
          <div className="l1">
            <NavLink
              to="/about"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                borderRight: "solid",
              }}
              className="subNav"
              activeClassName="subNav-active"
            >
              <li className="subNavLink1">
                {" "}
                <BubbleChartIcon style={{ marginRight: "5px" }} /> ABOUT
              </li>
            </NavLink>
          </div>

          <div className="l2">
            <NavLink
              to="/explore"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                borderRight: "solid",
              }}
              className="subNav"
              activeClassName="subNav-active"
            >
              <li className="subNavLink2">
                {" "}
                <ExploreIcon style={{ marginRight: "5px" }} /> EXPLORE
              </li>
            </NavLink>
          </div>

          <div className="l3">
            <NavLink
              to="/learning"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                borderRight: "solid",
              }}
              className="subNav"
              activeClassName="subNav-active"
            >
              <li className="subNavLink3">
                {" "}
                <SchoolIcon style={{ marginRight: "5px" }} /> LEARNING
              </li>
            </NavLink>
          </div>

          <div className="l4">
            <NavLink
              to="/market"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                borderRight: "solid",
              }}
              className="subNav"
              activeClassName="subNav-active"
            >
              <li className="subNavLink4">
                {" "}
                <ShoppingCartIcon style={{ marginRight: "5px" }} /> MARKETPLACE
              </li>
            </NavLink>
          </div>

          <div className="l5">
            <NavLink
              to="/community"
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
              className="subNav"
              activeClassName="subNav-active"
            >
              <li className="subNavLink5">
                {" "}
                <ForumIcon style={{ marginRight: "5px" }} /> COMMUNITY
              </li>
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
}

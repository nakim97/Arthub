import "./SubNavbar.css";
import React, { useState } from "react";
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
          <div className="l1">
            <Link
              to="/about"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                borderRight: "solid",
                // borderLeft: "solid",
              }}
            >
              <li className="subNavLink1">
                {" "}
                <BubbleChartIcon style={{ marginRight: "5px" }} /> ABOUT
              </li>
            </Link>
          </div>

          <div className="l2">
            <Link
              to="/explore"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                borderRight: "solid",
                // borderLeft: "solid",
              }}
            >
              <li className="subNavLink2">
                {" "}
                <ExploreIcon style={{ marginRight: "5px" }} /> EXPLORE
              </li>
            </Link>
          </div>

          <div className="l3">
            <Link
              to="/learning"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                borderRight: "solid",
                // borderLeft: "solid",
              }}
            >
              <li className="subNavLink3">
                {" "}
                <SchoolIcon style={{ marginRight: "5px" }} /> LEARNING
              </li>
            </Link>
          </div>

          <div className="l4">
            <Link
              to="/market"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                borderRight: "solid",
                // borderLeft: "solid",
              }}
            >
              <li className="subNavLink4">
                {" "}
                <ShoppingCartIcon style={{ marginRight: "5px" }} /> MARKETPLACE
              </li>
            </Link>
          </div>

          <div className="l5">
            <Link
              to="/community"
              style={{
                color: "inherit",
                textDecoration: "inherit",
                // borderRight: "solid",
                // borderLeft: "solid",
              }}
            >
              <li className="subNavLink5">
                {" "}
                <ForumIcon style={{ marginRight: "5px" }} /> COMMUNITY
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}

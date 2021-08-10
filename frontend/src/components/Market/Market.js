import "./Market.css";
import marketbanner from "../../Assets/marketbanner.jpg";
import Navbar from "../Navbar/Navbar";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FilterListIcon from "@material-ui/icons/FilterList";
import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed7 from "../../Assets/homefeed7.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import homefeed6 from "../../Assets/homefeed6.jpg";

export default function Market({ user, handleOnLogout, term, setTerm }) {
  return (
    <div className="market">
      <Navbar user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}   />
      <div className="banner" style={{ backgroundImage: `url(${marketbanner})`}}>
        <div className="bannerSearch" >
          <h4> ARTHUB MARKETPLACE </h4>
          <h1>UNDER CONSTRUCTION</h1>
          <div className="bar">
            <div></div>
           
          </div>
          <div class="percentage">
              <span> 0% </span>
              <span> 50%</span>
              <span> 100% </span>
            </div>
        </div>
      </div>

      <div className="trendingMarket">
        <div className="marketTags" style={{marginTop:"50px"}}>
          <button className="marketTrending"> TRENDING</button>
          <button className="marketLatest"> LATEST </button>
          <span className="filterIcon">
            <FilterListIcon />
          </span>
        </div>

        <div className="container">
          <div className="marketContainer">
            <div className="marketImageContainer">
              <li>
                <img
                  className="marketImg"
                  src={homefeed5}
                  alt=" home feed img 4"
                />
              </li>
            </div>
            <div className="marketTitlePrice">
              <p className="marketTitle" style={{ textAlign: "left" }}>
                {" "}
                Art Piece No.1
                <span className="marketPrice" style={{ float: "right" }}>
                  {" "}
                  $40{" "}
                </span>
              </p>
            </div>
            <p className="marketAuthor">by Picasso</p>
            <div className="marketBlurb">
              <p className="marketRating" style={{ textAlign: "left" }}>
                {" "}
                &#11088; 4.3
                <span className="marketBtn" style={{ float: "right" }}>
                  <ShoppingCartIcon style={{ fontSize: "20px" }} />{" "}
                </span>
              </p>
            </div>
          </div>

          <div className="marketContainer">
            <div className="marketImageContainer">
              <li>
                <img
                  className="marketImg"
                  src={homefeed1}
                  alt=" home feed img 2"
                />
              </li>
            </div>
            <div className="marketTitlePrice">
              <p className="marketTitle" style={{ textAlign: "left" }}>
                {" "}
                Art Piece No.2
                <span className="marketPrice" style={{ float: "right" }}>
                  {" "}
                  $120{" "}
                </span>
              </p>
            </div>
            <p className="marketAuthor">by me</p>
            <div className="marketBlurb">
              <p className="marketRating" style={{ textAlign: "left" }}>
                {" "}
                &#11088; 5.0
                <span className="marketBtn" style={{ float: "right" }}>
                  <ShoppingCartIcon style={{ fontSize: "20px" }} />{" "}
                </span>
              </p>
            </div>
          </div>

          <div className="marketContainer">
            <div className="marketImageContainer">
              <li>
                <img
                  className="marketImg"
                  src={homefeed7}
                  alt=" home feed img 2"
                />
              </li>
            </div>
            <div className="marketTitlePrice">
              <p className="marketTitle" style={{ textAlign: "left" }}>
                {" "}
                Art Piece No.3
                <span className="marketPrice" style={{ float: "right" }}>
                  {" "}
                  $10{" "}
                </span>
              </p>
            </div>
            <p className="marketAuthor">by you</p>
            <div className="marketBlurb">
              <p className="marketRating" style={{ textAlign: "left" }}>
                {" "}
                &#11088; 2.9
                <span className="marketBtn" style={{ float: "right" }}>
                  <ShoppingCartIcon style={{ fontSize: "20px" }} />{" "}
                </span>
              </p>
            </div>
          </div>

          <div className="marketContainer">
            <div className="marketImageContainer">
              <li>
                <img
                  className="marketImg"
                  src={homefeed6}
                  alt=" home feed img 2"
                />
              </li>
            </div>
            <div className="marketTitlePrice">
              <p className="marketTitle" style={{ textAlign: "left" }}>
                {" "}
                Art Piece No.4
                <span className="marketPrice" style={{ float: "right" }}>
                  {" "}
                  $300{" "}
                </span>
              </p>
            </div>
            <p className="marketAuthor">by demo</p>
            <div className="marketBlurb">
              <p className="marketRating" style={{ textAlign: "left" }}>
                {" "}
                &#11088; 3.4
                <span className="marketBtn" style={{ float: "right" }}>
                  <ShoppingCartIcon style={{ fontSize: "20px" }} />{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

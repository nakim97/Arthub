import "./Home.css";
import Navbar from "../Navbar/Navbar";
import SchoolIcon from "@material-ui/icons/School";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed7 from "../../Assets/homefeed7.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import homefeed6 from "../../Assets/homefeed6.jpg";
import ForumIcon from "@material-ui/icons/Forum";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ReactModal from "react-modal";
import VideoDetail from "../Youtube/videodetail";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { useHome } from "../../hooks/useHome";

export default function Home({ handleOnLogout, user, term, setTerm }) {
  const {
    renderedVideos,
    responsive,
    myPostsT,
    selectedVideo,
    handleCloseModal,
    myPostsF,
  } = useHome({ user });
  return (
    <div className="home">
      <Navbar
        user={user}
        handleOnLogout={handleOnLogout}
        term={term}
        setTerm={setTerm}
      />
      <div className="homeCarousel">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-0-px"
        >
          {myPostsT.map((post) => (
            <div className="listing" key={post.photoPostId}>
              <Link to={`/post/${post.photoPostId}`}>
                <img
                  className="carouselImg"
                  src={`${post.imgPostUrl}`}
                  alt={`homecarousel ${post.photoPostId}`}
                />
              </Link>
            </div>
          ))}
        </Carousel>
        ;
      </div>

      <div className="exploreTrendingLatest">
        <div className="newLearning">
          <h4 style={{ marginBottom: "-250px", marginTop: "-50px" }}>
            {" "}
            <SchoolIcon style={{ marginRight: "5px" }} /> NEW ON ARTHUB LEARNING
          </h4>
          <div className="container">
            <div className="eleven wide column">
              <ReactModal
                isOpen={selectedVideo?.id}
                onRequestClose={handleCloseModal}
                ariaHideApp={false}
                style={{
                  overlay: {
                    background: "black",
                    opacity: "0.9",
                  },
                  content: {
                    background: "black",
                    position: "absolute",
                  },
                }}
              >
                <button className="xbtn" onClick={handleCloseModal}>
                  {" "}
                  X{" "}
                </button>

                {selectedVideo && <VideoDetail video={selectedVideo} />}
              </ReactModal>
            </div>

            <div className="list">
              <div className="items" style={{ marginTop: "100px" }}>
                {renderedVideos}
              </div>
            </div>
          </div>
        </div>

        <div className="trendingMarket" style={{ marginTop: "100px" }}>
          <h4>
            {" "}
            <ShoppingCartIcon style={{ marginRight: "5px" }} /> TRENDING ON THE
            MARKETPLACE
          </h4>
          <div className="container">
            <div className="marketContainer">
              <div className="marketImageContainer">
                <img
                  className="marketImg"
                  src={homefeed5}
                  alt=" home feed img 4"
                />
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
                <img
                  className="marketImg"
                  src={homefeed1}
                  alt=" home feed img 2"
                />
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
                <img
                  className="marketImg"
                  src={homefeed7}
                  alt=" home feed img 2"
                />
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
                <img
                  className="marketImg"
                  src={homefeed6}
                  alt=" home feed img 2"
                />
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

        <div className="communityContainers">
          <h4 className="communityhomeTitle">
            {" "}
            <ForumIcon style={{ marginRight: "5px" }} /> TRENDING ON COMMUNITY
            FORUMS
          </h4>
          <div className="container">
            {myPostsF.map((post) => {
              // Return a banner img in the forum
              const forumImg =
                post.imgPostUrl == null || post.imgPostUrl == "null";
              const community_img = forumImg ? (
                <>
                  {/* Return default image */}
                  <img
                    className="communityImg"
                    src={homefeed6}
                    alt="community"
                  />
                </>
              ) : (
                <>
                  {/* Use our own image */}
                  <img
                    className="communityImg"
                    src={`${post.imgPostUrl}`}
                    alt={`homecarousel ${post.forumPostId}`}
                  />
                </>
              );
              var dateNew = new Date(post.forumCreatedAt);
              var options = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false,
                timeZone: "America/Los_Angeles",
              };
              var date = new Intl.DateTimeFormat("default", options).format(
                dateNew
              );
              return (
                <div className="communityContainer" key={post.forumPostId}>
                  <div className="communityImageContainer">
                    <li>
                      <Link to={`/forum/${post.forumPostId}`}>
                        {community_img}
                      </Link>
                    </li>
                  </div>

                  <div className="communityTags">
                    <p className="communityTag" style={{ textAlign: "left" }}>
                      {" "}
                      <span
                        className="communityTime"
                        style={{ float: "right" }}
                      >
                        {date}
                      </span>
                    </p>

                    <p className="communityTitle" style={{ textAlign: "left" }}>
                      {" "}
                      {post.forumTitle}
                    </p>
                  </div>
                  <p className="communityAuthor" style={{ textAlign: "left" }}>
                    by {post.username}
                  </p>
                  <div className="communityBlurb">
                    <span className="communityBtn" style={{ float: "right" }}>
                      <ThumbUpIcon style={{ fontSize: "15px" }} />{" "}
                      <QuestionAnswerIcon style={{ fontSize: "15px" }} />{" "}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

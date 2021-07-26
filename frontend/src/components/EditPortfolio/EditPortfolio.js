import "./EditPortfolio.css";
import Navbar from "../Navbar/Navbar";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed7 from "../../Assets/homefeed7.jpg";
import homefeed4 from "../../Assets/homefeed4.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import { useUserProfile } from "../../hooks/useUserProfile";

export default function EditPortfolio({ user, handleOnLogout }) {
    const { myName, username, posts, userInfo } = useUserProfile({ user });
    //Unauthenticated view
  if (!user.email) {
    return (
      <div className="total">
        <Navbar user={user} handleOnLogout={handleOnLogout} />
        <div className="title">
          <h2>You must be logged in to view your profile.</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="EditPortfolio">
      <Navbar user={user} handleOnLogout={handleOnLogout} />
      <div className="content">
        <h3 className="title">Edit Your Portfolio</h3>
      </div>
      <div className="portfolioposts">
      {posts.map((post) => (
          <div className="image" key={post.photoPostId}>
            {/* <Link to={`/posts/${post.photoPostId}`}> */}
            <img src={`${post.imgPostUrl}`} alt={`Portfolio ${post.photoPostId}`} ></img>
          </div>
        ))}
                            <div className="portfolioImg">
                            <img
                                className="portfolioImg"
                                src={homefeed1}
                                alt=" home feed img 4"
                            />
                            </div>
                            <div className="post" style={{ position: "relative" }}>
                            <h4 className="portfolioTitle">
                                {" "}
                                Art Piece in Progress, any advice?
                            </h4>
                            <p className="portfolioDescription"> Description</p>
                            <p
                                className="likeComments"
                                style={{
                                textAlign: "right",
                                position: "absolute",
                                bottom: "0",
                                right: "0",
                                marginRight: "10px",
                                }}
                            >
                                {" "}
                                <EditIcon style={{ fontSize: "20px" }} />{" "}
                                <DeleteIcon style={{ fontSize: "20px", marginLeft: "10px" }} />{" "}
                            </p>
                            </div>
      </div>

      <div className="portfolioposts">
        <div className="portfolioImg">
          <img
            className="portfolioImg"
            src={homefeed7}
            alt=" home feed img 4"
          />
        </div>
        <div className="post" style={{ position: "relative" }}>
          <h4 className="portfolioTitle">
            {" "}
            Art Piece in Progress, any advice?
          </h4>
          <p className="portfolioDescription"> Description</p>
          <p
            className="likeComments"
            style={{
              textAlign: "right",
              position: "absolute",
              bottom: "0",
              right: "0",
              marginRight: "10px",
            }}
          >
            {" "}
            <EditIcon style={{ fontSize: "20px" }} />{" "}
            <DeleteIcon style={{ fontSize: "20px", marginLeft: "10px" }} />{" "}
          </p>
        </div>
      </div>

      <div className="portfolioposts">
        <div className="portfolioImg">
          <img
            className="portfolioImg"
            src={homefeed4}
            alt=" home feed img 4"
          />
        </div>
        <div className="post" style={{ position: "relative" }}>
          <h4 className="portfolioTitle">
            {" "}
            Art Piece in Progress, any advice?
          </h4>
          <p className="portfolioDescription"> Description</p>
          <p
            className="likeComments"
            style={{
              textAlign: "right",
              position: "absolute",
              bottom: "0",
              right: "0",
              marginRight: "10px",
            }}
          >
            {" "}
            <EditIcon style={{ fontSize: "20px" }} />{" "}
            <DeleteIcon style={{ fontSize: "20px", marginLeft: "10px" }} />{" "}
          </p>
        </div>
      </div>

      <div className="portfolioposts">
        <div className="portfolioImg">
          <img
            className="portfolioImg"
            src={homefeed5}
            alt=" home feed img 4"
          />
        </div>
        <div className="post" style={{ position: "relative" }}>
          <h4 className="portfolioTitle">
            {" "}
            Art Piece in Progress, any advice?
          </h4>
          <p className="portfolioDescription"> Description</p>
          <p
            className="likeComments"
            style={{
              textAlign: "right",
              position: "absolute",
              bottom: "0",
              right: "0",
              marginRight: "10px",
            }}
          >
            {" "}
            <EditIcon style={{ fontSize: "20px" }} />{" "}
            <DeleteIcon style={{ fontSize: "20px", marginLeft: "10px" }} />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

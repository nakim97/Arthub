import "./EditPortfolio.css";
import Navbar from "../Navbar/Navbar";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed7 from "../../Assets/homefeed7.jpg";
import homefeed4 from "../../Assets/homefeed4.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import { useUserProfile } from "../../hooks/useUserProfile";

export default function EditPortfolio({ user, handleOnLogout }) {
  const { myName, username, posts } = useUserProfile({ user });
  //Unauthenticated view
  if (!user.email) {
    return (
      <div className="total">
        <Navbar user={user} handleOnLogout={handleOnLogout} />
        <div className="title">
          <h2>You must be logged in to view your portfolio posts.</h2>
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
      {posts.map((post) => (
        <div className="portfolioposts" key={post.photoPostId}>
          <div className="portfolioImg">
            <Link to={`/post/${post.photoPostId}`}>
              <img
                className="portfolioImg"
                src={`${post.imgPostUrl}`}
                alt={`Post ${post.photoPostId}`}
              />
            </Link>
          </div>
          <div className="post" style={{ position: "relative" }}>
            <h4 className="portfolioTitle"> {post.postTitle}</h4>
            <p className="portfolioDescription"> {post.postDescription}</p>
            <p className="likeComments">
              {" "}
              {/* <EditIcon style={{ fontSize: "20px" }} />{" "} */}
              <button className="clear">
                <DeleteIcon className="icon" />{" "}
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

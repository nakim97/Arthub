import "./PostSearch.css";
import Navbar from "../Navbar/Navbar";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { usePostSearch } from "../../hooks/usePostSearch";

export default function PostSearch({ user, handleOnLogout, term, setTerm}) {
  const { posts } = usePostSearch({ user, term });

//   //Unauthenticated view
//   if (!user.email) {
//     return (
//       <div className="total">
//         <Navbar user={user} handleOnLogout={handleOnLogout} />
//         <div className="title">
//           <h2>You must be logged in to view your portfolio posts.</h2>
//         </div>
//       </div>
//     );
//   }
  return (
    <div className="PostSearch">
      <Navbar user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}   />
      <div className="Content">
        <h3 className="Title">Edit Your Portfolio</h3>
      </div>
      {posts.map((post, i) => (
        <div className="portfolio-posts" key={i}>
          <div className="portfolioImage">
            <Link to={`/post/${post.id}`}>
              <img
                className="portfolioImage"
                src={`${post.post_img_url}`}
                alt={`Post ${post.id}`}
              />
            </Link>
          </div>
          <div className="Post" style={{ position: "relative" }}>
            <h4 className="portfolioTitle"> {post.post_title}</h4>
            <p className="portfolioDescription"> {post.post_description}</p>
            <p className="likeComments">
              {" "}
              {/* <EditIcon style={{ fontSize: "20px" }} />{" "} */}
              {/* <button
                className="clear"
                onClick={() => handleDelete(post.photoPostId)}
              >
                <DeleteIcon className="icon" />{" "}
              </button> */}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

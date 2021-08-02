import "./Learning.css";

import learningbanner from "../../Assets/learningbanner.jpg";
import Navbar from "../Navbar/Navbar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import YouTube from "../Youtube/youtube";

export default function Learning({ user, handleOnLogout }) {
  return (
    <div className="learning">
      <Navbar user={user} handleOnLogout={handleOnLogout} />

      <div
        className="banner"
        style={{ backgroundImage: `url(${learningbanner})` }}
      >
        <YouTube />

        <div className="bannerSearch">
          <h4> EMPOWER YOURSELF</h4>
        </div>
      </div>

      <div className="learningTags">
        <div className="learningBtns">
          <button
            className="learningBtn"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" +
                ")",
              backgroundSize: "100%",
            }}
          >
            All
          </button>
          <button
            className="learningBtn1"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" +
                ")",
              backgroundSize: "100%",
            }}
          >
            Ink{" "}
          </button>
          <button
            className="learningBtn2"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" +
                ")",
              backgroundSize: "100%",
            }}
          >
            Sketching
          </button>
          <button
            className="learningBtn3"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" +
                ")",
              backgroundSize: "100%",
            }}
          >
            Illustration
          </button>
          <button
            className="learningBtn4"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1567360425618-1594206637d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" +
                ")",
              backgroundSize: "100%",
            }}
          >
            Animation{" "}
          </button>
          <button
            className="learningBtn5"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1519933045055-2e2d61a64bcf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" +
                ")",
              backgroundSize: "100%",
            }}
          >
            Painting{" "}
          </button>
          <span className="filterIcon">
            {" "}
            <ExpandMoreIcon style={{ fontSize: "30px" }} />
          </span>
        </div>
      </div>

      <div className="newLearning">
        <h4 style={{ marginBottom: "100px" }}>Search Results</h4>
      </div>
    </div>
  );
}

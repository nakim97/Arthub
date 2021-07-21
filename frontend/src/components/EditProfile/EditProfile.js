import "./EditProfile.css";
import Navbar from "../Navbar/Navbar";
import formDes from "./form.js";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";
import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed2 from "../../Assets/homefeed2.jpg";
import homefeed3 from "../../Assets/homefeed3.jpg";
import homefeed4 from "../../Assets/homefeed4.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import homefeed6 from "../../Assets/homefeed6.jpg";

export default function editProfile() {
  return (
    <div className="user">
      <Navbar />

      <div className="userInfo">
        <div className="profilePic">
          <img className="bannerImg" src={person2} alt="user profile picture" />
        </div>
        <div className="nameInfo">
          <div className="name">
            <p>John Smith</p>
            <div className="username">
              <p>John_S23</p>
            </div>
          </div>
        </div>
      </div>

      <div className="uploadButn">
        <button>Upload</button>
      </div>

      <div className="description">
        <h3>Biliograpghy</h3>
      </div>

      <div className="textSpace">
        <textarea id="w3review" name="w3review" rows="4" cols="120">
         
        </textarea>
      </div>
      <div className="submitButn">
        <input type="submit" value="Submit" />
      </div>
      <div className="banner">
        <p>Banner Image: </p>
        <img
          className="bannerImg"
          src={userBanner}
          alt="people standing on a mountain"
        />
      </div>

      <div className="uploadButn2">
        <button>Upload</button>
      </div>

      <div className="SaveCancel">
        <div className="cancelButn">
          <button>Cancel</button>
        </div>
        <div className="saveButn">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

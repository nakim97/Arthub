import "./EditProfile.css";
import Navbar from "../Navbar/Navbar";
import userBanner from "../../Assets/userBanner.png";
import person2 from "../../Assets/person2.png";
import { useEditProfile } from "../../hooks/useEditProfile";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useImageUpload } from "../../hooks/useImageUpload";
import { useImageUploadS } from "../../hooks/useImageUploadS";
import ImageUpload from "../ImageUpload/ImageUpload";
import { Link } from "react-router-dom";

export default function EditProfile({ user, handleOnLogout }) {
  const { isProcessing, form, errors, handleOnSubmit, handleOnInputChange } =
    useEditProfile({ user });
    const { handleImageUpload, openWidget, imageUrl, imageAlt } =
    useImageUpload();
    const { handleImageUpload1, openWidget1, imageUrl2, imageAlt2 } =
    useImageUploadS();
  // console.log(form.name);
  return (
    <div className="user">
      <Navbar user={user} handleOnLogout={handleOnLogout} />
      {errors.form && <span className="error">{errors.form}</span>}
      <br />
      <div className="userInfo">
        {/* Change this to image comp */}
        {/* <div className="profilePic">
          <img className="bannerImg" src={person2} alt="user profile picture" />
        </div> */}
        {/* <ImageUpload
            handleImageUpload={handleImageUpload}
            openWidget={openWidget}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            name={"Picture"}
          /> */}

        <div className="nameInfo">
          <div className="name">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              placeholder="Jane Doe"
              value={form.name}
              onChange={handleOnInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="username">
            <label htmlFor="name" style={{paddingRight: "5px"}}>Username</label>
            <input
              type="text"
              name="userName"
              placeholder="Jane Doe"
              value={form.userName}
              onChange={handleOnInputChange}
            />
            {errors.userName && <span className="error">{errors.userName}</span>}
            </div>
          
        </div>

        <div className="socialMediaEdit">
          <div className="media">
            <div className="Instagram">
              <InstagramIcon />
              <input
                type="text"
                name="instagramUrl"
                placeholder="Your Instagram url"
                value={form.instagramUrl}
                onChange={handleOnInputChange}
              />
              {errors.instagramUrl && (
                <span className="error">{errors.instagramUrl}</span>
              )}
            </div>
            <div className="Facebook">
              <FacebookIcon />
              <input
                type="text"
                name="facebookUrl"
                placeholder="Your Facebook url"
                value={form.facebookUrl}
                onChange={handleOnInputChange}
              />
              {errors.facebookUrl && (
                <span className="error">{errors.facebookUrl}</span>
              )}
            </div>
            <div className="Twitter">
              <TwitterIcon />
              <input
                type="text"
                name="twitterUrl"
                placeholder="Your Twitter url"
                value={form.twitterUrl}
                onChange={handleOnInputChange}
              />
              {errors.twitterUrl && (
                <span className="error">{errors.twitterUrl}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <ImageUpload
            handleImageUpload={handleImageUpload}
            openWidget={openWidget}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            name={"Profile picture"}
          />

      <div className="description">
        <h3>Bibliography</h3>
      </div>

      <div className="textSpace">
      <input
                type="text"
                name="biography"
                placeholder="Your Biography"
                value={form.biography}
                onChange={handleOnInputChange}
              />
              {errors.biography && (
                <span className="error">{errors.biography}</span>
              )}
        {/* <textarea id="w3review" name="w3review" rows="4" cols="120"></textarea> */}
      </div>
      {/* <div className="submitButn">
        <input type="submit" value="Submit" />
      </div> */}
      {/* Image Upload */}
      {/* <div className="banner">
        <p>Banner Image: </p>
        <img
          className="bannerImg"
          src={userBanner}
          alt="people standing on a mountain"
        />
      </div>

      <div className="uploadButn2">
        <button>Upload</button>
      </div> */}
      <ImageUpload
            handleImageUpload={handleImageUpload1}
            openWidget={openWidget1}
            imageUrl={imageUrl2}
            imageAlt={imageAlt2}
            name={"Banner picture"}
          />

<div className="SaveCancel">
        <button className="cancel">
          <Link to="/me">Cancel</Link>
        </button>

        <button
          className="submit"
          disabled={isProcessing }
          onClick={handleOnSubmit}
        >
          <Link to="/me">{isProcessing ? "Loading..." : "Submit"}</Link>
        </button>
      </div>
      {/* <div className="SaveCancel">
        <div className="cancelButn">
          <button>Cancel</button>
        </div>
        <div className="saveButn">
          <button>Save</button>
        </div>
      </div> */}
    </div>
  );
}

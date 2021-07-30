import "./EditProfile.css";
import Navbar from "../Navbar/Navbar";
import { useEditProfile } from "../../hooks/useEditProfile";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useImageUpload } from "../../hooks/useImageUpload";
import { useImageUploadS } from "../../hooks/useImageUploadS";
import ImageUpload from "../ImageUpload/ImageUpload";
import ImageUploadS from "../ImageUploadS/ImageUploadS";
import { Link } from "react-router-dom";

export default function EditProfile({ user, setUser, handleOnLogout }) {
  
  const { handleImageUpload, openWidget, imageUrl, imageAlt } =
    useImageUpload();
  const { handleImageUpload1, openWidget1, imageUrl2, imageAlt2 } =
    useImageUploadS();
    const { isProcessing, form, errors, handleOnSubmit, handleOnInputChange } =
    useEditProfile({ user, setUser, imageUrl, imageUrl2 });
  // console.log(form.name);
  return (
    <div className="user">
      <Navbar user={user} handleOnLogout={handleOnLogout} />
      {errors.form && <span className="error">{errors.form}</span>}
      <br />
      <div className="userInfo">
        <div className="nameInfo">
          <div className="name">
            <div className="N1">
              <label htmlFor="name">Name </label>
            </div>
            <div className="N2">
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleOnInputChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          </div>
          <div className="username">
            <div className="U1">
              <label htmlFor="username">Username</label>
            </div>
            <div className="U2">
              <input
                type="text"
                name="userName"
                placeholder="Jane Doe"
                value={form.userName}
                onChange={handleOnInputChange}
              />
              {errors.userName && (
                <span className="error">{errors.userName}</span>
              )}
            </div>
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
        {errors.biography && <span className="error">{errors.biography}</span>}
      </div>

      <ImageUploadS
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
          disabled={isProcessing}
          onClick={handleOnSubmit}
        >
          <Link to="/me">{isProcessing ? "Loading..." : "Submit"}</Link>
        </button>
      </div>
    </div>
  );
}

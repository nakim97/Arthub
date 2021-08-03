import "./CreateForumPost.css";
import CommunityNavbar from "../CommunityNavbar/CommunityNavbar";
import Navbar from "../Navbar/Navbar";
import React from "react";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { useUploadForm } from "../../hooks/useUploadForm";
import ImageUpload from "../ImageUpload/ImageUpload";
import { useImageUpload } from "../../hooks/useImageUpload";

export default function CreateForumPost({ user, handleOnLogout, term, setTerm }) {
  const { handleImageUpload, openWidget, imageUrl, imageAlt } =
    useImageUpload();
  const {
    tagOptions,
    CustomColorCheckbox,
    checked,
    checked1,
    checked2,
    handleChange,
    handleChange1,
    handleChange2,
    form,
    setForm,
    error,
    handleOnInputChange,
    handleOnSubmit,
    isProcessing,
  } = useUploadForm({ imageUrl, imageAlt });
   //Unauthenticated view
   if (!user.email) {
    return (
      <div className="total">
        <Navbar user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm}   />
        <div className="title">
          <h2>You must be logged in to create a forum post.</h2>
        </div>
      </div>
    );
  }
  // Normal view
  return (
    <div className="CreateForumPost">
      <Navbar user={user} handleOnLogout={handleOnLogout} term={term} setTerm={setTerm} />
      <CommunityNavbar />
      <div className="container">
        <h1>CREATE A NEW FORUM POST</h1>
        <div className="form">
          <div className="title">
            <input type="text" name="title" placeholder="Title" />
          </div>
          <div className="imgBar">
            <PhotoLibraryIcon style={{ color: "#514F4F", marginLeft: "5px" }} />
          </div>
          <div className="description">
            <textarea placeholder="Text(optional)" />
          </div>
          {/* <div className="tags">
            <ul>
              <li className="bubbletag"> + General</li>
              <li className="bubbletag"> + Advice</li>
              <li className="bubbletag"> + WIP</li>
              <li className="bubbletag"> + FAQ</li>
              <li className="bubbletag"> + Art</li>
              <li className="bubbletag"> + Other</li>
            </ul>
          </div> */}

          <button className="postBtn">POST</button>
        </div>
      </div>
    </div>
  );
}

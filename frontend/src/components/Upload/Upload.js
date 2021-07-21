import "./Upload.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import homefeed1 from "../../Assets/homefeed1.jpg";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useUploadForm } from "../../hooks/useUploadForm";
import ImageUpload from "../ImageUpload/ImageUpload";
import { useImageUpload } from "../../hooks/useImageUpload";
export default function Upload({ user, setUser }) {
  const tagOptions = [
    { key: 1, label: "Horror", value: "horror" },
    { key: 2, label: "Funny", value: "funny" },
    { key: 3, label: "Cartoon", value: "cartoon" },
    { key: 4, label: "Realistic", value: "realistic" },
  ];
  const {
    CustomColorCheckbox,
    checked,
    checked1,
    checked2,
    handleChange,
    handleChange1,
    handleChange2,
    form,
    setForm,
    errors,
    handleOnInputChange,
    handleOnSubmit,
    isProcessing,
  } = useUploadForm({ user, setUser });

  const { handleImageUpload, openWidget, imageUrl, imageAlt } =
  useImageUpload();
  if (!user.email) {
    return (
      <div className="total">
    <Navbar user={user} setUser={setUser} />
    <div className="title">
    <h2>You must be logged in to create a post.</h2>
  </div>
  </div>)
  }
  return (
    <div className="upload">
      <Navbar user={user} setUser={setUser} />

      <div className="title">
        <h2>Create A New Post</h2>
      </div>

      <div className="steps">
        <h2>Step 1: Post Description</h2>
      </div>

      {errors.form && <span className="error">{errors.form}</span>}
      <div className="form">
      <div className="uploadInfo">
        {/* <div className="uploadImage">
          <img className="image" src={homefeed1} alt="Upload Image template" />
        </div> */}
        <ImageUpload handleImageUpload={handleImageUpload} openWidget={openWidget} imageUrl={imageUrl} imageAlt={imageAlt} />
        {console.log("image", imageUrl)}
        <div className="uploadData">
          <div className="postName">
            <p>Title of work</p>
            <input type="text" name="title" placeholder="Title..." value={form.title} onChange={handleOnInputChange} />
            {errors.title && <span className="error">{errors.title}</span>}
          </div>
          <div className="tags">
            <p>Any tags</p>
            <select
              name="tag"
              onChange={(event) =>
                setForm((f) => ({ ...f, tag: event.target.value }))
              }
            >
              {tagOptions.map((tag) => (
                <option key={tag.key} value={tag.label}>
                  {tag.label}
                </option>
              ))}
            </select>
            {errors.tag && (
              <span className="error">{errors.tag}</span>
            )}
          </div>
          <div className="description">
            <p>A brief description of the art work</p>
            <input type="text" name="description" placeholder="Description..." value={form.description} onChange={handleOnInputChange} />
            {errors.description && <span className="error">{errors.description}</span>}
          </div>
        </div>
      </div>

      {/* <div className="uploadButn">
        <button>Upload</button>
      </div> */}

      <div className="steps">
        <h2>Step 2: Post Pricing</h2>
      </div>

      <div className="sell">
        <p>Sell for:</p>
        <div className="price">
          <input type="text" name="sell" placeholder="Selling" />
        </div>
      </div>

      <div className="notForSale">
        <FormControl>
          <FormControlLabel
            control={
              <CustomColorCheckbox
                checked={checked}
                onChange={handleChange}
                required
              />
            }
            label="Not for Sale"
          />
        </FormControl>
      </div>

      <div className="TOS1">
        <FormControl>
          <FormControlLabel
            control={
              <CustomColorCheckbox
                checked={checked1}
                onChange={handleChange1}
                required
              />
            }
            label="I have read and agree to the Submission Policy"
          />
        </FormControl>
      </div>
      <div className="TOS2">
        <FormControl>
          <FormControlLabel
            control={
              <CustomColorCheckbox
                checked={checked2}
                onChange={handleChange2}
                required
              />
            }
            label="I have read and agree to the Terms of Service"
          />
        </FormControl>
      </div>
      </div>
      <div className="editPageButns">
        <button className="cancel">
          <Link to="/me">Cancel</Link>
        </button>

        <button
          className="submit"
          disabled={isProcessing || !checked1 || !checked2}
          onClick={handleOnSubmit}
        >
          <Link to="/me">{isProcessing ? "Loading..." : "Submit"}</Link>
        </button>
      </div>
    </div>
  );
}

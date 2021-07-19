import "./Upload.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import homefeed1 from "../../Assets/homefeed1.jpg";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useUploadForm } from "../../hooks/useUploadForm";
export default function Upload({ user, setUser }) {
  const {
    CustomColorCheckbox,
    checked,
    checked1,
    checked2,
    handleChange,
    handleChange1,
    handleChange2,
    form,
    errors,
    handleOnInputChange,
    handleOnSubmit,
    isProcessing,
  } = useUploadForm({ user, setUser });

  return (
    <div className="upload">
      <Navbar />

      <div className="title">
        <h2>Create A New Post</h2>
      </div>

      <div className="steps">
        <h2>Step 1: Post Description</h2>
      </div>

      <div className="uploadInfo">
        <div className="uploadImage">
          <img className="image" src={homefeed1} alt="Upload Image template" />
        </div>

        <div className="uploadData">
          <div className="postName">
            <p>Title of work</p>
            <input type="text" name="search" placeholder="Title..." />
          </div>
          <div className="tags">
            <p>Any tags</p>
            <input type="text" name="search" placeholder="Tags..." />
          </div>
          <div className="description">
            <p>A brief description of the art work</p>
            <input type="text" name="search" placeholder="Description..." />
          </div>
        </div>
      </div>

      <div className="uploadButn">
        <button>Upload</button>
      </div>

      <div className="steps">
        <h2>Step 2: Post Pricing</h2>
      </div>

      <div className="sell">
        <p>Sell for:</p>
        <div className="price">
          <input type="text" name="search" placeholder="Description..." />
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
      
      <div className="editPageButns">
          <button className="cancel"><Link to="/me">Cancel</Link></button>

          <button className="submit"
          disabled={isProcessing || !checked}
          onClick={handleOnSubmit}><Link to="/me">
            {isProcessing ? "Loading..." : "Submit"}
            </Link></button>
      </div>
    </div>
  );
}

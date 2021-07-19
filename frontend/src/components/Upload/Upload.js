import "./Upload.css";
import Navbar from "../Navbar/Navbar";
import homefeed1 from "../../Assets/homefeed1.jpg";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useRegisterForm } from "../../hooks/useRegisterForm";
export default function Upload({ user, setUser }) {
  const {
    CustomColorCheckbox,
    checked,
    handleChange,
    form,
    errors,
    handleOnInputChange,
    handleOnSubmit,
    isProcessing,
  } = useRegisterForm({ user, setUser });

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
                checked={checked}
                onChange={handleChange}
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
                checked={checked}
                onChange={handleChange}
                required
              />
            }
            label="I have read and agree to the Terms of Service "
          />
        </FormControl>
      </div>

      <div className="editPageButns">
        <div className="cancel">
          <p>Cancel</p>
        </div>

        <div className="submit">
          <p>Submit</p>
        </div>
      </div>
    </div>
  );
}

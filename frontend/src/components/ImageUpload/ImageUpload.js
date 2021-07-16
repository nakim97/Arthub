import "./ImageUpload.css";
import { useState } from "react";

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageAlt, setImageAlt] = useState(null);
  // We will create the widget and open it up when clicked.
  const openWidget = () => {
    // create the widget
    window.cloudinary.createUploadWidget(
      {
        cloudName: "powerstriders",
        uploadPreset: "ll7bhjxz",
      },
      (error, result) => {
        setImageUrl(result.info.secure_url);
        setImageAlt(`An image of ${result.info.original_filename}`);
      }
    ).open(); // open up the widget after creation
  };
  /*
  This function queries the document to get the first input element with the type of file,
then it de-structures the files array from the resulting object,
then finally logs the first element of the array in the result to the console. */
  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", "ll7bhjxz");
    const options = {
      method: "POST",
      body: formData,
    };

    return fetch(
      "https://api.Cloudinary.com/v1_1/powerstriders/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setImageUrl(res.secure_url);
        setImageAlt(`An image of ${res.original_filename}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <main className="ImageUpload">
      <section className="left-side">
        <form>
          <div className="form-group">
            <input type="file" />
          </div>

          <button type="button" className="btn" onClick={handleImageUpload}>
            Submit
          </button>
          <button type="button" className="btn widget-btn" onClick={openWidget}>
            Upload Via Widget
          </button>
        </form>
      </section>
      <section className="right-side white">
        <p>The resulting image will be displayed here</p>
        {imageUrl && (
          <img src={imageUrl} alt={imageAlt} className="displayed-image" />
        )}
      </section>
    </main>
  );
}
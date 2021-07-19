import "./ImageUpload.css";
import { useImageUpload } from "../../hooks/useImageUpload";

export default function ImageUpload() {
  const { handleImageUpload, openWidget, imageUrl, imageAlt } =
    useImageUpload();
  return (
    <main className="ImageUpload">
      <section className="right-side white">
        <p>The resulting image will be displayed here</p>
        {imageUrl && (
          <img src={imageUrl} alt={imageAlt} className="displayed-image" />
        )}
      </section>
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
    </main>
  );
}

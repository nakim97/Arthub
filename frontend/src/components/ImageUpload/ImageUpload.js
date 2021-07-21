import "./ImageUpload.css";

export default function ImageUpload({ handleImageUpload, openWidget, imageUrl, imageAlt }) {
  return (
    <main className="ImageUpload">
      <section className="right-side white">
        <p>Picture</p>
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
            Upload and Submit Via Widget
          </button>
        </form>
      </section>
    </main>
  );
}

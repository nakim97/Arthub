import "./ImageUpload.css";

export default function ImageUpload({ handleImageUpload, openWidget, imageUrl, imageAlt, name }) {
  return (
    <main className="ImageUpload">
      <section className="right-side white">
        <p>{name}</p>
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
            Upload Image File
          </button>
          <button type="button" className="btn widget-btn" onClick={openWidget}>
            Upload Image File Via Widget
          </button>
        </form>
      </section>
    </main>
  );
}

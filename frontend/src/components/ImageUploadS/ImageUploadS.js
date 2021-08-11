import "./ImageUploadS.css";

export default function ImageUploadS({
  handleImageUpload,
  openWidget,
  imageUrl,
  imageAlt,
  name,
}) {
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
          <div className="customize">
            <button
              type="button"
              className="btn widget-btn"
              onClick={openWidget}
            >
              Upload Image File Via Widget
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

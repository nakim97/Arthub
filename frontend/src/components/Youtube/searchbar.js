import { useSearchbar } from "../../hooks/useSearchbar";
import "./searchbar.css";

export default function Searchbar(props) {
  const { term, handleSubmit, handleChange } = useSearchbar(props);

  return (
    <div className="search">
      {term === null && <div className="noSearch"></div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <input
            onChange={handleChange}
            name="video-search"
            type="text"
            placeholder="Search.."
          />
        </div>
      </form>
    </div>
  );
}

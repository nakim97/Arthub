import "./searchbar.css";
import React, { useState } from "react";
export default function Searchbar(props) {
  const [term, setTerm] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search">
      {term === null && (
        <div className="noSearch">
          <p>Search for anything you want to learn...</p>
        </div>
      )}
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
import { useState } from "react";

export const useSearchbar = (props) => {
  const [term, setTerm] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return {
    term,
    handleSubmit,
    handleChange,
  };
};

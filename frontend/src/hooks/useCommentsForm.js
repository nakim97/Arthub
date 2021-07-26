import { useEffect, useState } from "react";

export const useCommentsForm = ({ user }) => {
  const [form, setForm] = useState({
    comment: "",
  });

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {};

  return { handleOnInputChange, handleOnSubmit };
};

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

export const useUploadForm = ({ imageUrl, imageAlt }) => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [checked, setChecked] = useState(true);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [error, setErrors] = useState({});
  const [error1, setErrors1] = useState({});
  const [form, setForm] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const tagOptions = [
    { key: 1, label: "Horror", value: "horror" },
    { key: 2, label: "Funny", value: "funny" },
    { key: 3, label: "Cartoon", value: "cartoon" },
    { key: 4, label: "Realistic", value: "realistic" },
  ];
  // Defining a custom check box with a green color
  // and setting the checkbox component to use that
  const CustomColorCheckbox = withStyles({
    root: {
      color: "#563a87",
      "&$checked": {
        color: "#563a87",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  useEffect(() => {
    // We are done processing, go to the main page
    if (isNavigating) {
      navigate("/me");
    }
  }, [isNavigating, navigate]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));
    setErrors1((e) => ({ ...e, form: null }));

    const { data, error } = await apiClient.createImage({
      postImgUrl: imageUrl,
    });
    if (error) setErrors((e) => ({ ...e, form: error }));

    const myId = data?.image.id;
    const { data1, error1 } = await apiClient.createPost({
      postTitle: form.title,
      postDescription: form.description,
      imgId: myId,
    });
    if (error1) setErrors1((e) => ({ ...e, form: error1 }));

    setIsProcessing(false);
    setIsNavigating(true);
  };

  return {
    tagOptions,
    CustomColorCheckbox,
    checked,
    checked1,
    checked2,
    handleChange,
    handleChange1,
    handleChange2,
    isProcessing,
    form,
    setForm,
    error,
    error1,
    handleOnSubmit,
    handleOnInputChange,
  };
};

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

export const useForumPost = ({ imageUrl, imageAlt }) => {
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
  const tagsOptions = [
    { key: 1, label: "General", value: "general" },
    { key: 2, label: "Advice", value: "advice" },
    { key: 3, label: "Work In Progress", value: "work in progress" },
    { key: 4, label: "FAQ", value: "faq" },
    { key: 5, label: "Art", value: "art" },
    { key: 6, label: "Other", value: "other" },
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
      navigate("/community");
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

    const { data, error } = await apiClient.createForumImage({
      forumImgUrl: imageUrl,
    });
    if (error) setErrors((e) => ({ ...e, form: error }));

    const myId = data?.image.id;
    const { data1, error1 } = await apiClient.createForumPost({
      forumTitle: form.title,
      forumDescription: form.description,
      imgId: myId,
    });
    if (error1) setErrors1((e) => ({ ...e, form: error1 }));

    setIsProcessing(false);
    setIsNavigating(true);
  };

  return {
    tagsOptions,
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
    handleOnSubmit,
    handleOnInputChange,
  };
};

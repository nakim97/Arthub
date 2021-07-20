import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

export const useUploadForm = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [checked, setChecked] = useState(true);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    title: "",
    description: "",
    tag: "",
  });
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
    // if user is already logged in,
    // redirect them to the home page
    if (user?.email) {
      navigate("/");
    }
  }, [user, navigate]);

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
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    if (event.target.name === "passwordConfirm") {
      if (event.target.value !== form.password) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Passwords do not match.",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsProcessing(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    function splitName(name) {
      let arr = [];
      let index = name.indexOf(" "); // Gets the first index where a space occurs
      let fName = name.substr(0, index); // Gets the first part
      let lName = name.substr(index + 1); // Gets the second part
      arr[0] = fName;
      arr[1] = lName;
      return arr;
    }

    function joinName(fName, lName) {
      return fName + lName;
    }

    const myArr = splitName(form.name);
    const { data, error } = await apiClient.createPost({
      post_title: form.title,
      post_description: form.description,
    });
    if (error) setErrors((e) => ({ ...e, form: error }));
    // if (data?.user) {
    //   setUser(data.user);
    //   apiClient.setToken(data.token);
    // }
    setIsProcessing(false);
  };

  return {
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
    errors,
    handleOnSubmit,
    handleOnInputChange,
  };
};

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";

export const useRegisterForm = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    // if user is already logged in,
    // redirect them to the home page
    if (user?.email) {
      navigate("/");
    }
  }, [user, navigate]);

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
    // if (!form.checkbox.checked) {
    //   alert("Please indicate that you accept the Terms and Conditions.");
    //   form.terms.focus();
    //   setErrors((e) => ({ ...e, checkbox: "Checkbox not selected." }));
    // }
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
    const { data, error } = await apiClient.signupUser({
      first_name: myArr[0],
      last_name: myArr[1],
      username: form.userName,
      email: form.email,
      password: form.password,
    });
    if (error) setErrors((e) => ({ ...e, form: error }));
    // if (data?.user) {
    //   setUser(data.user);
    //   apiClient.setToken(data.token);
    // }
    setIsProcessing(false);
  };

  return { isProcessing, form, errors, handleOnSubmit, handleOnInputChange };
};

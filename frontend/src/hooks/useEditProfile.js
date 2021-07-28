import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

export const useEditProfile = ({ user }) => {
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

  // useEffect(() => {
  //   // if user is already logged in,
  //   // redirect them to the home page
  //   if (user?.email) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);


  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));

    function splitName(name) {
      let arr = [];
      let index = name.indexOf(" "); // Gets the first index where a space occurs
      let fName = name.substr(0, index); // Gets the first part
      let lName = name.substr(index + 1); // Gets the second part
      arr[0] = fName;
      arr[1] = lName;
      return arr;
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

  return {
    isProcessing,
    form,
    errors,
    handleOnSubmit,
    handleOnInputChange,
  };
};

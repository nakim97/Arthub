import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiClient from "../../services/apiClient";
import BrushIcon from "@material-ui/icons/Brush";
import "./Register.css";
import register1 from "../../assets/register1.png"

export default function Register({ user, setUser }) {
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
    if (data?.user) {
      setUser(data.user);
      apiClient.setToken(data.token);
    }
    setIsProcessing(false);
  };

  return (
    
    <div className="Register">
      <p className="aside">The First Step
To Greatness</p>
      <img className="registerImage" src={register1} alt="register main img"/>
      <div className="card">
        <h2>Sign Up to ArtHub</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="split-inputs">
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleOnInputChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                name="userName"
                placeholder="Enter your username"
                value={form.userName}
                onChange={handleOnInputChange}
              />
              {errors.userName && (
                <span className="error">{errors.userName}</span>
              )}
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a secure password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm your password"
              value={form.passwordConfirm}
              onChange={handleOnInputChange}
            />
            {errors.passwordConfirm && (
              <span className="error">{errors.passwordConfirm}</span>
            )}
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              onChange={handleOnInputChange}
            />
            <label>
              Creating an account means you’re fine with our Terms and
              Conditions, Privacy Policy, and just being cool.
            </label>{" "}
          </div>
          <button
            className="btn"
            disabled={isProcessing}
            onClick={handleOnSubmit}
          >
            {isProcessing ? "Loading..." : "Create Account"}
          </button>
        </div>

        <div className="footer smaller">
          <p>
            Already registered? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

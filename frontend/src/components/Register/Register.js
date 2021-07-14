import { Link } from "react-router-dom";
import BrushIcon from "@material-ui/icons/Brush";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import "./Register.css";
import { withStyles } from "@material-ui/core/styles";
import register1 from "../../Assets/register1.png";
import coollines from "../../Assets/coollines.png";
import { useRegisterForm } from "../../hooks/useRegisterForm";
import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export default function Register({ user, setUser }) {
  const { form, errors, handleOnInputChange, handleOnSubmit, isProcessing } =
    useRegisterForm({ user, setUser });
    // Defining a custom check box with a green color
    // and setting the checkbox component to use that
    const CustomColorCheckbox = withStyles({
      root: {
        color: "#13c552",
        "&$checked": {
          color: "#13c552"
        }
      },
      checked: {}
    })((props) => <Checkbox color="default" {...props} />);
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  return (
    <div className="Register">
      <div className="picture">
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className="logo">
              <BrushIcon style={{ fontSize: 30 }} />
            </div>
          </Link>
        <div className="bubble">
          <BubbleChartIcon style={{ marginRight: "5px" }} />
        </div>
        <p className="aside">The First Step To Greatness</p>
        <img
          className="registerImage"
          src={register1}
          alt="register main img"
        />
      </div>
      <div className="card">
        <h2>Sign Up to ArtHub</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />
        <img className="lines" src={coollines} alt="cool lines img" />
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
          <FormControl>
            <FormControlLabel
              control={
                <CustomColorCheckbox checked={checked} onChange={handleChange} required />
              }
              label="I agree to the terms"
            />
          </FormControl>
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              required="required"
              onChange={handleOnInputChange}
            />
            {errors.checkbox && (
              <span className="error">{errors.checkbox}</span>
            )}
            <label>
              Creating an account means you’re fine with our Terms and
              Conditions, Privacy Policy, and just being cool.
            </label>
          </div>
          <button
            className="btn"
            disabled={isProcessing || !checked}
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

import { Link } from "react-router-dom";
import "./Login.css";
import login1 from "../../Assets/login1.png";
import BrushIcon from "@material-ui/icons/Brush";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import coollines from "../../Assets/coollines.png";
import { useLoginForm } from "../../hooks/useLoginForm";

export default function Login({ user, setUser }) {
  const { form, errors, handleOnInputChange, handleOnSubmit, isProcessing } =
    useLoginForm({ user, setUser });

  return (
    <div className="Login">
      <div>
        <Link to="/" className="Link">
          <div className="logo">
            <BrushIcon style={{ fontSize: 30 }} />
          </div>
        </Link>
        <div className="bubble">
          <BubbleChartIcon style={{ marginRight: "5px" }} />
        </div>
        <p className="aside">You’re One of Us Now</p>
        <img className="loginImage" src={login1} alt="login main img" />
      </div>
      <div className="card">
        <h2>Sign in To ArtHub</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />
        <img className="lines" src={coollines} alt="cool lines img" />
        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <button
            className="btn"
            disabled={isProcessing}
            onClick={handleOnSubmit}
          >
            {isProcessing ? "Loading..." : "Sign In"}
          </button>
        </div>

        <div className="footer smaller">
          <p>
            Don't have an account? <Link to="/register"> Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

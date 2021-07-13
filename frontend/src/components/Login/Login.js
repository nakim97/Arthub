import { Link} from "react-router-dom";
import "./Login.css";
import login1 from "../../assets/login1.png";
import BrushIcon from "@material-ui/icons/Brush";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import { useLoginForm } from "hooks/useRegisterForm";

export default function Login({ user, setUser }) {
  const {form, errors, handleOnInputChange, handleOnSubmit, isProcessing} = useLoginForm({user, setUser})

  return (
    <div className="Login">
      <div>
        <div className="logo">
          <BrushIcon style={{ fontSize: 40 }} />
        </div>
        <div className="bubble">
          <BubbleChartIcon style={{ marginRight: "5px" }} />
        </div>
        <p className="aside">You’re One of Us Now</p>
        <img className="registerImage" src={login1} alt="login main img" />
      </div>
      <div className="card">
        <h2>Sign in To ArtHub</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

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
            Don't have an account? Sign up <Link to="/register">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

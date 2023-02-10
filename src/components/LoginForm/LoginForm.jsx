// LoginForm.jsx
import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import "./LogInForm.css";

export default function LoginForm({ setUser, isNotRegisteredHandler }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <div className="form-container">
        <div className="logo-container"></div>
        <form className="form-style" autoComplete="off" onSubmit={handleSubmit}>
          <span className="log-in-title">Log in</span>
          {/* <label>Email</label> */}
          <input
            className="login-input"
            placeholder="Email address"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          {/* <label>Password</label> */}
          <input
            className="login-input"
            placeholder="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          {/* <button onClick={isNotRegisteredHandler} className="log-in">
            Don't have an account? Sign up
          </button> */}
          <div className="remember-me-container">
            <label htmlFor="remember">Remember me?</label>
            <input className="remember-me" type="checkbox" name="remember" />
          </div>
          <button className="login-btn" type="submit">
            Log in
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

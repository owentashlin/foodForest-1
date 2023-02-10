// Rewrite the SignUpForm as a function component
import { useState } from "react";
import { signUp } from "../../utilities/users-service";
import "./SignUpForm.css";
import logo from "../../images/logo.png";

export default function SignUpForm({ setUser, isRegisteredHandler }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });
  const disable = formData.password !== formData.confirm;

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const formDataCopy = { ...formData };
      delete formDataCopy.error;
      delete formDataCopy.confirm;
      const user = await signUp(formDataCopy);
      setUser(user);
    } catch {
      setFormData({
        ...formData,
        error: "Sign Up Failed - Try Again",
      });
    }
  }

  return (
    <div>
      <div className="form-container">
        <div className="logo-container">
          <img width="250px" src={logo} alt="" />
        </div>
        <form className="form-style" autoComplete="off" onSubmit={handleSubmit}>
          {/* <label>Name</label> */}
          <input
            className="signup-input"
            placeholder="Name*"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {/* <label>Email</label> */}
          <input
            className="signup-input"
            placeholder="Email address*"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* <label>Password</label> */}
          <input
            className="signup-input"
            placeholder="Password (8+ characters)*"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {/* <label>Confirm</label> */}
          <input
            className="signup-input"
            placeholder="Re-enter password*"
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <button onClick={isRegisteredHandler} className="log-in">
            Already have an account? Log in
          </button>
          <button className="continue-btn" type="submit" disabled={disable}>
            Continue
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}

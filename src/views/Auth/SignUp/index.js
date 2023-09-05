import React, { useState } from "react";
import "../styles/auth.scss"; // Import your login styles if you have them
import { useDataContext } from "../../../data";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { setSignUp } = useDataContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ ...formData });
    let result = await window.api.signup({ ...formData });
    alert(`copy this ${result} for use later`);
    setSignUp(true);
  };

  return (
    <div className="login-container">
      <img src="src/assets/logo/logo.png" alt="Logo" className="logo" />
      <label className="label">What is your full name?</label>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="input-group">
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;

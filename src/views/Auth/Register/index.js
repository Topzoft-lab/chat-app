import React, { useState } from "react";
import "../styles/auth.scss"; // Import your login styles if you have them
import { useDataContext } from "../../../data";

const Register = () => {
  // const [code, setCode] = useState("");

  const { setRegister, phone, registerPhone, setOtp } = useDataContext();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    registerPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await window.api.register(phone);
    console.log(result, "save");
    setOtp(result);
    setRegister(true);
  };

  return (
    <div className="login-container">
      <img src="src/assets/logo/logo.png" alt="Logo" className="logo" />
      <label className="label">What's your Phone Number?</label>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="prefix-button">+1</span>
          <input type="text" name="phone" placeholder="Phone Number" value={phone} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">
          Next
        </button>
      </form>
    </div>
  );
};

export default Register;

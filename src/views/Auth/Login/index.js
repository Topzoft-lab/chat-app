import React, { useState } from "react";
import "../styles/auth.scss"; // Import your login styles if you have them
import { useDataContext } from "../../../data";

const Login = () => {
  const [code, setCode] = useState("");
  const [enabled, setEnabled] = useState(false);
  const { setLogin } = useDataContext();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (value.length > 5) {
      setCode(value);
      let result = await window.api.compareCode({ code: value });
      console.log(result);

      result ? setEnabled(true) : alert("Wrong code quit and restart again or enter the correct score that was display earlier");
    }
    setCode(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <div className="login-container">
      <img src="src/assets/logo/logo.png" alt="Logo" className="logo" />
      <label className="label">+1 31-481-4739</label>

      <p className="p-label">We have sent you an sms with the code</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" name="code" placeholder="code" value={code} onChange={handleChange} />
        </div>
        <button type="submit" className={`submit-button ${enabled === true ? "" : "disabled"}`} disabled={!enabled}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Login;

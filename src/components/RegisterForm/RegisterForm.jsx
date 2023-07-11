import "./RegisterForm.css";
import AuthBtn from "../AuthBtn/AuthBtn";
import { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, username });
  };
  return (
    <form action="" className="register_form" onSubmit={handleSubmit}>
      <div className="content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and type or setting
          industry.
        </p>
        <div className="form_item">
          <label htmlFor="">Email Address</label>
          <input
            type="text"
            placeholder="Enter your Email "
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form_item">
          <label htmlFor="">User name</label>
          <input
            type="text"
            value={username}
            placeholder="Enter your User name "
            onChange={handleUsernameChange}
            name="username"
          />
        </div>
        <div className="form_item">
          <label htmlFor="">password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={handlePasswordChange}
            value={password}
            name="password"
          />
        </div>

        <AuthBtn type="submit" onClick={handleSubmit}>
          Register
        </AuthBtn>
      </div>
    </form>
  );
}

export default RegisterForm;

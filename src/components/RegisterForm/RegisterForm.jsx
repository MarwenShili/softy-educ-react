import "./RegisterForm.css";
import AuthBtn from "../AuthBtn/AuthBtn";
import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function RegisterForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
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
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_item">
          <label htmlFor="">User name</label>
          <input
            type="text"
            value={values.username}
            placeholder="Enter your User name "
            onChange={handleInputChange}
            name="username"
          />
        </div>
        <div className="form_item">
          <label htmlFor="">password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={handleInputChange}
            value={values.password}
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

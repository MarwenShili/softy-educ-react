import "./RegisterForm.css";
import AuthBtn from "../AuthBtn/AuthBtn";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/slices/Auth-Slice";

function RegisterForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function ValidateEmailAddress(emailString) {
    // check for @ sign
    var atSymbol = emailString.indexOf("@");
    if (atSymbol < 1) {
      setEmailError("Please enter a valid email address.");
    }
    var dot = emailString.indexOf(".");
    if (dot <= atSymbol + 2) {
      setEmailError("Please enter a valid email address.");
    }
    // check that the dot is not at the end
    if (dot === emailString.length - 1) {
      setEmailError("Please enter a valid email address.");
    }

    return true;
  }
  function ValidatePassword(passwordString) {
    if (passwordString.trim().length === 0) {
      setPasswordError("Password is required");
    } else if (passwordString.trim().length < 4) {
      setPasswordError("Too short");
    } else {
      setPasswordError(false);
    }
  }
  function ValidateUserName(usernameString) {
    if (usernameString.trim().length === 0) {
      setUserNameError("User name is required");
    } else if (usernameString.trim().length < 4) {
      setUserNameError("Too short");
    } else {
      setUserNameError(false);
    }
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    ValidateEmailAddress(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    ValidatePassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    ValidateUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //validate fields when click submit button
    ValidateEmailAddress(email);
    ValidatePassword(password);
    ValidateUserName(username);
    console.log({ email, password, username });

    dispatch(register({ email, password, username }))
      .unwrap()
      .then((originalPromiseResult) => {
        // handle result here
        console.log("tt");
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError);

        // handle error here
      });
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
          <p className="error_msg">{emailError}</p>
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
          <p className="error_msg">{userNameError}</p>
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
          <p className="error_msg">{passwordError}</p>
        </div>

        <AuthBtn type="submit" onClick={handleSubmit}>
          Register
        </AuthBtn>
      </div>
    </form>
  );
}

export default RegisterForm;

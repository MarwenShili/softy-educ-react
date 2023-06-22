import AuthBtn from "../AuthBtn/AuthBtn";
import "./LoginForm.css";
function LoginForm() {
  return (
    <form action="" className="login_form">
      <div className="content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and type or setting
          industry.
        </p>
        <div className="form_item">
          <label htmlFor="">email</label>
          <input type="text" placeholder="Enter your User name " />
        </div>
        <div className="form_item">
          <label htmlFor="">password</label>
          <input type="password" placeholder="Enter your Password" />
        </div>
        <div className="action_form_login">
          <span>
            <input type="checkbox" /> remember me
          </span>
          <p className="forgot_password">Forgot Password</p>
        </div>
        <AuthBtn>Login</AuthBtn>
      </div>
    </form>
  );
}

export default LoginForm;

import "./Login.css";
import loginIlg from "../../assets/icons/auth0.png";
import Switcher from "../../components/Switcher/Switcher";
import LoginForm from "../../components/LoginForm/LoginForm";
function Login() {
  return (
    <div className="login_page">
      <div className="left">
        <img src={loginIlg} alt="" />
      </div>
      <div className="right">
        <p className="title">Welcome to Organick</p>
        <Switcher />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;

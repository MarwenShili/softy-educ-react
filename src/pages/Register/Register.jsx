import "./Register.css";
import loginIlg from "../../assets/icons/auth1.svg";
import Switcher from "../../components/Switcher/Switcher";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
function Register() {
  return (
    <div className="register_page">
      <div className="left">
        <img src={loginIlg} alt="" />
      </div>
      <div className="right">
        <p className="title">Welcome to Organick</p>
        <Switcher />
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;

import "./Register.css";
import loginIlg from "../../assets/icons/auth1.svg";
import Switcher from "../../components/Switcher/Switcher";
function Register() {
  return (
    <div className="register_page">
      <div className="left">
        <img src={loginIlg} alt="" />
      </div>
      <div className="right">
        <form action="">
          <p className="title">Welcome to Organick</p>
          <Switcher />
        </form>
      </div>
    </div>
  );
}

export default Register;

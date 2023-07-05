import "./RegisterForm.css";
import AuthBtn from "../AuthBtn/AuthBtn";

function RegisterForm() {
  return (
    <form action="" className="register_form">
      <div className="content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and type or setting
          industry.
        </p>
        <div className="form_item">
          <label htmlFor="">Email Address</label>
          <input type="text" placeholder="Enter your Email " />
        </div>
        <div className="form_item">
          <label htmlFor="">User name</label>
          <input type="text" placeholder="Enter your User name " />
        </div>
        <div className="form_item">
          <label htmlFor="">password</label>
          <input type="password" placeholder="Enter your Password" />
        </div>

        <AuthBtn>Register</AuthBtn>
      </div>
    </form>
  );
}

export default RegisterForm;

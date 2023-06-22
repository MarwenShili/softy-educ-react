import { useLocation, useNavigate } from "react-router-dom";
import "./Switch.css";
function Switcher() {
  const location = useLocation();
  const navigate = useNavigate();
  let path = location.pathname.replace(/\//g, "");
  const handleClassName = () => {
    if (path === "login") {
      return {
        login: "btn login",
        register: "",
      };
    } else {
      return {
        login: "",
        register: "btn register",
      };
    }
  };
  return (
    <div className="switcher">
      <button
        className={handleClassName().login}
        onClick={() => navigate("/login")}
      >
        Login
      </button>
      <button
        className={handleClassName().register}
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </div>
  );
}

export default Switcher;

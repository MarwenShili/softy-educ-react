import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <div className={isOpen ? "sidebar opened" : "sidebar closed"}>
      <div className="items">
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;

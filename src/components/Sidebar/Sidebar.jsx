import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import CartHeader from "../CartHeader/CartHeader";
import Search from "../Search/Search";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className={isOpen ? "sidebar opened" : "sidebar closed"}>
      <div className="items">
        <Search />

        <NavLink
          className="link_sidebar"
          to="/"
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          className="link_sidebar"
          to="/login"
          onClick={() => setIsOpen(false)}
        >
          Login
        </NavLink>
        <CartHeader />
      </div>
    </div>
  );
}

export default Sidebar;

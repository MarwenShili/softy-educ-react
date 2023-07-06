import React from "react";
import "./Header.css";
import logo from "../../assets/icons/Logo.svg";
import { NavLink } from "react-router-dom";
import CartHeader from "../CartHeader/CartHeader";
import Menu from "../Menu/Menu";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";

function Header({ setIsOpen, isOpen }) {
  return (
    <header className="header">
      <div className="header_content">
        <div className="s_left">
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
          <div className="navigations">
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/">Shop</NavLink> */}
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
        <div className="s_right">
          <div className="search_s">
            <Search />
          </div>
          <div className="header_actions">
            <CartHeader />
          </div>
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;

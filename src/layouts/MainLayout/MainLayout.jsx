import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MainLayout.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="main_layout">
      <div className="main_layout__container">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
        <Footer />
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MainLayout;

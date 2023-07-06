import "./EmptyCart.css";
import box from "../../assets/icons/Box.svg";
import { useNavigate } from "react-router-dom";
function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="empty_cart">
      <div className="content_page">
        <img src={box} alt="" />
        <p className="title">Your Cart Is Empty</p>
        <p className="description">Please create property listing first</p>
        <button className="btn_empty_state" onClick={() => navigate("/")}>
          Search Again
        </button>
      </div>
    </div>
  );
}

export default EmptyCart;

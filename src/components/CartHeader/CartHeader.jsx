import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/icons/cart.svg";
import "./CartHeader.css";
function CartHeader() {
  const navigate = useNavigate();
  return (
    <div className="cart_header" onClick={() => navigate("/cart")}>
      <span>
        <img src={cartIcon} alt="" />
      </span>
      Cart (0)
    </div>
  );
}

export default CartHeader;

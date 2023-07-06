import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/icons/cart.svg";
import "./CartHeader.css";
function CartHeader() {
  const navigate = useNavigate();
  const { totalQuantity } = useSelector((state) => state.cart);

  const handleNavigate = () => {
    navigate("/cart");
  };

  return (
    <div className="cart_header" onClick={handleNavigate}>
      <span>
        <img src={cartIcon} alt="" />
      </span>
      Cart ({totalQuantity})
    </div>
  );
}

export default CartHeader;

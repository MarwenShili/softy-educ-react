import "./CartItem.css";
import topIcon from "../../assets/icons/top.svg";
import bottomIcon from "../../assets/icons/bottom.svg";
import trashIcon from "../../assets/icons/trash.svg";
import { useState } from "react";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/slices/Cart-Slice";
import { useDispatch } from "react-redux";

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);

  const dispatch = useDispatch();

  const calcPrice = (price, quantity) => {
    let p = price * quantity;
    return p;
  };

  const addProductToCart = () => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };
  const removeProductFromCart = () => {
    dispatch(removeItemFromCart(product?.id));
  };
  return (
    <div className="cart_item">
      <div className="left">
        <img src={product?.image} alt="" />
        <div className="titles">
          <p className="title_cart_item">{product.name}</p>
          <p className="desc">{product.summary || "--"}</p>
        </div>
      </div>
      <div className="right">
        <div className="counts">
          {product?.quantity}
          <span className="btns">
            <img src={topIcon} alt="" onClick={addProductToCart} />
            <img src={bottomIcon} alt="" onClick={removeProductFromCart} />
          </span>
        </div>
        <p className="price">
          ${calcPrice(product?.discountPrice, product?.quantity)}
        </p>
        <button className="delete">
          <img src={trashIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;

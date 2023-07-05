import "./CartItem.css";
import topIcon from "../../assets/icons/top.svg";
import bottomIcon from "../../assets/icons/bottom.svg";
import trashIcon from "../../assets/icons/trash.svg";
import { useState } from "react";

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);

  const onAddQuantity = () => {
    setQuantity((el) => el + 1);
    setPrice(price * quantity);
  };
  const onRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity((el) => el - 1);
    }
  };

  const calcPrice = (price, quantity) => {
    let p = price * quantity;
    return p;
  };

  return (
    <div className="cart_item">
      <div className="left">
        <img src={product.img} alt="" />
        <div className="titles">
          <p className="title_cart_item">{product.name}</p>
          <p className="desc">{product.subtitle}</p>
        </div>
      </div>
      <div className="right">
        <div className="counts">
          {quantity}
          <span className="btns">
            <img src={topIcon} alt="" onClick={onAddQuantity} />
            <img src={bottomIcon} alt="" onClick={onRemoveQuantity} />
          </span>
        </div>
        <p className="price">${calcPrice(product.price, quantity)}</p>
        <button className="delete">
          <img src={trashIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;

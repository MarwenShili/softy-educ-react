import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
import InvoiceDetails from "../../components/InvoiceDetails/InvoiceDetails";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

function Cart() {
  const { items } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="cart">
      <div className="left">
        <p className="title">Shopping Continue</p>
        <div className="divider"></div>
        <div className="content">
          <p className="title">Shopping cart</p>
          <p className="subtitle">You have 3 item in your cart</p>
          <div className="cards">
            {items?.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <InvoiceDetails />
      </div>
    </div>
  );
}

export default Cart;

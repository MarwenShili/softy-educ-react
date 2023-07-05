import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";
import { cartProducts } from "../../constants/cartProducts";

function Cart() {
  return (
    <div className="cart">
      <div className="left">
        <p className="title">Shopping Continue</p>
        <div className="divider"></div>
        <div className="content">
          <p className="title">Shopping cart</p>
          <p className="subtitle">You have 3 item in your cart</p>
          <div className="cards">
            {cartProducts.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <p className="title">Have a Coupon?</p>
        <input
          type="email"
          className="email"
          placeholder="Enter your email here"
        />
        <div>
          <button className="btn_apply">Apply</button>
        </div>
        <div className="totals">
          <p className="title">Cart Totals</p>
          <div className="inv_item subtotal">
            <p>Subtotal</p>
            <span>$150</span>
          </div>
          <div className="inv_item shipping">
            <p>Shipping</p>
            <span>Free</span>
          </div>
          <div className="inv_item total">
            <p>Total</p>
            <span>$150</span>
          </div>
          <button className="btn_apply checkout_btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

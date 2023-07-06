import "./InvoiceDetails.css";
import { useSelector } from "react-redux";

function InvoiceDetails() {
  const { items, shipping } = useSelector((state) => state.cart);

  const calcSubTotal = () => {
    let subtotal = 0;
    for (const element of items) {
      subtotal = subtotal + element.discountPrice * element.quantity;
    }
    return subtotal;
  };

  const calcTotal = () => {
    let total = 0;
    for (const element of items) {
      total = total + element.discountPrice * element.quantity + shipping;
    }
    return total;
  };
  return (
    <>
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
          <span>${calcSubTotal()}</span>
        </div>
        <div className="inv_item shipping">
          <p>Shipping</p>
          <span>Free</span>
        </div>
        <div className="inv_item total">
          <p>Total</p>
          <span>${calcTotal()}</span>
        </div>
        <button className="btn_apply checkout_btn">Checkout</button>
      </div>
    </>
  );
}

export default InvoiceDetails;

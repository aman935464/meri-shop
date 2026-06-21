import React from "react";
import usePriceCalc from "../../../Hooks/usePriceCalc.jsx";
import useCartStore from "../../../store/useCartStore";

export default function CartSummary() {
  const { cart } = useCartStore();
  const {
    totalQuantity,
    subTotal,
    discountRate,
    taxRate,
    discount,
    tax,
    totalAmount,
  } = usePriceCalc();

  return (
    <>
      <h1>Price Details</h1>
      <div id="cart-summary">
        <div className="section">
          <h3>Price ({totalQuantity} items)</h3>
          <h4>
            {cart[0]?.currency}
            {subTotal}
          </h4>
        </div>
        <div className="section">
          <h3>Discount ({discountRate * 100}%)</h3>
          <h4>
            -{cart[0]?.currency}
            {discount}
          </h4>
        </div>
        <div className="section">
          <h3>Tax ({taxRate * 100}%)</h3>
          <h4>
            {cart[0]?.currency}
            {tax}
          </h4>
        </div>
        <div className="section">
          <h3>Total Amount</h3>
          <div className="sec2">
            <h2>
              {cart[0]?.currency}
              {totalAmount}
            </h2>
            <pre className="price-mrp">
              <p>M.R.P.: </p>
              <h4 className="pre-price">
                {cart[0]?.currency}
                {subTotal}
              </h4>
            </pre>
          </div>
        </div>
      </div>
      <div >
        <button className="order-btn">Order</button>
      </div>
    </>
  );
}

import React from "react";
import useCartStore from "../../../store/useCartStore";

export default function CartSummary() {
  const { cart } = useCartStore();
  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const subTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const discountRate = 25 / 100;
  const taxRate = 18 / 100;
  const discount = Number((subTotal * discountRate).toFixed(1));
  const tax = Number(((subTotal - discount) * taxRate).toFixed(1));
  const totalAmount = subTotal - discount + tax;

  return (
    <>
      <h1 className="w-[250px] ml-[30px]">Price Details</h1>
      <div id="cart-summary">
        <div>
          <h3>Price ({totalQuantity} items)</h3>
          <h4>
            {cart[0]?.currency}
            {subTotal}
          </h4>
        </div>
        <div>
          <h3>Discount ({discountRate * 100}%)</h3>
          <h4>
            -{cart[0]?.currency}
            {discount}
          </h4>
        </div>
        <div>
          <h3>Tax ({taxRate * 100}%)</h3>
          <h4>
            {cart[0]?.currency}
            {tax}
          </h4>
        </div>
        <div>
          <h3>Total Amount</h3>
          <div>
            <h4>
            {cart[0]?.currency}
            {subTotal}
          </h4>
          <h4>
            {cart[0]?.currency}
            {totalAmount}
          </h4>
          </div>
        </div>
      </div>
    </>
  );
}

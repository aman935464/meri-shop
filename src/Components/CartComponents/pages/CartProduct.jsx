import React from "react";
import useCartStore from "../../../store/useCartStore";
import CartPriceSection from "./CartPriceSection";
export default function CartProduct() {
  const { cart, clearCart, removeCart, increaseQty, decreaseQty } =
    useCartStore();

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="cart-main"></div>
      {cart?.map((item) => (
        <div key={item.id} className="cart-sec">
          <img src={item.images[0]} alt={item.title} />
          <div className="detail-sec">
            <h2 className="item-title">{item.title}</h2>
            <h2 className="item-description">{item.description}</h2>
            <h5 className="item-price">
              <b>{item.currency}</b>
              {item.price}
            </h5>
            <p className="pre">
              {item.stock !== undefined ? "In stock" : "Out of stock"}
            </p>
            <div className="item-btns">
              <div className="item-qty-btn">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeCart(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="price-sec">
            <CartPriceSection product={item} />
          </div>
        </div>
      ))}
      <button onClick={clearCart} className="items-clear-btn">
        clear
      </button>
    </>
  );
}

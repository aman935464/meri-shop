import React from "react";
import { Link } from "react-router-dom";
import useFilteredProduct from "../../../Hooks/FilteredProduct";
import useCartStore from "../../../store/useCartStore";

export default function HomeProduct() {
  const { filteredProducts } = useFilteredProduct();
  const {addToCart} = useCartStore();

  return (
    <div className="productContainer">
      {filteredProducts?.map((product) => (
        <div className="productCard" key={product.id}>
          <Link to={`product/${product.id}`}>
            <img src={product.images[0]} alt={product.title} />
            <h5>
              <b>{product.currency}</b>
              {product.price}
            </h5>
            <h6>{product.title}</h6>
          </Link>
          <button className="addcart-btn" onClick={() => addToCart(product)}>Add Cart</button>
        </div>
      ))}
    </div>
  );
}

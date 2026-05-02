import "./cart.css";
import CartProduct from './pages/CartProduct'
import CartSummary from './pages/CartSummary'

const ProductCart = () => {

  return (
    <div className="cart-container">
      <div className="cart-product-section">
        <CartProduct />
      </div>
      <div className="cart-calculation-section">
        <CartSummary/>
      </div>
    </div>
  );
};

export default ProductCart;






import useProductStore from "../store/useProductStore";

export default function ProductCalculation() {
  const { product } = useProductStore();
  const discount = product?.discount || 0;
  const price = product?.price || 0;
  const currentPrice = Number(price - (price * discount) / 100).toFixed(0);
  const savings = Number(price - currentPrice).toLocaleString("en-IN");

  return (
    <div className="price-section">
      {discount > 0 && (
        <span className="discount-badge">-{discount}% off</span>
      )}
      <span className="price-current">
        {product?.currency}{Number(currentPrice).toLocaleString("en-IN")}
      </span>
      <span className="price-mrp">
        M.R.P.: {product?.currency}{price.toLocaleString("en-IN")}
      </span>
      {discount > 0 && (
        <span className="savings">
          <i className="ti ti-tag" aria-hidden="true"></i>
          {" "}You save {product?.currency}{savings}
        </span>
      )}
    </div>
  );
}
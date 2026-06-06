


import useRenderStars from "../../../Hooks/useStarRating";
import useProductStore from "../../../store/useProductStore";
import ProductCalculation from "../../ProductCalculation";
import ProductSummary2 from "./ProductSummary2";

export default function ProductSummary() {
  const { product } = useProductStore();

  const stockBadge = () => {
    if (!product?.stock || product.stock === 0)
      return { label: "Out of stock", cls: "badge-stock-out" };
    if (product.stock <= 10)
      return { label: `Low stock (${product.stock})`, cls: "badge-stock-low" };
    return { label: `In stock (${product.stock})`, cls: "badge-stock-ok" };
  };

  const stock = stockBadge();

  return (
    <>
      {/* Category + Stock badges */}
      <div className="badge-row">
        {product?.category && (
          <span className={`badge badge-cat`}>
            {product.category}
          </span>
        )}
        <span className={`badge ${stock.cls}`}>
          {stock.label}
        </span>
      </div>

      {/* Title */}
      <h2 className="product-main-title">{product?.title}</h2>

      {/* Description — mobile par hidden */}
      <p className="product-description max-[600px]:hidden">
        {product?.description}
      </p>

      {/* Brand */}
      <p className="product-brand">
        Brand: <b>{product?.brand}</b>
      </p>

      {/* Stars */}
      <div className="stars-row">
        {useRenderStars(product?.rating)}
        <span className="rating-count">({product?.rating})</span>
      </div>

      {/* Price */}
      <ProductCalculation />

      {/* Features + Tags + Buttons */}
      <ProductSummary2 />
    </>
  );
}
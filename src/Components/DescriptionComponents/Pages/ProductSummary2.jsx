import useProductStore from "../../../store/useProductStore";


export default function ProductSummary2() {
  const { product } = useProductStore();

  return (
    <>
      <div className="product-details-section">
        <h2>Product Details</h2>
        <h3>Top Highlights</h3>
        <ul className="features-list">
          {product?.features?.map((item, index) => (
            <li key={index} className="feature-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {product?.tags?.length > 0 && (
        <div className="tags-section">
          <p className="section-label">Tags</p>
          <div className="tags-row">
            {product.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      )}

      <div className="btn-row">
        <button className="btn-primary">
          <i className="ti ti-shopping-cart" aria-hidden="true"></i>
          Add to Cart
        </button>
        <button className="btn-secondary">
          <i className="ti ti-heart" aria-hidden="true"></i>
          Wishlist
        </button>
      </div>
    </>
  );
}
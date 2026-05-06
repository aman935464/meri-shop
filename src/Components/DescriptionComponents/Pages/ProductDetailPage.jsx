import { useParams } from "react-router-dom";
import useProductData from "../../../Api/ProductQuery";
import useProductStore from "../../../store/useProductStore";
import "../Styles.css";
import { useEffect } from "react";
import ProductImages from './ProductImages.jsx';
import ProductSummary from "./ProductSummary";


export default function ProductDetailPage() {
  const { id } = useParams();
  const { data } = useProductData();
  const { setProduct } = useProductStore();

  const product = data?.find((item) => item.id === Number(id));

  useEffect(() => {
    if (product) setProduct(product);
  }, [product]);

  return (
    <div id="product-detail">
      <div id="left-section">
        <ProductImages />
      </div>
      <div id="right-section">
        <ProductSummary />
      </div>
    </div>
  );
}

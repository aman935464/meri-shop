import { useParams } from "react-router-dom";
import useProductData from "../../../Api/ProductQuery";
import FirstDetailPage from "./FirstDetailPage";
import SecondDetailPage from "./SecondDetailPage";
import useProductStore from "../../../store/useProductStore";
import "../Styles.css";
import { useEffect } from "react";

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
      <div id="left">
      <FirstDetailPage />
      </div>
      <div id="right">
      <SecondDetailPage />
      </div>
    </div>
  );
}

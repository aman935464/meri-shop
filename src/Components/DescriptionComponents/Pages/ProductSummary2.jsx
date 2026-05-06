import React from "react";
import useProductStore from "../../../store/useProductStore";

export default function ProductSummary2() {
  const { product } = useProductStore();
  return (
    <div>
      <h2>Product Details</h2>
      <h3>Top highlights</h3>
      <ul className="list-disc ml-5 space-y-1">
      {
        product?.features?.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        }
        </ul>

    </div>
  )
}

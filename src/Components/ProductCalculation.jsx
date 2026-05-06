import React from "react";
import useProductStore from "../store/useProductStore";

export default function ProductCalculation() {
  const { product } = useProductStore();
  const discount = product?.discount || 0;
  const currentPrice = Number(
    product?.price - (product?.price * discount) / 100,
  ).toFixed(1);

  return (
    <div className="grid ">
      <span className="flex gap-3 items-center">
      <h5 className="text-[var(--btn)] font-semibold text-[clamp(14px,2vw,24px)]">-{discount}%</h5>
      <h4 className="text-[var(--text)] text-[clamp(12px,)]">
        {product?.currency}
        {currentPrice}
      </h4>
      </span>
      <span className="flex text-[clamp(10px,1.5vw,16px)]">
        <pre>M.R.P.: </pre>
        <h4 className="pre-price">
          {product?.currency}
          {product?.price}
        </h4>
      </span>
    </div>
  );
}

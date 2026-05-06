import useRenderStars from "../../../Hooks/useStarRating";
import useProductStore from "../../../store/useProductStore";
import ProductCalculation from "../../ProductCalculation";
import ProductSummary2 from "./ProductSummary2";

export default function SecondDetailPage() {
  const { product } = useProductStore();

  return (
    <>
      <h2 className="hidden max-[600px]:block font-semibold font-[Times_New_Roman] text-[clamp(14px,1.5vw,18px)] text-[var(--text)]">
        {product?.title}
      </h2>
      <h2 className="block max-[600px]:hidden font-semibold font-[Cambria,Cochin,Georgia,Times,serif] text-[clamp(12px,1.5vw,18px] text-[var(--text)]">
        {product?.description}
      </h2>
      <p className="text-sm font-semibold font-[Times_New_Roman] text-[clamp(10px,1vw,14px)] text-[var(--btn)]">
        Brand: <b className="text-[var(--text)]">{product?.brand}</b>
      </p>
      <div className="flex items-center gap-1">
        {useRenderStars(product?.rating)}
        <span className="ml-2 text-sm text-[var(--btn)]">({product?.rating})</span>
      </div>
      <ProductCalculation />
      <ProductSummary2 />
    </>
  );
}

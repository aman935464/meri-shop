import Skeleton from "react-loading-skeleton";
import useFilteredProduct from "../Hooks/useFilteredProduct.js";
export default function HomeSkeleton() {
  const {categoryData, filteredProducts} = useFilteredProduct();
  return (
    <div>
      <div className="swiper">
          <Skeleton
          variant="rectangular"
          width="100%"
          height={30}
          />
      </div>
      <div className="productContainer">
        {filteredProducts?.map((_, i) => (
          <div
            key={i}
            className="productCard"
          >
            <Skeleton variant="rectangular" height={140} borderRadius={10} animation="wave"/>
            <Skeleton variant="rectangular" height={15}/>
            <Skeleton variant="rectangular" height={15} width="80%" />
            <Skeleton variant="rectangular" height={18} width="40%" className="mt-2" />
          </div>
        ))}

      </div>
    </div>
  );
}
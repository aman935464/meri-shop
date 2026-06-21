import React from "react";
import HomeProduct from "./Page/HomeProduct";
import HomeSkeleton from "../../Skeleton/HomeSkeleton.jsx"
import ProductCategortNavigation from "./Page/ProductCategoryNavigation";
import useFilteredProduct from "../../Hooks/useFilteredProduct.js";
import NotFoundPage from "../../Pages/NotFoundPage.jsx";

export default function Home({ query }) {
  const { filteredProducts, isLoading } = useFilteredProduct();
  if (isLoading) {
    return <HomeSkeleton/>
  }
  return (
    <div className="home">
      <ProductCategortNavigation />
      {filteredProducts.length === 0 ? (
        <NotFoundPage/>
      ) : (
        <HomeProduct />
      )}
    </div>
  );
}

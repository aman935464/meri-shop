import React, { useMemo, useState } from "react";
import useProductData from "../Api/ProductQuery.jsx";
import useProductStore from "../store/useProductCategoryProvider";

const useFilteredProduct = () => {
  const { data = [], isLoading, error} = useProductData();
  const {selectedCategory, setSelectedCategory} = useProductStore();

  const categoryData = useMemo(() => {
    return ["all", ...new Set(data.map((cat) => cat.category))];
  }, [data]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return data;
    return data.filter((item) => item.category === selectedCategory)
  }, [data, selectedCategory]);

  return {
    categoryData,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    isLoading,
    error
  };
};

export default useFilteredProduct;

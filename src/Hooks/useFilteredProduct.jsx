import React, { useDeferredValue, useMemo, useState } from "react";
import useProductData from "../Api/ProductQuery.jsx";
import useProductStore from "../store/useProductStore.js";
import useDebounce from "./useDebounce.jsx";

const useFilteredProduct = () => {
  const { data = [], isLoading, error } = useProductData();
  const {
    selectedCategory,
    setSelectedCategory,
    selectedQuery,
    setSelectedQuery,
  } = useProductStore();
  const deferredQuery = useDebounce(selectedQuery, 700);

  const categoryData = useMemo(() => {
    return ["all", ...new Set(data.map((cat) => cat.category))];
  }, [data]);

  const filteredProducts = useMemo(() => {
    let result = data;
    if (selectedCategory === "all") {
      result = data;
    } else {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (deferredQuery.trim() !== "") {
      const query = deferredQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item?.title.toLowerCase().includes(query) ||
          item?.category.toLowerCase().includes(query) ||
          item?.brand.toLowerCase().includes(query) ||
          item?.description.toLowerCase().includes(query) ||
          item?.price.toString().includes(query) ||
          item?.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          item?.features.some((feature => feature.toLowerCase().includes(query)) )
      );
    }
    return result;
  }, [data, selectedCategory, deferredQuery]);

  return {
    categoryData,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    selectedQuery,
    setSelectedQuery,
    isLoading,
    error,
  };
};

export default useFilteredProduct;

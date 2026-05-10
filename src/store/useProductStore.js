import { create } from "zustand";

const useProductStore = create((set) => ({
  product: null,
  setProduct: (product) => set({ product: product }),

  selectedCategory: "all",
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  selectedQuery: "",
  setSelectedQuery: (query) => set({ selectedQuery: query }),
}));

export default useProductStore;

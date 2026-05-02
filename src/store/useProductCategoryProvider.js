import { create } from "zustand";

const useProductStore = create((set) => ({
  selectedCategory: "all",
  setSelectedCategory: (category) => 
    set({selectedCategory: category}),
  
}))


export default useProductStore;
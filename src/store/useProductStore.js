import { create } from "zustand";

const useProductStore = create((set) => ({
  product: null,
  setProduct: (product) => {
    set({product : product})
  }
}))

export default useProductStore;
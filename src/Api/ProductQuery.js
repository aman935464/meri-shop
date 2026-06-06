import Api from "./Api.js";
import { useQuery } from "@tanstack/react-query";

const ProductApi = async () => {
  const res = await Api.get("/products");
  
  return res.data.products;
};


const useProductData = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: ProductApi,
  });
};




export default useProductData;

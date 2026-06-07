import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductApi = async () => {
  const res = await axios.get("https://mocki.io/v1/3cbc6243-855d-4580-9563-8f8d376f016a");
  return res.data;
};


const useProductData = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: ProductApi,
  });
};


export default useProductData;

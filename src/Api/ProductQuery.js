import { Axios } from "axios";
import Api from "./Api.js";
import { useQuery } from "@tanstack/react-query";

const ProductApi = async () => {
  const res = await Axios.get("https://mocki.io/v1/2ff45da8-562b-41f7-9aeb-fcf84784e1a2");
  
  return res.data;
};


const useProductData = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: ProductApi,
  });
};




export default useProductData;

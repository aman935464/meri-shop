import { useQuery } from "@tanstack/react-query";
import Api from "./Api";

const ProductApi = async () => {
  const response = await Api.get("/products");
  
  return response?.data?.data;
}

const useProductData = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: ProductApi,
    staleTime: 2*60*1000,
    retry: 4,
    retryDelay: 10*1000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    gcTime: 5*60*1000,
    
  });
};


export default useProductData;

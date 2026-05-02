import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ProductApi = async () => {
  let res = await axios.get(
    "https://mocki.io/v1/5a9d8bc4-b7ca-4e2a-8ba4-105a8d63ce45",
  );
  return res.data;
};

// const ProductApi = async () => {
//   try {
//     const [api1, api2] = await Promise.all([
//       axios.get("https://mocki.io/v1/5a9d8bc4-b7ca-4e2a-8ba4-105a8d63ce45"),
//       axios.get("https://mocki.io/v1/a4fb28d8-dc41-477e-85a0-0272e24a205b"),
//     ])
//     return [...api1.data, ...api2.data]

//   } catch (error) {
//     return error;
//   }
// }


const useProductData = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: ProductApi,
  });
};




export default useProductData;

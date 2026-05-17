import { RouterProvider } from "react-router-dom";
import Router from "./Router/RouteProvider.jsx";
import { useAuthStore } from "./store/authStore.js";
import { useEffect } from "react";
function App() {
  const { getProfile } = useAuthStore();
  useEffect(() => {
    getProfile()
  }, [])


  return <RouterProvider router={Router} />;
}

export default App;

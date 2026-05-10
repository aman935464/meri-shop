import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'react-loading-skeleton/dist/skeleton.css'
import "./index.css";
// import "./App.css";
import App from "./App.jsx";
import ThemeProvider from "./store/useThemeProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const clientQuery = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={clientQuery}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);

import { createRoot } from "react-dom/client";
import "../src/css/index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";

const queryClient = new QueryClient();
const App = lazy(() => import("./App.jsx"));
import { Provider } from "react-redux";
import LazyLoading from "./components/lazy-loading/Lazy-loading";
import store from "./redux";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<LazyLoading />}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </Suspense>
  </BrowserRouter>
);

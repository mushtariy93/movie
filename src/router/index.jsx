import { useRoutes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Detail from "../pages/detail/Detai";
import Layout from "../pages/layout/Layout";
import Latest from "../pages/latest/Latest";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/latest",
          element: <Latest />,
        },
        {
          path: "/product/:id",
          element: <Detail />,
        }
      ],
    },
  ]);
};
export default Router;

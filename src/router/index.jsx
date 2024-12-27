import { useRoutes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Detail from "../pages/detail/Detai";
import Layout from "../pages/layout/Layout";
import Latest from "../pages/latest/Latest";
import MyMovies from "../pages/movies-page/move";
import Saved from "../pages/saved/Saved";
import NotFound from "../pages/not-found/NotFound";

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
        },
        {
          path: "movies",
          element: <MyMovies />,
        },
        {
          path: "/saved",
          element: <Saved />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
};
export default Router;

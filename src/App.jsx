import React from "react";
import Router from "./router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Router />
    </>
  );
};

export default App;

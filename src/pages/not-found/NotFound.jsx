import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center bg-white p-8 sm:p-10 md:p-12 rounded-xl shadow-xl max-w-md w-full">
        <h1 className="text-7xl sm:text-9xl text-purple-600 font-extrabold mb-4">
          404
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
          {t("not_found.title")}
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          {t("not_found.button_title")}
        </button>
      </div>
    </div>
  );
};

export default NotFound;

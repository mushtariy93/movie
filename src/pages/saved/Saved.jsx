import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Movies from "../../components/movies/Movies";
import { useTranslation } from "react-i18next";

const Saved = () => {
  const { t } = useTranslation();
  const movies = useSelector((s) => s.saved.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {movies.length > 0 ? (
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-red-500 mb-6 max-[600px]:text-xl">
              {t("saved_messages.title")}
            </h1>
            <Movies data={[...movies].reverse()} bg="bg-black" />
          </div>
        ) : (
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-4 max-[600px]:text-2xl">
              {t("saved_messages.empty_title")}
            </p>
            <p className="text-lg text-gray-400 max-[600px]:text-sm">
              {t("saved_messages.empty_message")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;

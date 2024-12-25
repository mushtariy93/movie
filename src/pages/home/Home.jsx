import { request } from "@/api";
import Carousel from "@/components/carousel/Carousel";
import Movies from "@/components/movies/Movies";
import React, { memo, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Genre from "../../components/genre/Genre";


const Home = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState(null);
  const [selectGenre, setSelectGender] = useState([]);
  

  console.log(data);

  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log(page);

  useEffect(() => {
    request.get("/genre/movie/list").then((res) => setGenres(res.data.genres));
  }, []);

  console.log(genres);

  useEffect(() => {
    request("/discover/movie", {
      params: {
        page,
        without_genres: "18,10749,99",
        with_genres: selectGenre.join(","),
      },
    }).then((res) => {
      setData(res.data);
    });
  }, [page, selectGenre]);

  

  return (
    <div className="bg-secondar text-white  bg-white dark:bg-gray-900">
      <Genre
        selectGenre={selectGenre}
        data={genres}
        setSelectGender={setSelectGender}
      />
      <Carousel movies={data?.results} />

      <Movies data={data} />
      <div className="flex justify-center py-6">
        <Pagination
          page={page}
          onChange={handleChange}
          count={data?.total_pages <= 500 ? data.total_pages : 500}
          className="ext-blue-600/100"
        />
      </div>
    </div>
  );
};

export default memo(Home);

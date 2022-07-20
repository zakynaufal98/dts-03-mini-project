import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../Components/Carousel.jsx";

const ListMoviePopular = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseFromTMDB = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=15c23c801b8646b6fa32283ec6c7c54f"
        );

       
        setMovies(responseFromTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <div className="my-5 text-white">
      <p>Popular Movies</p>
      <div className="flex gap-1 overflow-x-auto">
        {movies.map((movie) => {
          return <Carousel key={movie.id} propsMovie={movie} type="poster" />;
        })}
      </div>
    </div>
  );
};

export default ListMoviePopular;

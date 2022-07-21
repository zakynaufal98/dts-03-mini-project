import React, { useState, useEffect } from "react";
import axios from "axios";
import CarouselSeries from "../Components/CarouselSeries";

const AiringToday = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseFromTMDB = await axios.get(
          "https://api.themoviedb.org/3/tv/airing_today?api_key=15c23c801b8646b6fa32283ec6c7c54f"
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
      <p className="mb-2">Airing Today</p>
      <div className="flex gap-1 overflow-x-auto">
        {movies.map((movie) => {
          return <CarouselSeries key={movie.id} propsMovie={movie} type="poster" />;
        })}
      </div>
    </div>
  );
};

export default AiringToday;

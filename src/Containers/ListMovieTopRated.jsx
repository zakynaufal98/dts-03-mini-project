import React, { useState, useEffect } from "react";
import axios from "axios";
import Original from "../Components/Original.jsx";

const ListMoviePopular = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseFromTMDB = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=15c23c801b8646b6fa32283ec6c7c54f"
        );

        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setMovies(responseFromTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <div className="flex border-2 gap-1 overflox-x-auto">
      {movies.map((movie) => {
        return <Original key={movie.id} propsMovie={movie}/>;
      })}
    </div>
   
  );
};

export default ListMoviePopular;

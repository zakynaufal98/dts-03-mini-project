import ListMoviePopular from "../Containers/ListMoviePopular";
import ContinueWatching from "../Containers/ContinueWatching";
import ListMovieTopRated from "../Containers/ListMovieTopRated";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  let { movieId } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseFromTMDB = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=15c23c801b8646b6fa32283ec6c7c54f`
        );

        setMovies(responseFromTMDB.data);
        console.log();
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

<<<<<<< HEAD
        fetchDataMovies();
    }, [movieId]);

    const ImageIMDB = 'https://image.tmdb.org/t/p/original';
    
    return (
        
        <div >
            <img src={`${ImageIMDB}${movies.backdrop_path}`} className="min-h-[13.1875rem] bg-slate-400 w-screen" />
            <div className="p-4">
                <div className="my-14">
                    <h1 className="text-2xl">Description</h1>
                    <p className="text-lg">{movies.overview}</p>
                </div>
                <ListMoviePopular />
                <ContinueWatching />
                <ListMovieTopRated />
            </div>
=======
  const ImageIMDB = "https://image.tmdb.org/t/p/original";

  return (
    <div className="text-white bg-[#201F1F]">
      <div className="">
        <img
          src={`${ImageIMDB}${movies.backdrop_path}`}
          alt={movies.name}
          className="min-h-[13.1875rem] bg-slate-400 "
        />
        <div className="my-14 px-4 max-w-[40rem] min-w-[20rem] border-2 mx-4 py-4 ">
          <h1 className="text-[3rem] text-gray-400 font-semibold">{movies.title}</h1>
          <p className="text-base py-2 text-justify">{movies.overview}</p>
          <div className="flex gap-5">
            <button className="flex items-center bg-white text-black gap-2 px-4 py-4 rounded text-xl hover:brightness-75">
              <PlayIcon className="w-10 h-10 " />
              Play
            </button>
            <button className="flex items-center bg-gray-700 text-white gap-3 px-4 py-4 rounded text-xl hover:brightness-75">
              <InformationCircleIcon className="min-w-10 h-10 " />
              More Information
            </button>
          </div>
>>>>>>> dc30f6dbe49bc84b1687c3ad8bcdc221692fa77a
        </div>
      </div>
      <div className="p-4 ">
        <ListMoviePopular />
        <ContinueWatching />
        <ListMovieTopRated />
      </div>
    </div>
  );
}

export default Details;

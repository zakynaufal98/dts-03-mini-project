import ListMoviePopular from "../Containers/ListMoviePopular"
import ContinueWatching from "../Containers/ContinueWatching"
import ListMovieTopRated from "../Containers/ListMovieTopRated"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"

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

                // Jangan lupa set statenya
                // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
                
                setMovies(responseFromTMDB.data);
                console.log()
            } catch (err) {
                console.log(err);
            }
        };

        fetchDataMovies();
    }, []);

    const ImageIMDB = 'https://image.tmdb.org/t/p/original';
    
    return (
        
        <div >
            <img src={`${ImageIMDB}${movies.backdrop_path}`} className="min-h-[13.1875rem] bg-slate-400" />
            <div className="p-4">
                <div className="my-14">
                    <h1 className="text-2xl">Description</h1>
                    <p className="text-lg">{movies.overview}</p>
                </div>
                <ListMoviePopular />
                <ContinueWatching />
                <ListMovieTopRated />
            </div>
        </div>
    )
}

export default Details
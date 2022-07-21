import Series from "../Containers/PopularSeries.jsx"
import AiringToday from "../Containers/AiringToday"
import TopRatedSeries from "../Containers/TopRatedSeries"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"

function DetailsSeries() {

    let { tvId } = useParams();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchDataMovies = async () => {
            try {
                // Gunakan instance tmdb di sini
                const responseFromTMDB = await axios.get(
                    `https://api.themoviedb.org/3/tv/${tvId}?api_key=15c23c801b8646b6fa32283ec6c7c54f`
                );
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
            <img src={`${ImageIMDB}${movies.backdrop_path}`} alt={movies.name} className="min-h-[13.1875rem] bg-slate-400" />
            <div className="p-4 bg-[#201F1F]">
                <div className="my-14">
                    <h1 className="text-2xl">Description</h1>
                    <p className="text-lg">{movies.overview}</p>
                </div>
                <Series />
                <TopRatedSeries />
                <AiringToday />
            </div>
        </div>
    )
}

export default DetailsSeries
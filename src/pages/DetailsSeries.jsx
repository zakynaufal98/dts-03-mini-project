import Series from "../Containers/PopularSeries.jsx"
import AiringToday from "../Containers/AiringToday"
import TopRatedSeries from "../Containers/TopRatedSeries"
import Embed from "../Components/Embed"
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"

function DetailsSeries() {

    let { tvId } = useParams();

    const [movies, setMovies] = useState([]);
    const [isPlay, setIsPlay] = useState(false)

    function playButton() {
        setIsPlay(!isPlay)
    }

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

        <div className="text-white bg-[#201F1F]">
            {isPlay ? (<Embed />) :
                (<div className="flex items-center">
                    <div className="absolute px-4 max-w-[50%] max-h-fit mx-4">
                        <h1 className="text-3 text-gray-400 font-semibold">{movies.title}</h1>
                        <p className="text-xs overflow-hidden py-2 text-justify leading-4 max-h-14">{movies.overview}</p>
                        <div className="flex gap-5 mt-3">
                            <button onClick={playButton} className="flex px-4 h-6 items-center bg-white text-black gap-2 rounded text-xs hover:brightness-75">
                                <PlayIcon className="w-4 h-4 " />
                                Play
                            </button>
                            <button className="flex px-4 h-6 items-center bg-gray-700 text-white gap-3 rounded text-xs hover:brightness-75">
                                <InformationCircleIcon className="w-6 h-6 " />
                                More Information
                            </button>
                        </div>
                    </div>

                    <img
                        src={`${ImageIMDB}${movies.backdrop_path}`}
                        alt={movies.name}
                        className="min-h-[13.1875rem] bg-slate-400"
                    />

                </div>)
            }

            <div className="p-4">
                <Series />
                <TopRatedSeries />
                <AiringToday />
            </div>
        </div>
    )
}

export default DetailsSeries
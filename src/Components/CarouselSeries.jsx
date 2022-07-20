import React from "react"
import {useNavigate} from "react-router-dom"
function Carousel(props) {
  
    const ImageIMDB = 'https://image.tmdb.org/t/p/w400/';
    const imgType = props.type === "poster" ? props.propsMovie.poster_path : props.propsMovie.backdrop_path

    let navigate = useNavigate();

    function openDetails(obj){
        console.log(obj)
        if(props.propsMovie)
        navigate(`../detailsSeries/${props.propsMovie.id}`, { replace: true });
    }

    return (
        <div className="">
            <img src={`${ImageIMDB}${imgType}`}
            alt="poster"
            className="min-w-[18rem] rounded hover:brightness-75 hover:border-green cursor-pointer"
            onClick={() => openDetails(props.propsMovie)}
            />
            <div className="flex ">
                
            </div>
        </div>
    )
}

export default Carousel
import React from "react"



function Carousel(props) {
  
    const ImageIMDB = 'https://image.tmdb.org/t/p/w400/';
    const imgType = props.type === "poster" ? props.propsMovie.poster_path : props.propsMovie.backdrop_path


    return (
        <div className="">
            <img src={`${ImageIMDB}${imgType}`} alt="poster" className="min-w-[18rem] rounded"/>
            <div className="flex ">
                
            </div>
        </div>
    )
}

export default Carousel


import React from "react"



function Original({propsMovie}) {
  
    const ImageIMDB = 'https://image.tmdb.org/t/p/w400/';

    return (
        <div className="">
            <img src={`${ImageIMDB}${propsMovie.poster_path}`} alt="poster" className=""/>
            <div className="flex ">
                
            </div>
        </div>
    )
}

export default Original


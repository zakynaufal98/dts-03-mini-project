import Series from "../Containers/PopularSeries.jsx"
import ListMoviePopular from "../Containers/ListMoviePopular"
import ListMovieTopRated from "../Containers/ListMovieTopRated"

// import Carousel from "./Carousel"

function Home() {
    return(
        <div className="p-4 bg-[#201F1F]">
            <Series />
            <ListMoviePopular />
            <ListMovieTopRated />
        </div>
    )
}

export default Home
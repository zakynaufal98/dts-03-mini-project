
import ContinueWatching from "../Containers/ContinueWatching"
import ListMoviePopular from "../Containers/ListMoviePopular"
import ListMovieTopRated from "../Containers/ListMovieTopRated"
import Carousel from "./Carousel"

function Main() {
    return(
        <div className="p-4 7bg-[#201F1F]">
            <ContinueWatching />
            <ListMoviePopular />
            <ListMovieTopRated />
        </div>
    )
}

export default Main

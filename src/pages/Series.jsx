import Series from "../Containers/PopularSeries.jsx"
import AiringToday from "../Containers/AiringToday"
import TopRatedSeries from "../Containers/TopRatedSeries"

// import Carousel from "./Carousel"

function Home() {
    return(
        <div className="p-4 bg-[#201F1F]">
            <Series />
            <TopRatedSeries />
            <AiringToday />
        </div>
    )
}

export default Home
import ListMoviePopular from "../Containers/ListMoviePopular"
import ContinueWatching from "../Containers/ContinueWatching"
import ListMovieTopRated from "../Containers/ListMovieTopRated"

function MovieSelected() {
    return (
        <div >
            <div className="min-h-[13.1875rem] bg-slate-400">Embedded</div>
            <div className="p-4">
                <div className="my-14">
                    <h1 className="text-2xl">Description</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam animi ducimus dignissimos. Illo voluptatem, tempore illum, ipsam in placeat incidunt odio molestiae provident porro possimus libero deserunt laudantium similique fugiat!</p>
                </div>
                <ListMoviePopular />
                <ContinueWatching />
                <ListMovieTopRated />
            </div>
        </div>
    )
}

export default MovieSelected
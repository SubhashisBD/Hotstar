import React from 'react'
import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {

    if (!movies) return null;

    return (
        <div className="px-4 bg-black ml-36 ">
            <h1 className="text-white py-4 text-3xl font-semibold">{title}</h1>
            <div className="flex gap-4 w-full overflow-x-auto scroll">
                {movies?.map((movies) => <MovieCard key={movies.id} poster_path={movies.poster_path} />)}
            </div>

        </div>
    )
}

export default MovieList;

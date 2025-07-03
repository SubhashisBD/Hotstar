import React from 'react'
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (
    <div >
      <div className="bg-black ">
        <div className="-mt-32">
          <MovieList title={"Now Playing Movies"} movies={movies.nowPlaying} />
          <MovieList title={"Popular Movies"} movies={movies.popular} />
          <MovieList title={"Top Rated Movies"} movies={movies.upcoming} />
          <MovieList title={"Upcoming Movies"} movies={movies.topRated} />
        </div>

      </div>

    </div>
  )
}

export default SecondaryContainer;

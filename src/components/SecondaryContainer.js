import React from 'react'
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import SportsList from "./SportsList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  const cricket = useSelector((store)=>store.cricket)

  return (
    <div >
      <div className="bg-black ">
        <div className="-mt-32">
          <MovieList title={"Now Playing Movies"} movies={movies.nowPlaying} />
          <MovieList title={"Popular Movies"} movies={movies.popular} />
          <MovieList title={"Top Rated Movies"} movies={movies.upcoming} />
          <MovieList title={"Upcoming Movies"} movies={movies.topRated} />
          <SportsList title ={"Cricket"} cricket = {cricket.indEngland}/>
        </div>

      </div>

    </div>
  )
}

export default SecondaryContainer;

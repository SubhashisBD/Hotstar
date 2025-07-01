import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useGetTopRated = () => {

    const getTopRated = async () => {
        const url = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION);
        const data = await url.json();
        // console.log("TOP RATED");
        // console.log(data.results);
    }
    useEffect(() => {
        getTopRated();
    }, [])
}

export default useGetTopRated;
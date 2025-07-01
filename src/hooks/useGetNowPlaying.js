import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useGetNowPlaying = () => {

    const getNowPlaying = async () => {
        const url = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION);
        const data = await url.json();
        console.log("NOW PLAYING")
        console.log(data.results);
    }
    useEffect(() => {
        getNowPlaying();
    }, [])
}

export default useGetNowPlaying;
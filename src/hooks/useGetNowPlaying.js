import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const useGetNowPlaying = () => {
    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        const url = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=hi-IN&page=1', API_OPTION);
        const data = await url.json();

        dispatch(addNowPlaying(data.results));
        console.log(data.results);
    }
    useEffect(() => {
        getNowPlaying();
    }, [])
}

export default useGetNowPlaying;
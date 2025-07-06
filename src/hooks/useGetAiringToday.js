
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addAiringTodayTv } from "../utils/movieSlice";

const useGetAiringToday = () => {
    const dispatch = useDispatch();
    const getAiring = async () => {
        const url = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', API_OPTION);
        const data = await url.json();
        dispatch(addAiringTodayTv(data.results));
    }
    useEffect(() => {
        getAiring()
    }, []);
}

export default useGetAiringToday;

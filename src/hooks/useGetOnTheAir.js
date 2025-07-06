
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import {  addOnTheAirTv } from "../utils/movieSlice";

const useGetOnTheAir = () => {
    const dispatch = useDispatch();
    const getAiring = async () => {
        const url = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', API_OPTION);
        const data = await url.json();
        dispatch(addOnTheAirTv(data.results));
    }
    useEffect(() => {
        getAiring()
    }, []);
}

export default useGetOnTheAir;

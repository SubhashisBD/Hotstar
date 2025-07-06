
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import {  addPopularTv } from "../utils/movieSlice";

const useGetPopularTv = () => {
    const dispatch = useDispatch();
    const getAiring = async () => {
        const url = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTION);
        const data = await url.json();
        dispatch(addPopularTv(data.results));
    }
    useEffect(() => {
        getAiring()
    }, []);
}

export default useGetPopularTv;

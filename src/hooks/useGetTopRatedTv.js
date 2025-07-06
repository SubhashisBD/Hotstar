
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import {  addTopRatedTv } from "../utils/movieSlice";

const useGetTopRatedTv = () => {
    const dispatch = useDispatch();
    const getAiring = async () => {
        const url = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTION);
        const data = await url.json();
        dispatch( addTopRatedTv(data.results));
    }
    useEffect(() => {
        getAiring()
    }, []);
}

export default useGetTopRatedTv;

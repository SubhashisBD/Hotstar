
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const useGetPopular = () => {
    const dispatch = useDispatch();
    const getPopular = async () => {
        const url = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION);
        const data = await url.json();
        // console.log(data.results);
        dispatch(addPopular(data.results));
    }
    useEffect(() => {
        getPopular()
    }, []);
}

export default useGetPopular;

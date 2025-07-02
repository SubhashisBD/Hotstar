import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const useGetTopRated = () => {

    const dispatch = useDispatch();

    const getTopRated = async () => {
        const url = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION);
        const data = await url.json();
        
        dispatch(addTopRated(data.results));
        
    }
    useEffect(() => {
        getTopRated();
    }, [])
}

export default useGetTopRated;
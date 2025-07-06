
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";

const useGetUpcoming = () => {
    const dispatch = useDispatch();

    const getUpcoming = async () => {
        const url = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=hi-IN&page=1', API_OPTION);
        const data = await url.json();
        
        dispatch(addUpcoming(data.results))
        

    }
    useEffect(() => {
        getUpcoming()
    }, []);
}

export default useGetUpcoming;

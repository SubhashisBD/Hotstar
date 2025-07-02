import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const useGetDetails = () => {
    // const dispatch = useDispatch();

    const getDetails = async () => {
        const url = await fetch('https://api.themoviedb.org/3/movie/541671?api_key=00bfff38e3de2c230d04083147e9339c&language=en-US', API_OPTION);
        const data = await url.json();
        // console.log("DETAILS")
        // console.log(data)
        // dispatch(addNowPlaying(data.results));
    }
    useEffect(() => {
        getDetails();
    }, [])
}

export default useGetDetails;
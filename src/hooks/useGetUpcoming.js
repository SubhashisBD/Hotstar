
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useGetUpcoming = () => {
    const getUpcoming = async () => {
        const url = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION);
        const data = await url.json();
        // console.log("UPCOMING");
        // console.log(data.results);

    }
    useEffect(() => {
        getUpcoming()
    }, []);
}

export default useGetUpcoming;

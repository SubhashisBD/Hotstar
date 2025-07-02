import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const useGetDetails = () => {
    const dispatch = useDispatch();

    const getDetails = async () => {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/1376434/release_dates?api_key=00bfff38e3de2c230d04083147e9339c",
            API_OPTION
        );
        const data = await res.json();

        // Find certification for India (or US as fallback)
        const countryCert = data.results.find(
            (item) => item.iso_3166_1 === "IN"
        ) || data.results.find((item) => item.iso_3166_1 === "US");

        const certification = countryCert?.release_dates?.[0]?.certification || "Not Rated";

        // console.log(data);
        console.log("Certification:", certification);

        // You can dispatch if needed
        // dispatch(addNowPlaying(certification));
    };

    useEffect(() => {
        getDetails();
    }, []);
};

export default useGetDetails;

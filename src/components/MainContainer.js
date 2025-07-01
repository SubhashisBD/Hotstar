
import useGetNowPlaying from "../hooks/useGetNowPlaying";
import useGetPopular from "../hooks/useGetPopular";
import useGetTopRated from "../hooks/useGetTopRated";
import useGetUpcoming from "../hooks/useGetUpcoming";


const MainContainer = () => {
    useGetUpcoming();
    useGetTopRated();
    useGetPopular();
    useGetNowPlaying();

    return (
        <div>MainContainer</div>
    )
}

export default MainContainer;




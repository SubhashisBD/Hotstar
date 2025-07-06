
import useCricket from "../hooks/useCricket";
import useGetAiringToday from "../hooks/useGetAiringToday";
import useGetNowPlaying from "../hooks/useGetNowPlaying";
import useGetOnTheAir from "../hooks/useGetOnTheAir";
import useGetPopular from "../hooks/useGetPopular";
import useGetPopularTv from "../hooks/useGetPopularTv";
import useGetTopRated from "../hooks/useGetTopRated";
import useGetTopRatedTv from "../hooks/useGetTopRatedTv";
import useGetUpcoming from "../hooks/useGetUpcoming";
import SideBar from "./SideBar";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    useGetUpcoming();
    useGetTopRated();
    useGetPopular();
    useGetNowPlaying();
    useCricket();
    useGetAiringToday();
    useGetPopularTv();
    useGetTopRatedTv();
    useGetOnTheAir();

    return (
        <div className="scroll">
            <div className="relative h-screen">
                <VideoBackground />
                <SideBar />
                <VideoTitle />
            </div> 
        </div>
    )
}

export default MainContainer;





import useDummyyApi from "../hooks/useDummyyApi";
import useGetNowPlaying from "../hooks/useGetNowPlaying";
import useGetPopular from "../hooks/useGetPopular";
import useGetTopRated from "../hooks/useGetTopRated";
import useGetUpcoming from "../hooks/useGetUpcoming";
import SideBar from "./SideBar";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    useGetUpcoming();
    useGetTopRated();
    useGetPopular();
    useGetNowPlaying();
    useDummyyApi();

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




import { useSelector } from "react-redux";

const VideoBackground = () => {

    const imgBg = useSelector((store) => store.movies?.nowPlaying);

    if (!imgBg) return;
    const {backdrop_path } = imgBg[0];

    return (
        <div className=" h-screen w-screen overflow-hidden -z-20 absolute">
            <img
                src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}  
                alt="movie background"
                className="w-full h-full object-cover object-center"
            />
        </div>
    )
}

export default VideoBackground;
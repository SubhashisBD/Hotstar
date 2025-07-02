import React from 'react'
import { useSelector } from "react-redux";
import useGetDetails from "../hooks/useGetDetails"
import useCertification from "../hooks/useCertification"

const VideoTitle = () => {
  useGetDetails();
  useCertification();

  const movieDescription = useSelector((store) => store.movies?.nowPlaying);
  // console.log(movieDescription)

  if (!movieDescription || movieDescription.length === 0) return null;

  const { original_title, overview, release_date, original_language,id } = movieDescription[0]

  
  

  return (
    <div className="absolute  z-30 mt-52 ml-44 ">
      <h1 className="text-white font-bold text-3xl" >{original_title}</h1>
      <p className="text-white">{release_date}</p>
      <p className="text-white w-1/3">{overview}</p>
    </div>
  )
}

export default VideoTitle;

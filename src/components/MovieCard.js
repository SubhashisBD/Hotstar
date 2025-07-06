import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null;
  return (
    <div>
      <img className="min-w-48 max-w-48 min-h-60  rounded-lg cursor-pointer hover:scale-95 transition-all" alt="Movie Card" src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default MovieCard;

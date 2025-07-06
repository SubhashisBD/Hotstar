const SportsCard = ({ poster_path }) => {
  if (!poster_path) return null;

  return (
    <div className="w-48 flex-shrink-0 ">
      <img
        className="w-full min-h-80 object-cover rounded-xl shadow-lg hover:scale-95 transition-transform duration-300 p-0 m-0"
        alt="Sports Card"
        src={poster_path}
      />
    </div>
  );
};

export default SportsCard;

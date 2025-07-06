import SportsCard from "./SportsCard";

const SportsList = ({ title, cricket }) => {

    if (!cricket) return null;

    return (
        <div className="px-4 bg-black ml-36 ">
            <h1 className="text-white py-4 text-3xl font-semibold">{title}</h1>
            <div className="flex gap-4 w-full overflow-x-auto scroll">
                {cricket?.map((item, index) => (
                    <SportsCard
                        key={index}
                        poster_path={item?.snippet?.thumbnails?.high?.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default SportsList




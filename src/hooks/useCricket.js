import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addindEngland } from "../utils/cricketSlice";
import { YOUTUBE_KEY } from "../utils/constant";

const useCricket = () => {

    const dispatch = useDispatch();

    const getApi = async () => {

       const cricket = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=India%20vs%20England%20Highlights&type=video&channelId=UCz1D0n02BR3t51KuBOPmfTQ&order=date&maxResults=10&key=${YOUTUBE_KEY}`;


        const url = await fetch(cricket)

        const data = await url.json();

        console.log(data.items)
        dispatch(addindEngland(data.items));
    }
    useEffect(() => {
        getApi();
    }, [])
}

export default useCricket;
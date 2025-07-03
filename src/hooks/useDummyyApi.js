import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useDummyyApi = () => {


    const getApi = async () => {

        const url = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=India%20vs%20England%20Highlights&type=video&maxResults=10&key=AIzaSyBL7GrfjQw-6gyepfewwoJiAX27Kxdh7ks")

        const data = await url.json();

        console.log(data)
    }
    useEffect(() => {
        getApi();
    }, [])
}

export default useDummyyApi;
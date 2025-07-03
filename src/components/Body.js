import React from 'react'
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import SecondaryContainer from "./SecondaryContainer";

const Body = () => {
    return (
        <div >
            <div className="relative">
                <MainContainer />
            </div>
            <div className=" relative">
                <SecondaryContainer />
            </div>
        </div>

    )
}

export default Body;
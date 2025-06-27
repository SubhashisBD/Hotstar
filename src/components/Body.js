import React from 'react'
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import SecondaryContainer from "./SecondaryContainer";

const Body = () => {
    return (
        <div>
            <div>
              <SideBar/>
            </div>
            <div>
                <MainContainer/>
                <SecondaryContainer/>
            </div>
        </div>
    )
}

export default Body;
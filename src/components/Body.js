import React from 'react'
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import SecondaryContainer from "./SecondaryContainer";
import { createBrowserRouter, RouterProvider } from "react-router";
import Search from "./Search";


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: (
                <div>
                    <MainContainer />
                    <SecondaryContainer />
                </div>
            )
        },
        {
            path: "/search",
            element: <Search />
        },
    ])
    return (
        <RouterProvider router={appRouter}>
            <div>
                <div className="relative">
                    <MainContainer />
                </div>
                <div className="relative">
                    <SecondaryContainer />
                </div>
            </div>
        </RouterProvider>
    );
};

export default Body;
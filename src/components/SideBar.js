import React from 'react'
import { Search } from 'lucide-react';
import { House } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Popcorn } from 'lucide-react';
import { Bike } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const SideBar = () => {
    return (
        <div className="py-4 px-8 flex flex-col gap-10 w-5/12 h-screen bg-gradient-to-r from-black  absolute z-20">
            <div className="mt-8">
                <img src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png" alt="logo" className="h-9 w-9" />
                <div className="flex flex-col gap-10 mt-28">
                    <House className="text-white"/>
                    <Search className="text-white"/>
                    <Monitor className="text-white"/>
                    <Popcorn className="text-white"/>
                    <Bike className="text-white"/>
                    <CircleUserRound className="text-white"/>
                </div>

            </div>
        </div>
    )
}

export default SideBar;
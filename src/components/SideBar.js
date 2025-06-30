import React from 'react'
import { Search } from 'lucide-react';
import { House } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Popcorn } from 'lucide-react';
import { Bike } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const SideBar = () => {
    return (
        <div className="py-4 px-8 flex flex-col gap-10 w-1/12 h-screen bg-gradient-to-r from-black">
            <div>
                <img src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png" alt="logo" className="h-9 w-9" />
                <div className="flex flex-col gap-10 mt-14">
                    <House />
                    <Search />
                    <Monitor />
                    <Popcorn />
                    <Bike />
                    <CircleUserRound />
                </div>

            </div>
        </div>
    )
}

export default SideBar;
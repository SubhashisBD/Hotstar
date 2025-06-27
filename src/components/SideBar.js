import React from 'react'
import { Search } from 'lucide-react';
import { House } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Popcorn } from 'lucide-react';
import { Bike } from 'lucide-react';
import { CircleUserRound  } from 'lucide-react';

const SideBar = () => {
    return (
        <div>
            <div className="py-4 px-3 flex flex-col gap-10">
                <House />
                <Search />
                <Monitor />
                <Popcorn />
                <Bike />
                 <CircleUserRound  />
            </div>
        </div>
    )
}

export default SideBar;
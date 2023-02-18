import React from 'react'
import Image from "next/image";   
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/solid";

function Header() {
  return (
    <header>
        {/* Top nav */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image
            src="https:/links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            />
            </div>
            <div className='hidden sm:flex h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                <input className='p-2 flex-grow flex-shrink rounded-l-md h-full w-6 focus:outline-none px-4' type="text" />
                <SearchIcon className="h-12 p-4" />
            </div>
            {/* right */}
            <div className='text-white flex mx-6 whitespace-nowrap intems-center text-xs space-x-6 '>
                <div  className='cursor-pointer link ' >
                    <p>hello d</p>
                    <p className='font-extrabold md:text:sm '>Account & list</p>

                </div>
                <div className='cursor-pointer link '>
                <p>return &</p>
                <p className='font-extrabold md:text:sm'>order</p>

                </div>
                <div className='relative flex items-center cursor-pointer link'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 rounded-full text-black font-bold w-4 text-center bg-yellow-400'>0</span>
                    <ShoppingCartIcon className='h-10'/>
                    <p className='hidden md:inline mt-2 font-extrabold md:text:sm'>Basket</p>
                </div>

            </div>
        </div>
        {/* bottom nav */}
        <div className='text-white flex p-2 pl-6 items-center space-x-3 bg-amazon_blue-light'>
                <MenuIcon className='h-6 mr-1'/>
            <p className='link pl-3 flex items-center'>
                All
            </p>
            <p className='link pl-3'> Prime Video</p>
            <p className='link pl-3'> Amazon Buisness</p>
            <p className='link pl-3'> Todays deals</p>
            <p className='link pl-3 hidden lg:inline-flex'> Electronics</p>
            <p className='link pl-3 hidden lg:inline-flex'> Food </p>
            <p className='link pl-3 hidden lg:inline-flex'> Prime</p>
            <p className='link pl-3 hidden lg:inline-flex'> Buy Again</p>
            <p className='link pl-3 hidden lg:inline-flex'> Shopper Toolkit</p>
            <p className='link pl-3 hidden lg:inline-flex'> Health & Personal care</p>

        </div>
    </header>
    
  )
}

export default Header
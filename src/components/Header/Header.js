import Logo from '../Assets/buyist.png'

import Searchbar from '../Searchbar/Searchbar'

import {FaRegHeart} from 'react-icons/fa'
import {FiShoppingBag} from 'react-icons/fi'
import React from 'react'

const header = () => {
    return (
        <div className="w-full mx-auto  bg-gray-50 flex-shrink-0 shadow h-14 flex p-9 text-3xl sm:w-full md-full">
           <div className="w-full flex items-center justify-between">
                <span href=""className="justify-center items-center flex">
                    <img src={Logo} alt="logo" style={{height:"12vh"}}/>
                </span>
                <div className='flex p-6 space-x-6 justify-center items-center '>
                    <div>
                    <button className='hidden sm:block text-lg p-2 w-full focus:text-yellow-500 focus:outline-none'>
                     SHOP
                    </button>
                    </div>
                    <div className="sm:text-2xl ">
                    <Searchbar />
                    </div>
                    <div className="sm:text-2xl relative inline-block">
                    <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full">1</span>
                    <FaRegHeart />
                    </div>
                    <div className="sm:text-2xl relative inline-block">
                    <FiShoppingBag/>
                    <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full">1</span>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default header

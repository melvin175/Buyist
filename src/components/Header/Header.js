import Logo from './Img/buyist.png'

import Searchbar from './Searchbar'

import {FaRegHeart} from 'react-icons/fa'
import {FiShoppingBag} from 'react-icons/fi'
import React from 'react'

const header = () => {
    return (
        <div className="w-full mx-auto  bg-gray-50  shadow h-14 flex p-9 text-3xl">
           <div className="w-full flex items-center justify-between">
                <a className="justify-center items-center flex">
                    <img src={Logo} style={{height:"12vh"}}/>
                </a>
                <div className='flex p-6 space-x-6 justify-center items-center '>
                    <div>
                    <button className='hidden sm:block text-lg p-2 w-full focus:text-yellow-500 focus:outline-none'>
                     SHOP
                    </button>
                    </div>
                    <div className="sm:text-2xl ">
                    <Searchbar />
                    </div>
                    <div className="sm:text-2xl ">
                    <FaRegHeart />
                    <span class="absolute top-3 right-25 inline-flex rounded-full h-5 w-5 bg-yellow-500 text-sm item-center justify-center font-bold">1</span>
                    </div>
                    <div className="sm:text-2xl inline-flex ">
                    <FiShoppingBag/>
                    <span class=" absolute top-3 right-12 inline-flex rounded-full h-5 w-5 bg-yellow-500 text-sm item-center justify-center font-bold">1</span>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default header

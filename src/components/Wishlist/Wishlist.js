import {BsHouseFill} from 'react-icons/bs'
import Tshirt from '../Assets/tshirt.png'

import React from 'react'



const Wishlist = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center item-center rounded-lg tracking-widest items-center bg-yellow-300  h-20 shadow-inner-xl">
               <span className="tracking-widest items-center text-3xl font-Bold">WISHLIST</span>
              <div className="p-1 mx-20 text-xs justify-center items-center relative inline-block">
                  <span className="flex"> <BsHouseFill className="mx-1"/> <p>Home {'>>'} Wishlist </p></span>
              </div>
            </div>

            <div className="m-2 leading-normal flex justify-center item-center">
                <div class="w-1/2 text-left bg-gray-100 shadow-lg rounded overflow-hidden m-4 sm:flex">
                    <div class="sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
                    <img src={Tshirt} />
                </div>
                <div class="px-6 py-4 flex-wrap">
                    <h2 class="mb-2 mt-3 text-base sm:text-xl capitalize opacity-80 font-black">Male T-shirts</h2>
                    <p class="mb-4 text-grey-dark text-sm">
                    corps d’ elite T-Shirt only for men
                    </p>
                    <div>
                    <p className='flex flex-col justify-items-center font-bold text-base sm:text-xl mb-2'>₹ 500
                        <span className='font-normal opacity-60 text-xs sm:text-sm line-through ml-2'>
                        ₹ 499
                        </span>
                    </p>
                    </div>
                    <div className="flex space-x-3">
                    <button class="py-3 px-6 bg-yellow-300 hover:bg-yellow-400 text-black hover:text-green-50 font-bold rounded-md mt-1 mb-2">
                     Add to cart
                    </button>
                    <button class="py-3 px-6 bg-yellow-300 hover:bg-yellow-400 text-black hover:text-green-50 font-bold rounded-md mt-1 mb-2">
                     Remove
                    </button>
                    </div>
                </div>

            </div>
        </div>
            
        </div>
    )
}

export default Wishlist

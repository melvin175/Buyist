
import React from 'react'

import Tshirt from '../Assets/tshirt.png'


const ProductCard = ({product}) => {
    return (
        <div className="m-2 my-3 flex flex-col rounded-lg overflow-hidden md:my-1 lg:my-2 xl:my-2  sm:shadow-lg sm:hover:shadow-2xl sm:transition-shadow tracking-wide bg-gray-100">
            <div className="relative w-full overflow-hidden">
                <div>
                    <span className='absolute bg-blue-200  text-xs font-bold rounded-md top-2 left-2 px-2 py-1 z-10'>-49%</span>
                    <div
                        className='relative  h-[40vh] min-h-full '>
                        <img
                            src={Tshirt}
                            alt='tshirt'
                        />
                    </div>
                </div>
                <div className='relative px-1 py-2 w-full'>
                    <h1 className='font-bold text-base sm:text-xl capitalize opacity-80 truncate'>{product?.title}</h1>
                    <p className='my-1 text-xs sm:text-sm text-gray-500 truncate'>{product?.description}</p>
                </div>
            </div>
            <div className="description flex flex-col w-full">
                <div>
                    <p className='flex flex-col justify-items-center font-bold text-base sm:text-xl mb-2'>₹ {product?.price}
                        <span className='font-normal opacity-60 text-xs sm:text-sm line-through ml-2'>
                        ₹ {product?.price}
                        </span>
                    </p>
                </div>
                <button className="bg-yellow-300 w-full h-12 font-bold tracking-widest hover:text-green-50 hover:bg-yellow-400 transition-colors focus:outline-none">ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductCard

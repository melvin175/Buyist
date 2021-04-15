import React from 'react'
import {handleMoveToCart, handleRemoveFromWishlist} from '../reducers/cart.actions'
import {useCart} from '../Context/Cartcontext'

import Tshirt from '../Assets/tshirt.png'

const WishlistCard = ({product}) => {
    const { dispatchToCart} = useCart()

    return (
        <div>
            <div className=" m-2 leading-normal flex justify-center item-center ">
                <div class="w-4/5 items-center justify-center text-left bg-gray-100 shadow-lg rounded-lg overflow-hidden m-4 sm:flex sm:shadow-lg sm:hover:shadow-2xl sm:transition-shadow tracking-wide">
                    <div class="sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
                    <img src={Tshirt} alt="tshirt"/>
                </div>
                <div class="mx-8">
                    <h2 class="mb-2 mt-3 text-base sm:text-xl capitalize opacity-80 font-black">{product?.title}</h2>
                    <p class="mb-4 text-grey-dark text-sm  ">
                    {product?.description}
                    </p>
                    <div>
                    <p className='flex flex-col justify-items-center font-bold text-base  mb-2'>₹ 500
                        <span className='font-normal opacity-60 text-xs  line-through ml-2'>
                        ₹ {product.price}
                        </span>
                    </p>
                    </div>
                    <div className="flex space-x-3 ">
                    <button class="py-2 px-3 inline-block bg-yellow-300 hover:bg-yellow-400 text-black hover:text-green-50 font-bold rounded-md mt-1 mb-2 focus:outline-none"
                    onClick={() => dispatchToCart(handleMoveToCart(product))}
                    >
                     Add to Cart
                    </button>
                    <button class="py-2 px-3 bg-yellow-300 hover:bg-yellow-400 text-black hover:text-green-50 font-bold rounded-md mt-1 mb-2 focus:outline-none"
                    onClick={() => dispatchToCart(handleRemoveFromWishlist(product))}
                    >
                     Remove
                    </button>
                    </div>
                </div>

                </div>
            </div>
            
        </div>
    )
}


export default WishlistCard
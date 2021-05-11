import React from 'react'

import Tshirt from '../Assets/tshirt.png'
import Header from '../Header/productheader'

import {useCart} from '../Context/Cartcontext'
import {handleAddToWishlist,handleAddToCart, handleRemoveFromWishlist } from '../reducer/Cart/cart.actions'


import isPresentHelper from "../utils/isPresent"


const Productdetails = ({product}) => {
    const {cartState, dispatchToCart} = useCart()
    const isProductAddedToWishlist = isPresentHelper(cartState.wishlist, product)
    
    return (
        <div>
        <Header />
        <div className='flex items-center justify-between bg-gray-100 sm:justify-center w-full h-full sm:h-[80vh]' >
            <div className="item-start justify-start sm:w-[50%] sm:h-[50%] my-28 w-2/6">
                <img src={Tshirt} alt="product" />
            </div>
                <div className="h-4/5 w-2/4 ml-16 text-left p-10 justify-between ">
                        <h1 className="font-bold text-xl sm:text-xl mb-8">{product?.title}</h1>
                        <p className="mb-8">{product?.description}</p>
                        <p className="flex flex-col justify-items-center font-bold text-3xl mt-4 mb-2">
                            ₹ {product?.price}
                            <div className="flex mt-2">
                                <span className="font-bold opacity-60 line-through ml-2 text-lg">₹ {product?.price}</span>
                                <span className="font-bold opacity-60 ml-2 text-lg">(32% OFF)</span>
                            </div>
                        </p>
                        <br />
                        <div className="space-x-3">
                        <button
                            class="py-2 px-3 inline-block bg-gray-900 text-white  hover:bg-black hover:text-green-50 font-bold rounded-md mt-1 mb-2 focus:outline-none"
                            onClick={
                            () => isProductAddedToWishlist
                            ? dispatchToCart(handleRemoveFromWishlist(product))
                            : dispatchToCart(handleAddToWishlist(product))}>
                            Add to wishlist
                        </button>
                        <button class="py-2 px-3 bg-gray-900 text-white  hover:bg-black hover:text-green-50 font-bold rounded-md mt-1 mb-2 focus:outline-none" onClick={() => dispatchToCart(handleAddToCart(product))}>
                        Add to Cart
                        </button>
                        </div>
                </div>
                </div>
         </div>
    )
}

export default Productdetails

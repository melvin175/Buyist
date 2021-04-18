import React from 'react'

import Tshirt from '../components/Assets/tshirt.png'
import { AiOutlineRollback } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import {useCart} from '../components/Context/Cartcontext'
import {handleAddToWishlist,handleAddToCart, handleRemoveFromWishlist } from '../components/reducers/cart.actions'

import isPresentHelper from "../components/utils/isPresent"


const Productdetails = ({product}) => {
    const {cartState, dispatchToCart} = useCart()
    const isProductAddedToWishlist = isPresentHelper(cartState.wishlist, product)

    return (
        <div>
        <div className="flex w-screen h-12 text-left p-3 pl-5 bg-white shadow-lg">
                <Link to="/shop">
                <AiOutlineRollback className="text-2xl ml-10" />
                </Link>
                <span className="ml-4 opacity-50">
                <Link to="/home">
                Home 
                </Link>
                { " >> " } 
                <Link to="/shop">
                Shop 
                </Link>
                { " >> " } 
                Product
                </span>
            </div>
        <div className='flex items-center justify-between bg-gray-100 sm:justify-center w-full h-full sm:h-[80vh]' >
            <div className="item-start justify-start sm:w-[50%] sm:h-[50%] my-28 w-2/6">
                <img src={Tshirt} alt="product" />
            </div>
                <div className="h-4/5 w-2/4 ml-16 text-left p-10 justify-between ">
                        <h1 className="font-bold text-xl sm:text-xl mb-8">Mens Casual Premium Slim Fit T-Shirts</h1>
                        <p className="mb-8">great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.</p>
                        <p className="flex flex-col justify-items-center font-bold text-3xl mt-4 mb-2">
                            ₹ 1000
                            <div className="flex mt-2">
                                <span className="font-bold opacity-60 line-through ml-2 text-lg">₹ 500</span>
                                <span className="font-bold opacity-60 ml-2 text-lg">(32% OFF)</span>
                            </div>
                        </p>
                        <button onClick={() => (product)} className="px-2 py-2 my-2 text-md font-bold leading-none text-black transform translate-x-z-0 border border-yellow-500 rounded-md focus:outline-none">
                            -
                        </button>
                        <button className="cursor-default transform translate-x-2 mx-1 font-bold">1</button>
                        <button className="px-2 py-2 text-md font-bold leading-none text-black transform translate-x-1/2 border border-yellow-500 rounded-md focus:outline-none" onClick={() => ((product))}>
                            +
                        </button> 
                        <br />
                        <div className="space-x-3">
                        <button
                            class="py-2 px-3 inline-block bg-gray-900 text-white  hover:bg-black hover:text-green-50 font-bold rounded-md mt-1 mb-2 focus:outline-none"
                            onClick={
                            () => isProductAddedToWishlist
                            ? dispatchToCart(handleRemoveFromWishlist(product))
                            : dispatchToCart(handleAddToWishlist(product))}>
                        Add to Wishlist
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

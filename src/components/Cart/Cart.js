import React from 'react'

import Banner from '../Assets/cartbanner.png'

import { FaOpencart } from "react-icons/fa";
import  {AiOutlineCheckCircle}  from "react-icons/ai";

import {useCart} from '../Context/Cartcontext'
import Cartcard from './Cartcard'
import { Link } from 'react-router-dom'

const Cart = ({product}) => {
    const {cartState} = useCart();

    const amount = cartState.cart.reduce((acc, {price, quantity}) => {
        return acc + (price * quantity)
    }, 0)


    const totalPricePerItem = cartState.cart.reduce((acc, {price}) => {
        return acc + price
    }, 0)


    if (cartState.cart.length === 0) {
        return (
            <main className="m-20 text-center">
              <FaOpencart className="mx-auto text-9xl text-gray-300"/>
              <h1 className="text-5xl my-10 capitalize font-bold">YOUR CART IS CURRENTLY EMPTY.</h1>
              <p className="text-gray-500">Before proceed to checkout you must add some products to your shopping cart.<br></br>
              You will find a lot of interesting products on our "Shop" page.</p>
              <Link to="/shop">
            <button className="px-7 py-3 my-10 rounded-md bg-gray-900 text-white hover:text-green-50 hover:bg-black focus:outline-none">RETURN TO SHOP</button>
              </Link>
            </main>
          )
    }
    return(
          <div className="w-full ml-8">
           <div>
            <img 
            className="mx-auto"
            src={Banner}  alt="banner"/>
            </div>
            <div className="w-4/5 flex mx-auto m-9 text-left tracking-widest border-2 border-black  h-9 shadow-inner-xl">
               <span className="flex tracking-widest px-2 items-center justify-center text-sm font-Bold"> <AiOutlineCheckCircle className="mx-2"/>Free Shipping on your first purchase. </span>
            </div>
            <div className='mx-auto flex flex-col lg:flex-row justify-center gap-x-4'>
                <div className="w-full flex flex-col justify-start lg:w-2/3 mb-2 ">
                    {
                        cartState.cart.map(
                            (item) => (
                                <Cartcard 
                                key={item.id} 
                                product={item} />
                            ))
                    }
                </div>
                <div className='my-4 p-4 mr-2 lg:my-0 lg:w-2/5'>
                    <div className='flex flex-col border rounded-md bg-gray-100  leading-9 shadow-md p-4'>
                        <h1 className='font-semibold text-gray-500'>CART TOTALS</h1>
                        <div className="bg-white p-4 py-5 m-5 rounded-md">
                        <div className="flex flex-row justify-between">
                            <span className="text-sm">Price ({cartState.cart.length} item(s))</span>
                            <span>{totalPricePerItem}</span>
                        </div>
                        <hr />
                        <div className='flex flex-row justify-between mt-5'>
                            <span className="text-sm mb-5">Delivery Charges</span>
                            <span className="text-sm">FREE</span>
                        </div>
                        <hr />
                        <div className='flex flex-row justify-between font-bold mt-5'>
                            <span>TOTAL AMOUNT</span>
                            <span>₹ 
                            {amount}
                            </span>
                        </div>
                        </div>
                        <div>
                            <button className="px-2 py-1 mt-2 w-full rounded-md bg-gray-900 text-white hover:text-green-50 hover:bg-black">Place Order</button>
                        </div>
                        <p className="mt-3 text-gray-500 text-xs capitalize">Total price incl GST*</p>
                    </div>
                </div>
            </div>
          </div>
        )
}


export default Cart

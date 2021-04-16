import React from 'react'

import Banner from '../Assets/cartbanner.png'

import { FaOpencart } from "react-icons/fa";
import  {AiOutlineCheckCircle}  from "react-icons/ai";

import {useCart} from '../Context/Cartcontext'
import Cartcard from './Cartcard'
import { Link } from 'react-router-dom'

const Cart = ({product}) => {
    const {cartState} = useCart();

   


    if (cartState.cart.length === 0) {
        return (
            <main className="m-20 text-center">
              <FaOpencart className="mx-auto text-9xl text-gray-300"/>
              <h1 className="text-6xl my-10 capitalize font-bold">YOUR CART IS CURRENTLY EMPTY.</h1>
              <p className="text-gray-500">You don't have any products in the wishlist yet.<br></br>
              You will find a lot of interesting products on our "Shop" page.</p>
              <Link to="/shop">
            <button className="px-7 py-3 my-10 rounded-md bg-gray-900 text-white hover:text-green-50 hover:bg-black focus:outline-none">RETURN TO SHOP</button>
              </Link>
            </main>
          )
    }
    return(
          <div>
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
                                <Cartcard key={item.id} product={item} />
                            ))
                    }
                </div>
                <div className='my-4 p-4  lg:my-0 lg:w-1/3'>
                    <div className='flex flex-col border border-gray-100 rounded-md leading-9 shadow-md  p-4'>
                        <h1 className='font-semibold text-gray-500'>PRICE DETAILS</h1>
                        <div className='flex flex-row justify-between'>
                            <span>Price ({cartState.cart.length} item(s))</span>
                            <span>$1000</span>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <span>Discount</span>
                            <span>$299</span>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <span>Delivery Charges</span>
                            <span>FREE</span>
                        </div>
                        <hr />
                        <div className='flex flex-row justify-between font-bold'>
                            <span>Total Amount</span>
                            <span>$
                            1000
                            </span>
                        </div>
                        <div>
                            <button variant='primary' fullWidth>Place Order</button>
                        </div>
                        <p className='text-gray-500 text-xs capitalize'>Total price incl GST*</p>
                    </div>
                </div>
            </div>
          </div>
        )
}


export default Cart

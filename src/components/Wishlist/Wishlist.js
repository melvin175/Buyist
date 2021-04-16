import React from 'react'
import {FaHandHoldingHeart} from 'react-icons/fa'
import Banner from '../Assets/wishlistbanner.png'
import WishlistCard from './WishlistCard'
import {useCart} from '../Context/Cartcontext'
import { Link } from 'react-router-dom'

const Wishlist = ({product}) => {
    const {dispatchToCart,cartState} = useCart();

   


    if (cartState.wishlist.length === 0) {
        return (
          <main className="m-20 text-center">
            <FaHandHoldingHeart className="mx-auto text-9xl text-gray-300"/>
            <h1 className="text-5xl my-10 capitalize font-bold">WISHLIST IS EMPTY</h1>
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
            <div>
             {
               cartState.wishlist.map((item) => (
                <WishlistCard
                   key={ item.id } 
                   product={ item }
                   dispatchToCart={dispatchToCart} 
                />
              ))}
              </div>
        </div>
     )
}

export default Wishlist

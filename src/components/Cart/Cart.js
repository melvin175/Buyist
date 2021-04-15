import React from 'react'
import {AiTwotoneHome} from 'react-icons/ai'
import WishlistCard from './Cartcard'
import {useCart} from '../Context/Cartcontext'

const Cart = ({product}) => {
    const {cartState} = useCart();

   


    if (cartState.cart.length === 0) {
        return (
          <main>
            <div className="w-screen flex flex-col justify-center item-center rounded-lg tracking-widest items-center bg-yellow-300  h-20 shadow-inner-xl">
               <span className="tracking-widest items-center text-3xl font-Bold">MY CART</span>
              <div className="p-1 mx-20 text-xs justify-center items-center relative inline-block">
                  <span className="flex"> <AiTwotoneHome className="mx-1"/> <p>Home {'>>'} Cart </p></span>
              </div>
            </div>
            <p>Cart is empty</p>
          </main>
        )
    }
    return(
          <div>
            <div className="flex flex-col justify-center item-center rounded-lg tracking-widest items-center bg-yellow-300  h-20 shadow-inner-xl">
               <span className="tracking-widest items-center text-3xl font-Bold">MY CART</span>
              <div className="p-1 mx-20 text-xs justify-center items-center relative inline-block">
                  <span className="flex"> <AiTwotoneHome className="mx-1"/> <p>Home {'>>'} Cart </p></span>
              </div>
            </div>
            <div className="flex flex-col justify-start">
             {
               cartState.cart.map((item) => (
                <WishlistCard
                   key={ item.id } 
                   product={ item }

                />
              ))}
            </div>
            <div>
              Total
            </div>
        </div>
     )
}

export default Cart

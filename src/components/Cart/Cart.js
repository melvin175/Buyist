import React from 'react'
import {AiTwotoneHome} from 'react-icons/ai'
import WishlistCard from './Cartcard'
import {useCart, useDispatchCart} from '../Context/Cartcontext'

const Cart = ({product}) => {
    const items = useCart();
    const dispatch = useDispatchCart();
    const handleRemove = id => {
        dispatch({type: "REMOVE", id})
    }

    const totalPrice = items.reduce((total, b) => total + b.price, 0);



    if (items.length === 0) {
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
            {items.map((product) => (
                <WishlistCard
                   key={ product.id } 
                   product={ product }
                   handleRemove={handleRemove}

                />
              ))}

              <div>
                  <h1>TOTAL PRICE: {" "}</h1>
                  {totalPrice.toLocaleString("en", {
                      style: "currency",
                      currency: "INR"
                  })}
              </div>
            </div>
    )
}

export default Cart

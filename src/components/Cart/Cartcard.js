
import Tshirt from '../Assets/tshirt.png'
import {handleSaveForLater, handleDecreaseQuantity, handleIncreaseQuantity,handleRemoveFromCart} from '../reducers/cart.actions'
import {useCart} from '../Context/Cartcontext'
import React from 'react'



const Cartcard = ({product}) => {
    
    const { quantity} = product
    const {dispatchToCart} = useCart()

    const handleDecreaseButtonClick = (product) => {
        if (product.quantity === 1) {
            dispatchToCart(handleRemoveFromCart(product))
        } else {
            dispatchToCart(handleDecreaseQuantity(product))
        }
    }
    return (
        <div className="flex">
            <div className="m-2 leading-normal flex justify-center item-center ">
                <div class="w-4/5 text-left bg-gray-100 shadow-lg rounded-lg overflow-hidden m-4 sm:flex sm:shadow-lg sm:hover:shadow-2xl sm:transition-shadow tracking-wide">
                    <div class="sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
                    <img src={Tshirt} alt="tshirt"/>
                </div>
                <div class="mx-8">
                    <h2 class="mb-2 mt-3 text-base sm:text-xl capitalize opacity-80 font-black">{product?.title}</h2>
                    <p class="mb-4 text-grey-dark text-sm  ">
                    {product?.description}
                    </p>
                    <div>
                    <button onClick={() => handleDecreaseButtonClick(product)}> - </button>
                    <button className='cursor-default'>{quantity}</button>
                    <button 
                    onClick={
                        () => dispatchToCart(handleIncreaseQuantity(product))
                        }> + </button>
                    <p className='flex flex-col justify-items-center font-bold text-base  mb-2'>₹ {product?.price}
                        <span className='font-normal opacity-60 text-xs  line-through ml-2'>
                        ₹ {product?.price}
                        </span>
                    </p>
                    </div>
                    <div className="flex space-x-3 ">
                    <button class="py-2 px-3 inline-block bg-yellow-300 hover:bg-yellow-400 text-black hover:text-green-50 font-bold rounded-md mt-1 mb-2 focus:outline-none"
                    onClick={
                            () => {
                                dispatchToCart(handleSaveForLater(product))
                            }
                        }
                    >
                     Add to wishlist 
                    </button>
                    <button class="py-2 px-3 bg-yellow-300 hover:bg-yellow-400 text-black hover:text-green-50 font-bold rounded-md mt-1 mb-2 focus:outline-none"
                    onClick = {() =>  dispatchToCart(handleRemoveFromCart(product))} >
                     Remove
                    </button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Cartcard


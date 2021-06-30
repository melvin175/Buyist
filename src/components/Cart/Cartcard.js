import Tshirt from "../Assets/tshirt.png";
import {
  handleSaveForLater,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleRemoveFromCart,
} from "../reducer/Cart/cart.actions";
import { useCart } from "../Context/Cartcontext";
import React from "react";

const Cartcard = ({ product }) => {
  const { quantity } = product;
  const { dispatchToCart } = useCart();

  const handleDecreaseButtonClick = (product) => {
    if (product.quantity === 1) {
      dispatchToCart(handleRemoveFromCart(product));
    } else {
      dispatchToCart(handleDecreaseQuantity(product));
    }
  };
  return (
    <div className="w-full ">
      <div class="w-full ml-0 text-left bg-gray-100 rounded-md overflow-hidden m-4 sm:flex sm:shadow-lg sm:hover:shadow-2xl sm:transition-shadow tracking-wide">
        <div class="sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
          <img src={Tshirt} alt="tshirt" />
        </div>
        <div class="mx-8 my-4">
          <h2 class="mb-2 mt-3 text-base sm:text-xl capitalize opacity-80 font-black ">
            {product?.name}
          </h2>
          <div>
            <p className="flex flex-col justify-items-center font-bold text-2xl  mb-2">
              ₹ {product?.price}
              <div className="flex mt-1 text-sm">
                <span className="font-bold opacity-60 line-through ml-2">
                  ₹ {product?.price}
                </span>
                <p className="font-bold opacity-60 ml-2">(32% OFF)</p>
              </div>
            </p>
            <button
              onClick={() => handleDecreaseButtonClick(product)}
              className="px-2 py-2 my-2 text-md font-bold leading-none text-black transform translate-x-z-0 border border-yellow-500 rounded-md focus:outline-none"
            >
              -
            </button>
            <button className="cursor-default transform translate-x-2 mx-1 font-bold">
              {quantity}
            </button>
            <button
              className="px-2 py-2 text-md font-bold leading-none text-black transform translate-x-1/2 border border-yellow-500 rounded-md focus:outline-none"
              onClick={() => dispatchToCart(handleIncreaseQuantity(product))}
            >
              +
            </button>
          </div>
          <div className="flex space-x-3 ">
            <button
              class="py-2 px-3 inline-block bg-gray-900 text-white  hover:bg-black hover:text-green-50 font-bold rounded-md mt-1 mb-2 focus:outline-none"
              onClick={() => {
                dispatchToCart(handleSaveForLater(product));
              }}
            >
              Add to wishlist
            </button>
            <button
              class="py-2 px-3 bg-gray-900 text-white  hover:bg-black hover:text-green-50 font-bold rounded-md mt-1 mb-2 focus:outline-none"
              onClick={() => dispatchToCart(handleRemoveFromCart(product))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cartcard;

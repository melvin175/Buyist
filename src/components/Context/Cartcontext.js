import React, {useReducer, useContext, createContext} from 'react'
import {cartReducer,INITIAL_STATE} from '../reducer/Cart/cart.reducer'

const CartStateContext = createContext()

// const reducer = (state, action) => {
//     switch(action.type) {
//         case "ADDTOCART":
//             return[...state, action.item];
//         case "REMOVEFROMCART":
//             const newArr= [...state];
//             newArr.splice(action.id, 1)
//             return newArr;
//         default: 
//         throw new Error(`Unknown action ${action.type}`)
//     }
// }



export const CartProvider = ({children}) => {
    const [cartState, dispatchToCart] = useReducer(cartReducer, INITIAL_STATE);

    return(
        <CartStateContext.Provider value={{cartState, dispatchToCart} }>
            {children}
        </CartStateContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
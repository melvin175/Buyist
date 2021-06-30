<<<<<<< Updated upstream
import { shopReducer, initialState } from "../reducer/Shop/shop.reducer"

import { createContext, useReducer, useContext } from "react"
const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState)
  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  )
}
export function useShop() {
  return useContext(ShopContext)
}
=======
// import React from 'react'
// import {createContext, useReducer, useContext} from 'react'
// import {shopReducer, INITIAL_STATE } from '../reducer/Shop/shop.reducer'


// const ShopContext = createContext()

// const ShopProvider = ({children}) => {
// const [shopstate, dispatchToShop] = useReducer(shopReducer, INITIAL_STATE)
//     return (
//         <ShopContext.Provider value={{shopstate, dispatchToShop}}>
//             {children}
//         </ShopContext.Provider>
//     )
// }

// export const useShop = () => useContext(ShopContext)
>>>>>>> Stashed changes

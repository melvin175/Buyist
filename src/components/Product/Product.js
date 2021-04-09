import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard'

const Product = () => {

const[productArray, setProductArray] = useState([])

useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => setProductArray(res.data))

}, [])

    return (
        <div>
            {
                productArray === []
                    ? (<div>Fetching Products</div>)
                    : productArray.map(( element ) => 
                        <ProductCard product={ element }/>
                        )
                    
                }
        </div>
    )
}

export default Product

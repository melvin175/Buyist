import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard'

import ProductGrid from '../ProductGrid/ProductGrid'
const Product = () => {

const[productArray, setProductArray] = useState([])

useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => setProductArray(res.data))

}, [])

    return (
        <ProductGrid>
            {
                productArray === []
                    ? (<div>Fetching Products</div>)
                    : productArray.map(( element ) => 
                        <ProductCard product={ element }/>
                        )
                    
                }
        </ProductGrid>
    )
}

export default Product

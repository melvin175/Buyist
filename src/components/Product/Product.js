import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard'

import ProductGrid from '../ProductGrid/ProductGrid'
// import Productpage from '../../pages/Productpage'
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
                    : productArray.map(( product ) => 
                        <ProductCard key={product.id} product={ product }/>
                        )
                    
                }
        </ProductGrid>
    )
    
}

export default Product

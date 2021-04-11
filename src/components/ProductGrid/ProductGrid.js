import React from 'react'

const ProductGrid = ({children}) => {
    return (
        <div>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
               {children}
            </div>
        </div>
    )
}

export default ProductGrid

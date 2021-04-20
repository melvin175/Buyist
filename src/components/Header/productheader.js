import React from 'react'
import { AiOutlineRollback } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const productheader = () => {
    return (
        <div>
            <div className="flex w-screen h-12 text-left p-3 pl-5 bg-white shadow-lg">
                <Link to="/shop">
                <AiOutlineRollback className="text-2xl ml-10" />
                </Link>
                <span className="ml-4 opacity-50">
                <Link to="">
                Home 
                </Link>
                { " >> " } 
                <Link to="/shop">
                Shop 
                </Link>
                { " >> " } 
                Product
                </span>
            </div>
        </div>
    )
}

export default productheader

import React from 'react'

import {FcSearch} from 'react-icons/fc'
const Searchbar = () => {
    return (
        <div className="flex overflow-hidden  border-2 h-3/4 border-gray-600 rounded-md justify-between items-center text-lg shadow-md">
            <input 
            className=" p-2 overflow-visible border-1 h-3/4 border-gray-600 outline-none "
            type="text"
            type='text'
            placeholder='Search'    
            />
            <div className="flex justify-between bg-white shadow-md">
                <button>
                <FcSearch className="text-3xl h-10 outline-none " />
                </button>
            </div>
        </div>
    )
}

export default Searchbar

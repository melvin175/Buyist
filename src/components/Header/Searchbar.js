import React from 'react'

const Searchbar = () => {
    return (
        <div className="flex overflow-hidden m-9 border-2 h-3/4 border-gray-600 rounded-md justify-between items-center text-lg ">
            <input 
            className=" p-2 overflow-visible border-1 h-3/4 border-gray-600 "
            type="text"
            type='text'
            placeholder='Search'    
            />
            <div className="">
                
            </div>
        </div>
    )
}

export default Searchbar

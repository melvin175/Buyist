import React from 'react'
import Dropdown from '../Dropdowns/Dropdowns'

const Sortfilter = () => {
    return (
    <div>
     <div className="border border-gray">
      <div className="max-w-7xl py-3  sm:px-6 sm:flex-col sm:mx-auto">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <h1 className="text-3xl bold ">Showing Products</h1>
          </div>
          <div className=" mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          </div>
          <div >
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Sortfilter

import Logo from './Img/buyist.png'

import Searchbar from './Searchbar'

import React from 'react'

const header = () => {
    return (
        <div className="w-full mx-auto sticky inset-0 bg-gray-50  shadow h-14 flex p-3 text-3xl">
           <div className="w-full flex items-center justify-between">
                <a className="justify-center items-center flex">
                    <img src={Logo} style={{height:"12vh"}}/>
                </a>
                <div className="">
                <Searchbar />
                
                </div>
           </div>
        </div>
    )
}

export default header

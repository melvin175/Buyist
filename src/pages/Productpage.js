import React from 'react'
import { useEffect, useState } from 'react'
import Productdetails from '../components/Product/ProductDetails'
import {useParams} from 'react-router-dom'
import axios from "axios"

const Productpage = () => {

    const { id } = useParams()
    const[product, setProduct] = useState([])

    useEffect(() => {
        const fetch = async () => {
          await axios
            .get("https://buyist.herokuapp.com/api/product/" + id)
            .then((res) => {setProduct(res.data.array)
            })
            .catch((err) => console.log(err))
        }
        fetch()
      }, [id])


    return (
        <div>
           <Productdetails product={product}/>
        </div>
    )
}

export default Productpage

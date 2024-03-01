import React from 'react'
import { ProductList } from "../assets/data/ProductList"
import ProductCart from './ProductCart'

export default function Home() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
        {ProductList.map((product)=> <ProductCart {...product} />)}
    </div>
  )
}

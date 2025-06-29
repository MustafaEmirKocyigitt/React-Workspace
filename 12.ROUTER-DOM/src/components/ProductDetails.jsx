import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../data/products.jsx'   
import Product from './Product'

function ProductDetails() {
    const {id} = useParams();
  return (
    <div>
        <div>Ürün Detayları </div>
        <hr />
        {
            products && products.map((product) =>{
                if(product.id == id){
                    return <Product product={product}/>
                }
            })
            
            
        }
    </div>
  )
}   

export default ProductDetails
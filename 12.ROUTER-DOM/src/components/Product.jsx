import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({product}) {
    const { id, name, price, description } = product; // Destructuring the product object
    const navigate = useNavigate();
  return (
    <div>
            <div>Ürün Detayı</div>
            <h3>İsim: {name}</h3>
            <h3>Fiyat: {price}</h3>
            <h3>Açıklama: {description}</h3>   
            <button onClick={()=>navigate("/product-details/"+ id)}>Ürün Detayına Git</button>   
        </div>
  )
}

export default Product
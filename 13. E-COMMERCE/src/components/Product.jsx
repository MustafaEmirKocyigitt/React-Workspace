import React from 'react'
import '../css/product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const { id, price, image, title, description } = product;
    const navigate = useNavigate();
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h3 className="product-title">{title}</h3>
            <p className="product-description">{description}</p>

            <div className="product-footer">
                <span className="product-price">{price} ₺</span>
                <button className="product-btn" onClick={() => navigate("/product-details/" + id)}>Detaya Git!</button>
            </div>
        </div>
    )
}

export default Product
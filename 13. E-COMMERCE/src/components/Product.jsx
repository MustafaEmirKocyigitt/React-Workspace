import React from 'react'
import '../css/product.css'

function Product({ product }) {
    const { id, price, image, title, description } = product;
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h3 className="product-title">{title}</h3>
            <p className="product-description">{description}</p>

            <div className="product-footer">
                <span className="product-price">{price} ₺</span>
                <button className="product-btn">Sepete Ekle</button>
            </div>
        </div>
    )
}

export default Product
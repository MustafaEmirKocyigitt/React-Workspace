import React from 'react'

function Product({ productName, price }) {
    return (
        <div>
            <hr />
            <div>Ürün Bilgileri</div>
            <div>
                <div>İsim: {productName}</div>
                <div>Fiyat: {price} TL</div>
            </div>
            <hr />
        </div>
    )
}

export default Product
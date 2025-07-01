import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/sileces/productSlice';
import Product from './Product';
import '../css/product.css';

function ProductList() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);
    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList
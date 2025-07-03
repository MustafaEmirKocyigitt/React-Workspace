import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/sileces/productSlice';
import '../css/productDetails.css'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { addToBasket } from '../redux/sileces/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description } = selectedProduct;
    const dispatch = useDispatch();


    const getProductById = () => {
        const product = products.find((product) => product.id == id);
        if (product) {
            dispatch(setSelectedProduct(product));
        }
    };
    useEffect(() => {
        if (products.length > 0) {
            getProductById();
        }
    }, [products, id]);

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count != 0) {
            setCount(count - 1)
        }
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            title,
            description,
            image,
            count

        }
        console.log("Sepete Gönderilen:", payload);
        dispatch(addToBasket(payload));
    }
    const fakeReviews = [
        { id: 1, author: "Ahmet", comment: "Ürün çok kaliteli, tavsiye ederim!" },
        { id: 2, author: "Zeynep", comment: "Fiyat/performans olarak güzel." },
        { id: 3, author: "Mehmet", comment: "Hızlı kargo için teşekkürler." }
    ];
    return (
        <div className="details-container">
            <div className="details-card">
                <img src={image} alt={title} className="details-image" />
                <div className="details-info">
                    <h2>{title}</h2>
                    <p className="details-description">{description}</p>

                    <div className="price-qty-cart-row">
                        <span className="details-price">{price} ₺</span>

                        <div className="quantity-controller">
                            <button className="qty-btn" onClick={decrement}>
                                <CiCircleMinus size={28} />
                            </button>
                            <span className="qty-number">{count}</span>
                            <button className="qty-btn" onClick={increment}>
                                <CiCirclePlus size={28} />
                            </button>
                        </div>

                        <button className="add-to-cart-btn"
                            onClick={addBasket}>Sepete Ekle
                        </button>
                    </div>
                </div>

            </div>

            <div className="reviews-section">
                <h3>Ürün Yorumları</h3>
                {fakeReviews.map(review => (
                    <div key={review.id} className="review-card">
                        <strong>{review.author}</strong>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductDetails
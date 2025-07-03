import { createSlice } from '@reduxjs/toolkit';

const getBasketFromStorage = () => {
    const data = localStorage.getItem("basket");
    return data ? JSON.parse(data) : [];
};

const writeToBasketStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
};

const initialState = {
    products: getBasketFromStorage(),
    drawer: false
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products.find((product) => product.id === action.payload.id);

            if (findProduct) {
                // Ürün daha önce sepete eklenmişse
                const extractedProducts = state.products.filter((product) => product.id !== action.payload.id);
                findProduct.count += action.payload.count;

                state.products = [...extractedProducts, findProduct];
                writeToBasketStorage(state.products);
            } else {
                // Ürün sepette yoksa yeni ekle
                state.products = [...state.products, action.payload];
                writeToBasketStorage(state.products);
            }// storage güncelle
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        }
    }
});

export const { addToBasket, setDrawer } = basketSlice.actions;
export default basketSlice.reducer;

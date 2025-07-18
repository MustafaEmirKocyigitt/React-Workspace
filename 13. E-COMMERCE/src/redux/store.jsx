import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/sileces/appSlice'
import ProductReducer from '../redux/sileces/productSlice'
import basketReducer from './sileces/basketSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        product: ProductReducer,
        basket: basketReducer
    },
})
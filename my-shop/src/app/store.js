import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice"
import authReducer from "../features/Auth/authSlice"
import checkoutReducer from "../features/Checkout/checkoutSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        auth: authReducer,
        checkout: checkoutReducer,
    }
})


export default store
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice"
import authReducer from "../features/Auth/authSlice"
import checkoutReducer from "../features/Checkout/checkoutSlice"
import ordersReducer from "../features/Orders/ordersSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        auth: authReducer,
        checkout: checkoutReducer,
        orders: ordersReducer,
    }
})


export default store
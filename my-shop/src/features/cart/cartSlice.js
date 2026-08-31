import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const cartItem = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload.id
            )
            if (cartItem) {
                cartItem.quantity += 1
                state.amount += 1
                state.total += cartItem.price
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
                state.amount += 1
                state.total += action.payload.price
            }
        },

        increaseQuantity(state, action) {
            const cartItem = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload
            )
            if (cartItem) {
                cartItem.quantity += 1
                state.amount += 1
                state.total += cartItem.price
            }

        },
        decreaseQuantity(state, action) {
            const cartItem = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload
            )
            const cartItemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload
            )

            if (cartItem) {
                if (cartItem.quantity === 1) {
                    state.cartItems.splice(cartItemIndex, 1)
                    state.amount -= 1
                    state.total -= cartItem.price
                } else {
                    cartItem.quantity -= 1
                    state.amount -= 1
                    state.total -= cartItem.price
                }
            }

        },
    },
})

export default cartSlice.reducer
export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
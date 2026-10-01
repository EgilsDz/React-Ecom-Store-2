import { createSlice } from "@reduxjs/toolkit"

const storedCart = localStorage.getItem("cart")
const parsedCart = storedCart ? JSON.parse(storedCart) : null

const initialState = {
    cartItems: parsedCart ? parsedCart.cartItems : [],
    amount: parsedCart ? parsedCart.amount : 0,
    total: parsedCart ? parsedCart.total : 0,
}

function saveCart(state, userId) {
    localStorage.setItem(`cart_${userId}`, JSON.stringify({
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total
    }))
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload.product
            const userId = action.payload.userId
            const cartItem = state.cartItems.find(
                (cartItem) => cartItem.id === product.id
            )
            if (cartItem) {
                cartItem.quantity += 1
                state.amount += 1
                state.total += cartItem.price
            } else {
                state.cartItems.push({ ...product, quantity: 1 })
                state.amount += 1
                state.total += product.price
            }
            saveCart(state, userId)
        },

        increaseQuantity(state, action) {

            const productId = action.payload.id
            const userId = action.payload.userId

            const cartItem = state.cartItems.find(
                (cartItem) => cartItem.id === productId
            )
            if (cartItem) {
                cartItem.quantity += 1
                state.amount += 1
                state.total += cartItem.price

            }
            saveCart(state, userId)
        },
        decreaseQuantity(state, action) {
            const productId = action.payload.id
            const userId = action.payload.userId
            const cartItem = state.cartItems.find(
                (cartItem) => cartItem.id === productId
            )
            const cartItemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === productId
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
            saveCart(state, userId)
        },

        loadUserCart(state, action) {
            const userId = action.payload
            const storedCart = localStorage.getItem(`cart_${userId}`)

            if (storedCart) {
                const parsedCart = JSON.parse(storedCart)
                state.cartItems = parsedCart.cartItems
                state.amount = parsedCart.amount
                state.total = parsedCart.total
            } else {

                state.cartItems = []
                state.amount = 0
                state.total = 0
            }
        },

        clearCart(state, action) {
            const userId = action.payload
            state.cartItems = []
            state.amount = 0
            state.total = 0
            saveCart(state, userId)
        }

    },
})

export default cartSlice.reducer
export const { addToCart, increaseQuantity, decreaseQuantity, loadUserCart, clearCart } = cartSlice.actions
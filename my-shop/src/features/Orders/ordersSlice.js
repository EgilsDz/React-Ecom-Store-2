import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    orders: [],
    isLoading: false,
    error: null,
}

export const fetchOrders = createAsyncThunk(
    "orders/fetchOrders",
    async (userId) => {
        const response = await fetch(`http://localhost:3000/orders?userId=${userId}`)
        if (!response.ok) {
            throw new Error("Order Fetch has failed")
        }
        return response.json()
    }
)

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.orders = action.payload
            })
            .addCase(fetchOrders.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || action.error.message
            })
    }
})

export default ordersSlice.reducer
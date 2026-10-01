import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const initialState = {
    isLoading: false,
    error: null,
    isPaid: false
}

export const createOrder = createAsyncThunk(
    "checkout/createOrder",
    async (order) => {
        const response = await fetch(`http://localhost:3000/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order),
        }
        )
        if (!response.ok) {
            throw new Error("Order Creation has failed")
        }
        return response.json()
    }
)
const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        markPayment(state) {
            state.isPaid = true
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.fulfilled, (state) => {
                state.isLoading = false
                state.error = null
            })
            .addCase(createOrder.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || action.error.message
            })
    }
})

export default checkoutSlice.reducer
export const { markPayment } = checkoutSlice.actions
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    productItems: [],
    isLoading: false,
    error: null
}

export const addProducts = createAsyncThunk(
    "products/addProducts",
    async (formData) => {
        const response = await fetch(`http://localhost:3000/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        }
        )
        if (!response.ok) {
            return console.log("beep")
        }
        return response.json()
    }
)


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetch(`http://localhost:3000/products`)
        if (!response.ok) {
            return console.log("beep")
        }
        return response.json()
    }
)

export const deleteProducts = createAsyncThunk(
    "products/deleteProducts",
    async (id) => {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }
        )
        if (!response.ok) {
            return console.log("beep")
        }
        return id
    }
)

export const editProducts = createAsyncThunk(
    "products/editProducts",
    async ({ formData, id }) => {
        console.log("EDIT BODY:", formData)
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        }
        )
        if (!response.ok) {
            return console.log("beep")
        }
        return response.json()
    }
)



const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productItems = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(addProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productItems = [
                    ...state.productItems,
                    action.payload
                ]
            })
            .addCase(addProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(deleteProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productItems = state.productItems.filter((product) => product.id !== action.payload)
            })

            .addCase(editProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productItems = state.productItems.map(product => {
                    if (product.id === action.payload.id) {
                        return action.payload
                    }

                    return product
                })
            })

    }
})

export default productsSlice.reducer

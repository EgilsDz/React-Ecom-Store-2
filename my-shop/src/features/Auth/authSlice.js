import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    currentUser: null,
    isLoading: false,
    isAuthenticated: false,
    error: null

}

export const addUser = createAsyncThunk(
    "users/addUser",
    async (registerData) => {
        const response = await fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData),
        }
        )
        if (!response.ok) {
            return console.log("beep")
        }
        return response.json()
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || action.error.message;
            })
    }
})

export default authSlice.reducer
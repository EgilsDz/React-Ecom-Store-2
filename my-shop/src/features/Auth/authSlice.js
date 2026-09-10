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
        const emailCheckResponse = await fetch(`http://localhost:3000/users?email=${registerData.email}`)
        if (!emailCheckResponse.ok) {
            throw new Error(" Email check has failed")
        }
        const matchedUsers = await emailCheckResponse.json()
        if (matchedUsers.length > 0) {
            throw new Error("Email is already registered")
        }
        const response = await fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData),
        }
        )
        if (!response.ok) {
            throw new Error("Registration has failed")
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
                state.isLoading = false
                state.error = null
            })
            .addCase(addUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(addUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || action.error.message
            })
    }
})

export default authSlice.reducer
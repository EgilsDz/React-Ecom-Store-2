import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const storedUser = localStorage.getItem("currentUser")

const initialState = {
    currentUser: storedUser ? JSON.parse(storedUser) : null,
    isLoading: false,
    isAuthenticated: storedUser ? true : false,
    error: null

}


export const loginUser = createAsyncThunk(
    "users/loginUser",
    async (loginData) => {
        const loginEmailCheckResponse = await fetch(`http://localhost:3000/users?email=${loginData.email}`)
        if (!loginEmailCheckResponse.ok) {
            throw new Error(" Email check has failed")
        }
        const foundUsers = await loginEmailCheckResponse.json()
        if (foundUsers.length === 0) {
            throw new Error("Email is not found")
        }
        if (foundUsers[0].password !== loginData.password) {
            throw new Error("Password is wrong")
        }
        const authUser = {
            id: foundUsers[0].id,
            firstName: foundUsers[0].firstName,
            lastName: foundUsers[0].lastName,
            email: foundUsers[0].email,
        }

        localStorage.setItem("currentUser", JSON.stringify(authUser))
        return authUser
    }
)


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
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.currentUser = action.payload
                state.isAuthenticated = true
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.error = null
                state.currentUser = null
                state.isAuthenticated = false
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || action.error.message
                state.currentUser = null
                state.isAuthenticated = false
            })
    }
})

export default authSlice.reducer
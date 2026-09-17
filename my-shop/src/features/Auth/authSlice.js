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

export const editUser = createAsyncThunk(
    "users/editUser",
    async ({ userData, id }) => {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        }
        )
        if (!response.ok) {
            throw new Error("Edit has failed")
        }
        return response.json()
    }
)

export const changeUserPassword = createAsyncThunk(
    "users/changeUserPassword",
    async ({ passwordData, id }) => {
        const passwordCheckResponse = await fetch(`http://localhost:3000/users/${id}`)
        if (!passwordCheckResponse.ok) {
            throw new Error(" Password check has failed")
        }
        const user = await passwordCheckResponse.json()
        if (user.password !== passwordData.password) {
            throw new Error("Wrong current password")
        }
        if (user.password === passwordData.newPassword) {
            throw new Error("New password cannot be the same as the old password")
        }
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: passwordData.newPassword }),
        }
        )
        if (!response.ok) {
            throw new Error("Password change has failed")
        }
        return response.json()
    }
)

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async ({ deleteData, id }) => {
        const passwordCheckResponse = await fetch(`http://localhost:3000/users/${id}`)
        if (!passwordCheckResponse.ok) {
            throw new Error(" Password check has failed")
        }
        const user = await passwordCheckResponse.json()
        if (user.password !== deleteData.password) {
            throw new Error("Wrong current password")
        }
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }
        )
        if (!response.ok) {
            throw new Error("Delete Account has failed ")
        }
        return id
    }
)




const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.currentUser = null
            state.isAuthenticated = false
        },
    },
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
            .addCase(editUser.fulfilled, (state, action) => {
                const authUser = {
                    id: action.payload?.id,
                    firstName: action.payload?.firstName,
                    lastName: action.payload?.lastName,
                    email: action.payload?.email,
                    phoneNumber: action.payload?.phoneNumber,
                    country: action.payload?.country,
                    city: action.payload?.city,
                    address: action.payload?.address,
                    postalCode: action.payload?.postalCode,
                }
                state.isLoading = false
                state.error = null
                state.currentUser = authUser
                state.isAuthenticated = true
                localStorage.setItem("currentUser", JSON.stringify(authUser))
            })
            .addCase(editUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(editUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || action.error.message
            })
            .addCase(changeUserPassword.fulfilled, (state) => {
                state.isLoading = false
                state.error = null
            })
            .addCase(changeUserPassword.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(changeUserPassword.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || action.error.message
            })
            .addCase(deleteUser.fulfilled, (state) => {
                state.isLoading = false
                state.error = null
                state.currentUser = null
                state.isAuthenticated = false
                localStorage.removeItem("currentUser")
            })
            .addCase(deleteUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || action.error.message
            })
    }
})


export default authSlice.reducer
export const { logout } = authSlice.actions
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Card, CardContent, Box, Typography, TextField, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { registerStyles } from "./registerStyles"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../../features/Auth/authSlice"


function Register() {

    const dispatch = useDispatch()
    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (registerData.password !== registerData.confirmPassword) {
            alert("Check the passwords");
            return;
        }
        try {
            await dispatch(addUser(registerData)).unwrap();
            console.log("Registration successful");
        } catch (error) {
            console.error("Registration failed:", error);
        }
    }
    return (
        <Box>
            <Navbar />
            <Box sx={registerStyles.page}>
                <Card sx={registerStyles.card}>
                    <CardContent sx={registerStyles.cardcontent}>
                        <Typography sx={registerStyles.title}>Register</Typography>
                        <form onSubmit={handleSubmit} style={registerStyles.loginTextContainer}>
                            <Box sx={registerStyles.loginTextContainer}>
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={registerData.firstName}
                                    sx={registerStyles.loginTextBox}
                                    id="first-name"
                                    name="firstName"
                                    label="First Name"
                                    type="text"
                                    autoComplete="given-name"
                                />

                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={registerData.lastName}
                                    sx={registerStyles.loginTextBox}
                                    id="last-name"
                                    name="lastName"
                                    label="Last Name"
                                    type="text"
                                    autoComplete="family-name"
                                />

                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={registerData.email}
                                    sx={registerStyles.loginTextBox}
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    autoComplete="email"
                                />

                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={registerData.password}
                                    sx={registerStyles.loginTextBox}
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="new-password"
                                />

                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={registerData.confirmPassword}
                                    sx={registerStyles.loginTextBox}
                                    id="confirm-password"
                                    name="confirmPassword"
                                    label="Password Again"
                                    type="password"
                                    autoComplete="new-password"
                                />

                            </Box>
                            <Button type="submit" variant="contained" sx={registerStyles.loginButton}>Register</Button>
                        </form>
                        <Typography>Already have an account?</Typography>
                        <Link to="/login" style={registerStyles.register}>Login</Link>
                    </CardContent>
                </Card>
            </Box>
            <Footer />
        </Box>
    )
}
export default Register
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Card, CardContent, Box, Typography, TextField, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { LoginStyles } from "./loginStyles"



function Login() {
    return (
        <Box>
            <Navbar />
            <Box sx={LoginStyles.page}>
                <Card sx={LoginStyles.card}>
                    <CardContent sx={LoginStyles.cardcontent}>
                        <Typography sx={LoginStyles.title}>Login</Typography>
                        <Box sx={LoginStyles.loginTextContainer}>
                            <TextField
                                sx={LoginStyles.loginTextBox}
                                id="outlined-password-input"
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                            />

                            <TextField
                                sx={LoginStyles.loginTextBox}
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />

                        </Box>
                        <Button variant="contained" sx={LoginStyles.loginButton}>Login</Button>

                        <Typography>Don't have an account?</Typography>
                        <Link to="/register" style={LoginStyles.register}>Register</Link>
                    </CardContent>
                </Card>
            </Box>

            <Footer />
        </Box>
    )
}
export default Login
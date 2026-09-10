import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Card, CardContent, Box, Typography, TextField, Button, Modal } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { LoginStyles } from "./loginStyles"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/Auth/authSlice"


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const initialLoginData = {
        email: "",
        password: "",
    }
    const [loginData, setLoginData] = useState(initialLoginData);
    const [modalOpen, setModalOpen] = useState(false)
    const [modalMessage, setModalMessage] = useState("")

    const handleClose = () => {
        setModalOpen(false)
    }

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await dispatch(loginUser({
                email: loginData.email,
                password: loginData.password
            }
            )).unwrap();
            navigate("/")
        } catch (error) {
            setModalMessage(`Login failed: ${error.message}`)
            setModalOpen(true)
        }
    }

    return (
        <Box>
            <Navbar />
            <Box sx={LoginStyles.page}>
                <Card sx={LoginStyles.card}>
                    <CardContent sx={LoginStyles.cardcontent}>
                        <Typography sx={LoginStyles.title}>Login</Typography>
                        <form onSubmit={handleSubmit} style={LoginStyles.loginTextContainer}>
                            <Box sx={LoginStyles.loginTextContainer}>
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={loginData.email}
                                    sx={LoginStyles.loginTextBox}
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="text"
                                    autoComplete="email"
                                />

                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={loginData.password}
                                    sx={LoginStyles.loginTextBox}
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />

                            </Box>
                            <Button type="submit" variant="contained" sx={LoginStyles.loginButton}>Login</Button>
                        </form>
                        <Typography>Don't have an account?</Typography>
                        <Link to="/register" style={LoginStyles.register}>Register</Link>
                    </CardContent>
                    <Modal
                        open={modalOpen}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={LoginStyles.Modalstyle}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Error
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {modalMessage}
                            </Typography>
                        </Box>
                    </Modal>
                </Card>
            </Box>

            <Footer />
        </Box>
    )
}
export default Login
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Card, CardContent, Box, Typography, TextField, Button, Modal } from "@mui/material"
import { Link } from "react-router-dom"
import { registerStyles } from "./registerStyles"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/Auth/authSlice"


function Register() {

    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState(false)
    const [modalMessage, setModalMessage] = useState("")
    const error = useSelector(state => state.auth.error)
    const initialRegisterData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [registerData, setRegisterData] = useState(initialRegisterData);


    const handleClose = () => {
        setModalOpen(false)
    }

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
            await dispatch(addUser({
                firstName: registerData.firstName,
                lastName: registerData.lastName,
                email: registerData.email,
                password: registerData.password
            }
            )).unwrap();
            setModalMessage("Registration successful")
            setModalOpen(true)
            setRegisterData(initialRegisterData)
        } catch (error) {
            setModalMessage(`Registration failed: ${error.message}`)
            setModalOpen(true)

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
                    <Modal
                        open={modalOpen}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={registerStyles.Modalstyle}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {error === null ? "Successful" : "Error"}
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
export default Register
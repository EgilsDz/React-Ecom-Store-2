import { useSelector, useDispatch } from "react-redux"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Box, Card, CardContent, Typography, Button, CardMedia } from "@mui/material"
import { profileStyles } from "./profileStyles"
import Profilepic from "../../assets/images/profilePic.png"
import { useState } from "react"
import EditProfileDialog from "../../components/EditProfileDIalog"
import ChangePasswordDialog from "../../components/ChangePasswordDialog"
import DeleteProfileDialog from "../../components/DeleteProfileDialog"
import { editUser, changeUserPassword, deleteUser } from "../../features/Auth/authSlice"


function Profile() {
    const { currentUser } = useSelector((state) => state.auth)
    const [open, setOpen] = useState(false)
    const [isPasswordOpen, setIsPasswordOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handlePasswordOpen = () => {
        setIsPasswordOpen(true)
    }

    const handlePasswordClose = () => {
        setIsPasswordOpen(false)
    }

    const handleDeleteOpen = () => {
        setIsDeleteOpen(true)
    }

    const handleDeleteClose = () => {
        setIsDeleteOpen(false)
    }

    const handleUserUpdate = (updatedUser) => {
        console.log(updatedUser)
    }
    const handleSubmit = (userData) => {
        const id = currentUser.id
        dispatch(editUser({ userData, id }))
        setOpen(false)
    }

    const handlePasswordSubmit = async (passwordData) => {
        const id = currentUser.id
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert("Check the passwords");
            return
        }
        try {
            await dispatch(changeUserPassword({ passwordData, id })).unwrap()
            setIsPasswordOpen(false)
        }
        catch (error) {
            alert(`Password change failed: ${error.message}`)
        }

    }

    const handleDeleteSubmit = async (deleteData) => {
        const id = currentUser.id
        try {
            await dispatch(deleteUser({ deleteData, id })).unwrap()
            setIsDeleteOpen(false)
        }
        catch (error) {
            alert(`Delete has failed: ${error.message}`)
        }

    }


    return (
        <Box >
            <Navbar />
            <Box sx={profileStyles.page}>
                <Box sx={profileStyles.profileSection}>
                    <Card sx={{ ...profileStyles.card, ...profileStyles.profileCard }}>
                        <CardContent sx={profileStyles.cardcontent}>
                            <CardMedia
                                sx={profileStyles.image}
                                component="img"
                                image={Profilepic}
                                alt={"profilepic"} />
                            <Typography>{currentUser.firstName} {currentUser.lastName}</Typography>
                            <Button onClick={handleClickOpen}>Edit profile</Button>
                            <Button onClick={handlePasswordOpen}>Change password</Button>
                            <Button onClick={handleDeleteOpen} color="error">Delete Account</Button>
                        </CardContent>
                    </Card>
                    <Card sx={{ ...profileStyles.card, ...profileStyles.aboutCard }}>
                        <CardContent sx={profileStyles.cardcontent}>
                            <Typography variant="h3" sx={profileStyles.title}>About Me</Typography>
                            <Box sx={profileStyles.info}>
                                <Typography> First name: {currentUser.firstName}</Typography>
                                <Typography> Last name: {currentUser.lastName}</Typography>
                                <Typography> Email: {currentUser.email}</Typography>
                                <Typography> Phone number: {currentUser.phoneNumber}</Typography>
                                <Typography> Country: {currentUser.country}</Typography>
                                <Typography> City: {currentUser.city}</Typography>
                                <Typography> Address: {currentUser.address}</Typography>
                                <Typography> Postal Code: {currentUser.postalCode}</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={profileStyles.ordersSection}>
                    <Card sx={profileStyles.card}>
                        <CardContent sx={profileStyles.cardcontent}>
                            <Typography variant="h3" sx={profileStyles.title}>My Orders</Typography>
                            <Box sx={profileStyles.info}>
                                <Typography >Order #212 : status shipped</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <EditProfileDialog
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                handleUserUpdate={handleUserUpdate}
                currentUser={currentUser}
            />
            <ChangePasswordDialog
                open={isPasswordOpen}
                handlePasswordClose={handlePasswordClose}
                handlePasswordSubmit={handlePasswordSubmit}
            />
            <DeleteProfileDialog
                open={isDeleteOpen}
                handleDeleteClose={handleDeleteClose}
                handleDeleteSubmit={handleDeleteSubmit}
            />
            <Footer />
        </Box>
    )
}
export default Profile
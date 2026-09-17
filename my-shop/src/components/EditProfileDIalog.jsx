import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


function EditProfileDialog({ handleClose, handleSubmit, open, currentUser, handleUserUpdate }) {
    const [userData, setUserData] = useState({
        firstName: currentUser?.firstName || "",
        lastName: currentUser?.lastName || "",
        email: currentUser?.email || "",
        phoneNumber: currentUser?.phoneNumber || "",
        country: currentUser?.country || "",
        city: currentUser?.city || "",
        address: currentUser?.address || "",
        postalCode: currentUser?.postalCode || "",
    });

    const handleDialogClose = () => {
        setUserData({
            firstName: currentUser?.firstName || "",
            lastName: currentUser?.lastName || "",
            email: currentUser?.email || "",
            phoneNumber: currentUser?.phoneNumber || "",
            country: currentUser?.country || "",
            city: currentUser?.city || "",
            address: currentUser?.address || "",
            postalCode: currentUser?.postalCode || "",
        })
        handleClose()
    }

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value

        })
    }

    const handleUserUpdateSubmit = (e) => {
        e.preventDefault()
        handleUserUpdate(userData)
        handleSubmit(userData)
    }

    return (
        <>
            <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleUserUpdateSubmit} id="edit-form">
                        <TextField
                            autoFocus
                            margin="dense"
                            id="first-name"
                            name="firstName"
                            label="First Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.firstName}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="last-name"
                            name="lastName"
                            label="Last Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.lastName}
                            onChange={handleChange}
                        />
                        <TextField
                            disabled
                            margin="dense"
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={userData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="phonenumber"
                            name="phoneNumber"
                            label="Phone Number"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.phoneNumber}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="country"
                            name="country"
                            label="Country"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.country}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="city"
                            name="city"
                            label="City"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.city}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="address"
                            name="address"
                            label="Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.address}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="postalcode"
                            name="postalCode"
                            label="Postal Code"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.postalCode}
                            onChange={handleChange}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button type="submit" form="edit-form">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default EditProfileDialog
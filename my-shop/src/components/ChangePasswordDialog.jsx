import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';



function ChangePasswordDialog({ handlePasswordClose, handlePasswordSubmit, open, }) {
    const [passwordData, setPasswordData] = useState({
        password: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value

        })
    }

    const handleDialogClose = () => {
        setPasswordData({
            password: "",
            newPassword: "",
            confirmPassword: "",
        })
        handlePasswordClose()
    }

    const handlePasswordUpdateSubmit = (e) => {
        e.preventDefault()
        handlePasswordSubmit(passwordData)
    }

    return (
        <>
            <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>Change Password</DialogTitle>
                <DialogContent>
                    <form onSubmit={handlePasswordUpdateSubmit} id="password-form">
                        <TextField
                            required
                            autoFocus
                            margin="dense"
                            id="current-password"
                            name="password"
                            label="Current Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            value={passwordData.password}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="new-password"
                            name="newPassword"
                            label="New Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            value={passwordData.newPassword}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="confirm-password"
                            name="confirmPassword"
                            label="New Password Again"
                            type="password"
                            fullWidth
                            variant="standard"
                            value={passwordData.confirmPassword}
                            onChange={handleChange}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button type="submit" form="password-form">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default ChangePasswordDialog


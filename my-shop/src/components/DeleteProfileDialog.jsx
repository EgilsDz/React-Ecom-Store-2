import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { useState } from 'react';



function DeleteProfileDialog({ handleDeleteClose, handleDeleteSubmit, open }) {
    const [deleteData, setDeleteData] = useState({
        password: "",
    });

    const handleChange = (e) => {
        setDeleteData({
            ...deleteData,
            [e.target.name]: e.target.value

        })
    }

    const handleDialogClose = () => {
        setDeleteData({
            password: "",

        })
        handleDeleteClose()
    }

    const handleDeleteUpdateSubmit = (e) => {
        e.preventDefault()
        handleDeleteSubmit(deleteData)
    }
    return (
        <>
            <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>Delete Account</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete the account?</Typography>
                    <Typography>Please enter the accounts password if you wish to delete it</Typography>
                    <form onSubmit={handleDeleteUpdateSubmit} id="delete-form">
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
                            value={deleteData.password}
                            onChange={handleChange}
                        />

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button color="error" type="submit" form="delete-form">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default DeleteProfileDialog
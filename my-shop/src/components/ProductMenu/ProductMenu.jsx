import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { ProductMenuStyles } from './ProductMenuStyles';

function ProductMenu({ product, onEdit, onDelete }) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button variant="outlined" sx={ProductMenuStyles.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Menu</Button>
            <Menu
                sx={ProductMenuStyles.menu}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem sx={ProductMenuStyles.menuItem} onClick={() => onEdit(product)}>Edit</MenuItem>
                <MenuItem sx={ProductMenuStyles.menuItem} onClick={() => onDelete(product)}>Delete</MenuItem>
            </Menu>
        </>
    )
}
export default ProductMenu
import LaptopIcon from '@mui/icons-material/Laptop';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';



function Navbar() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <LaptopIcon sx={{ ml: 2 }} />
               <Typography variant="h5"
                  sx={{
                     ml: 2,
                  }}>
                  Gadget Store
               </Typography>

               <Box sx={{ flexGrow: 1 }} />

               <MuiLink
                  component={RouterLink}
                  to="/"
                  color="inherit"
                  underline="none"
                  sx={{
                     ml: 3,
                     cursor: "pointer",
                  }}
               >
                  Home
               </MuiLink>

               <MuiLink
                  component={RouterLink}
                  to="/products"
                  color="inherit"
                  underline="none"
                  sx={{
                     ml: 3,
                     cursor: "pointer",
                  }}
               >
                  Products
               </MuiLink>

               <MuiLink
                  component={RouterLink}
                  to="/contact"
                  color="inherit"
                  underline="none"
                  sx={{
                     ml: 3,
                     cursor: "pointer",
                  }}
               >
                  Contact us
               </MuiLink>

               <MuiLink
                  component={RouterLink}
                  to="/cart"
                  color="inherit"
                  underline="none"
                  sx={{
                     ml: 3,
                     cursor: "pointer",
                  }}
               >
                  Cart
               </MuiLink>
            </Toolbar>
         </AppBar>
      </Box>
   )
}

export default Navbar;
import LaptopIcon from '@mui/icons-material/Laptop';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import { Link } from '@mui/material';



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

               <Link to="/" color="inherit" underline="none"
                  sx={{
                     ml: 3,
                     cursor: "pointer",
                  }}>
                  Home
               </Link>

               <Link to="/" color="inherit" underline="none"
                  sx={{
                     ml: 3,
                     cursor: "pointer",
                  }}>
                  Products
               </Link>

               <Link to="/Contact" color="inherit" underline="none"
                  sx={{
                     ml: 3,
                     cursor: "pointer",
                  }}>
                  Contact us
               </Link>

               <Link href="/" color="inherit" underline="none"
                  sx={{
                     ml: 3,
                     cursor: "pointer",
                  }}>
                  Cart
               </Link>
            </Toolbar>
         </AppBar>
      </Box>
   )
}

export default Navbar;
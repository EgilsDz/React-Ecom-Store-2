import { useLocation } from "react-router-dom"
import { Typography, Box } from "@mui/material"


function Confirmation() {
    const location = useLocation()
    const orderId = location.state?.orderId || ""
    return (
        <Box>
            <Typography>Your Order ID:#{orderId}</Typography>
        </Box>
    )
}
export default Confirmation
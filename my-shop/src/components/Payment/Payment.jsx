import { PaymentStyles } from "./paymentStyles"
import { Card, CardContent, Typography, CircularProgress, Box } from "@mui/material"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { markPayment } from "../../features/Checkout/checkoutSlice";
function Payment() {

    const [processing, setProcessing] = useState(true);
    const dispatch = useDispatch()
    function processPayment() {
        setProcessing(false)
        dispatch(markPayment())

    }
    useEffect(() => {
        const myTimer = setTimeout(processPayment, 5000)
        return () => {
            clearTimeout(myTimer)
        }

    }, [])


    return (
        <Card sx={PaymentStyles.shippingContainer}>
            <CardContent sx={PaymentStyles.shippingContent}>
                <Typography variant="h2" sx={PaymentStyles.title}>Payment</Typography>
                <Typography>Processing your payment...</Typography>
                <Typography>Please wait while we securely process your payment. This may take a few moments.</Typography>
                <Box sx={PaymentStyles.loading}>
                    <CircularProgress aria-label="Loading…" size={70} />
                </Box>
            </CardContent>
        </Card>
    )
}
export default Payment
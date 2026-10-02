import { Card, CardContent, Box, Button, Typography } from "@mui/material"
import { ReviewStyles } from "./ReviewStyles"


function Review({ handleBack, handleNext, shippingData, billingData, paymentMethod }) {
    return (
        <form style={ReviewStyles.shippingContainer}>
            <Card sx={ReviewStyles.shippingContainer}>
                <CardContent sx={ReviewStyles.shippingContent}>
                    <Typography variant="h2" sx={ReviewStyles.title}>Review</Typography>
                    <Typography sx={ReviewStyles.infoTitle}>Shipping information:</Typography>
                    <Box sx={ReviewStyles.info}>
                        <Typography>Full Name: {shippingData.firstName} {shippingData.lastName}</Typography>
                        <Typography>Full Address: {shippingData.addressOne},{shippingData.addressTwo} </Typography>
                        <Typography>Country: {shippingData.country}</Typography>
                        <Typography>City: {shippingData.city}</Typography>
                        <Typography>Postal Code: {shippingData.postalCode}</Typography>
                        <Typography>Phone Number: {shippingData.phoneNumber}</Typography>
                        <Typography>Email: {shippingData.email}</Typography>
                    </Box>
                    <Typography sx={ReviewStyles.infoTitle}>Payment information:</Typography>
                    <Box sx={ReviewStyles.info}>
                        {paymentMethod === "paypal" ? (
                            <>
                                <Typography>Payment Method: {paymentMethod}</Typography>
                            </>
                        ) : (
                            <>

                                <Typography>Payment Method: {paymentMethod}</Typography>
                                <Typography>CardHolder Name: {billingData.cardName}</Typography>
                                <Typography>Card ending in ****{billingData.cardNumber.slice(-4)}</Typography>
                            </>

                        )}
                    </Box>


                    <Box sx={ReviewStyles.form}>
                        <Button sx={ReviewStyles.btn}
                            type="submit" variant="contained" onClick={handleNext}>Continue to Pay</Button>
                        <Button sx={ReviewStyles.btn}
                            variant="outlined" onClick={handleBack}>Back to Billing </Button>
                    </Box>
                </CardContent>
            </Card>
        </form>
    )
}
export default Review
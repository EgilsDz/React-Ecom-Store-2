import { BillingFormStyles } from "./BillingFormStyles"
import paypal from "../../assets/images/paypal.png"
import visa from "../../assets/images/visa_electron.png"
import stripe from "../../assets/images/stripe.svg"
import cards from "../../assets/images/credit_cards.png"
import mastercard from "../../assets/images/mastercard2.png"

import { Card, CardContent, Box, Button, TextField, Typography, FormControlLabel, FormGroup, Checkbox, RadioGroup, Radio } from "@mui/material"



function BillingForm({ handleNext, handleBack, paymentMethod, setPaymentMethod, billingData, setBillingData }) {


    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    const handleChange = (e) => {
        setBillingData({
            ...billingData,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNext()
    }
    return (
        <form onSubmit={handleSubmit} style={BillingFormStyles.shippingContainer}>
            <Card sx={BillingFormStyles.shippingContainer}>
                <CardContent sx={BillingFormStyles.shippingContent}>
                    <Typography variant="h2" sx={BillingFormStyles.title}>Billing Information</Typography>

                    <RadioGroup value={paymentMethod} onChange={handlePaymentChange}>
                        <Box
                            sx={{
                                ...BillingFormStyles.paymentOption,
                                ...(paymentMethod === "card" &&
                                    BillingFormStyles.paymentOptionSelected)
                            }}
                        >
                            <FormControlLabel
                                value="card"
                                control={<Radio />}
                                label={
                                    <Box sx={BillingFormStyles.paymentOptionHeader}>
                                        <Typography sx={BillingFormStyles.paymentLabel}>Card</Typography>

                                        <Box sx={BillingFormStyles.paymentLogos}>
                                            <img src={cards} alt="Cards" height="35" />
                                            <img src={visa} alt="Visa" height="35" />
                                            <img src={mastercard} alt="Mastercard" height="35" />
                                        </Box>
                                    </Box>
                                }
                                sx={BillingFormStyles.paymentOptionLabel}
                            />

                            {paymentMethod === "card" && (
                                <Box sx={{ p: 2 }}>

                                    <TextField
                                        onChange={handleChange}
                                        value={billingData.cardName}
                                        fullWidth
                                        required
                                        id="cardName"
                                        name="cardName"
                                        label="Cardholder Name"
                                        type="text"
                                        placeholder="Joe Doe"
                                        sx={{ mb: 2 }}
                                    />

                                    <TextField
                                        onChange={handleChange}
                                        value={billingData.cardNumber}
                                        fullWidth
                                        required
                                        id="cardNumber"
                                        name="cardNumber"
                                        label="Card Number"
                                        type="text"
                                        placeholder="**** **** **** ****"
                                        sx={{ mb: 2 }}
                                    />

                                    <Box sx={BillingFormStyles.form}>
                                        <TextField
                                            sx={BillingFormStyles.formInput}
                                            required
                                            id="expiry"
                                            name="expiry"
                                            label="Expiry"
                                            placeholder="MM / YY"
                                        />

                                        <TextField
                                            sx={BillingFormStyles.formInput}
                                            required
                                            id="cvc"
                                            name="cvc"
                                            label="CVC"
                                            placeholder="***"
                                        />
                                    </Box>

                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Save payment method" />
                                    </FormGroup>

                                    <img src={stripe} alt="Stripe" height="35" />
                                </Box>
                            )}
                        </Box>

                        <Box sx={{
                            ...BillingFormStyles.paymentOption,
                            ...(paymentMethod === "paypal" &&
                                BillingFormStyles.paymentOptionSelected),
                        }}
                        >
                            <FormControlLabel
                                value="paypal"
                                control={<Radio />}
                                label={
                                    <Box sx={BillingFormStyles.paymentOptionHeader}>
                                        <Typography sx={BillingFormStyles.paymentLabel}>
                                            PayPal
                                        </Typography>
                                        <img src={paypal} alt="PayPal" height="30" />
                                    </Box>
                                }
                                sx={{ width: "100%" }}
                            />
                            {paymentMethod === "paypal" && (
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        You will be redirected to PayPal
                                        after reviewing your order.
                                    </Typography>
                                </Box>
                            )}
                        </Box>

                    </RadioGroup>

                    <Box sx={BillingFormStyles.form}>
                        <Button sx={BillingFormStyles.btn}
                            type="submit" variant="contained">Continue to Review & Pay</Button>
                        <Button sx={BillingFormStyles.btn}
                            type="button" variant="outlined" onClick={handleBack}>Back to Shipping </Button>
                    </Box>
                </CardContent>
            </Card>
        </form>
    )
}
export default BillingForm
import { ShippingFormStyles } from "./ShippingFormStyles"
import { Card, CardContent, Box, Button, TextField, Typography, FormControlLabel, FormGroup, Checkbox } from "@mui/material"

function ShippingForm({ handleNext, shippingData, setShippingData }) {


    const handleChange = (e) => {
        setShippingData({
            ...shippingData,
            [e.target.name]: e.target.value

        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(shippingData)
        handleNext()
    }
    return (
        <form onSubmit={handleSubmit} style={ShippingFormStyles.shippingContainer}>
            <Card sx={ShippingFormStyles.shippingContainer}>
                <CardContent sx={ShippingFormStyles.shippingContent}>
                    <Typography variant="h2" sx={ShippingFormStyles.title}>Shipping Address</Typography>
                    <Box sx={ShippingFormStyles.form}>
                        <TextField
                            onChange={handleChange}
                            value={shippingData.firstName}
                            sx={ShippingFormStyles.formInput}
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            type="text"
                        />
                        <TextField
                            onChange={handleChange}
                            value={shippingData.lastName}
                            sx={ShippingFormStyles.formInput}
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            type="text"
                        />
                    </Box>
                    <TextField
                        onChange={handleChange}
                        value={shippingData.addressOne}
                        required
                        id="addressOne"
                        name="addressOne"
                        label="Address Line 1"
                        type="text"
                    />
                    <TextField
                        onChange={handleChange}
                        value={shippingData.addressTwo}
                        id="addressTwo"
                        name="addressTwo"
                        label="Address Line 2"
                        type="text"
                    />
                    <Box sx={ShippingFormStyles.form}>
                        <TextField
                            onChange={handleChange}
                            value={shippingData.country}
                            sx={ShippingFormStyles.formInput}
                            required
                            id="country"
                            name="country"
                            label="Country"
                            type="text"
                        />
                        <TextField
                            onChange={handleChange}
                            value={shippingData.city}
                            sx={ShippingFormStyles.formInput}
                            required
                            id="city"
                            name="city"
                            label="City"
                            type="text"
                        />
                    </Box>
                    <TextField
                        onChange={handleChange}
                        value={shippingData.postalCode}
                        required
                        id="postalCode"
                        name="postalCode"
                        label="Postal Code"
                        type="text"
                    />
                    <TextField
                        onChange={handleChange}
                        value={shippingData.phoneNumber}
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone Number"
                        type="text"
                    />
                    <TextField
                        onChange={handleChange}
                        value={shippingData.email}
                        required
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                    />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Use profile information" />
                    </FormGroup>
                    <Button sx={ShippingFormStyles.btn}
                        type="submit" variant="contained">Continue to Billing Information</Button>
                </CardContent>
            </Card>
        </form>
    )
}
export default ShippingForm
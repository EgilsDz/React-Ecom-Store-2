import { Box, Stepper, Step, StepLabel, } from "@mui/material"


function CheckoutStepper({ activeStep }) {
    const steps = ['Shipping', 'Billing', 'Review']

    return (
        <>
            <Box>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

        </>

    )
}
export default CheckoutStepper
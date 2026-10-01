import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import CheckoutStepper from "../../components/CheckoutStepper"
import OrderItem from "../../components/OrderItem/OrderItem"
import ShippingForm from "../../components/ShippingForm/ShippingForm"
import BillingForm from "../../components/BillingForm/BillingForm"
import Review from "../../components/Review/Review"
import Payment from "../../components/Payment/Payment"
import { Card, CardContent, Box, Typography, } from "@mui/material"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { checkoutStyles } from "./checkoutStyles"
import { useNavigate } from "react-router-dom"
import { createOrder } from "../../features/Checkout/checkoutSlice"
import { clearCart } from "../../features/cart/cartSlice"



function Checkout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const auth = useSelector((state) => state.auth)
    const isPaid = useSelector((state) => state.checkout.isPaid)
    const [activeStep, setActiveStep] = useState(0)

    const initialShippingData = {
        firstName: "",
        lastName: "",
        addressOne: "",
        addressTwo: "",
        country: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        email: "",
    }
    const [shippingData, setShippingData] = useState(initialShippingData);

    const initialBillingData = {
        cardName: "",
        cardNumber: "",
    }
    const [billingData, setBillingData] = useState(initialBillingData);
    const [paymentMethod, setPaymentMethod] = useState("card");
    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }
    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const generateOrderId = () => {
        return Math.floor(100000000 + Math.random() * 900000000)
    }
    const [orderId] = useState(generateOrderId)


    useEffect(() => {
        if (isPaid) {
            async function CreateOrder() {
                const orderItems = cart.cartItems.map((cartItem) =>
                ({
                    productId: cartItem.id,
                    quantity: cartItem.quantity,
                    priceAtPurchase: cartItem.price
                })
                )
                const orderPrice = Number(cart.total.toFixed(2))
                const userId = auth.currentUser.id
                const order = {
                    orderId: orderId,
                    userId: userId,
                    items: orderItems,
                    deliveryInfo: shippingData,
                    totalPrice: orderPrice,
                    paymentMethod: paymentMethod,
                    status: "Processing",
                    createdAt: new Date().toISOString()
                }
                await dispatch(createOrder(order)).unwrap()
                dispatch(clearCart(userId))
                navigate("/confirmation", {
                    state: {
                        orderId
                    }
                })
            }
            CreateOrder()

        }
    }, [isPaid])
    return (
        <>
            <Navbar />
            <Box sx={checkoutStyles.checkoutStepper}>
                <CheckoutStepper
                    activeStep={activeStep}
                />
            </Box>
            <Box sx={checkoutStyles.pageContainer}>
                {activeStep === 0 && (
                    <ShippingForm
                        handleNext={handleNext}
                        shippingData={shippingData}
                        setShippingData={setShippingData}
                    />
                )}

                {activeStep === 1 && (
                    <BillingForm
                        handleNext={handleNext}
                        handleBack={handleBack}
                        billingData={billingData}
                        setBillingData={setBillingData}
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                    />
                )}

                {activeStep === 2 && (
                    <Review
                        handleBack={handleBack}
                        handleNext={handleNext}
                        shippingData={shippingData}
                        billingData={billingData}
                        paymentMethod={paymentMethod}
                    />
                )}
                {activeStep === 3 && (
                    <Payment
                        orderId={orderId}
                    />
                )}
                <Box sx={checkoutStyles.orderContainer}>
                    <Card sx={checkoutStyles.orderSummary}>
                        <CardContent>
                            <Typography variant="h2" sx={checkoutStyles.title}>Order Summary</Typography>
                            <Typography variant="body2" sx={checkoutStyles.orderId}>#{orderId}</Typography>
                            <Box sx={checkoutStyles.summaryRow}>
                                <Typography variant="h4" sx={checkoutStyles.itemText}>Items</Typography>
                                <Typography variant="h4" sx={checkoutStyles.itemText}>{cart.amount}</Typography>
                            </Box>
                            <Box sx={checkoutStyles.summaryRow}>
                                <Typography variant="h4" sx={checkoutStyles.totalText}>Total</Typography>
                                <Typography variant="h4" sx={checkoutStyles.totalText}>€{cart.total.toFixed(2)}</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography variant="h2" sx={checkoutStyles.title}>Order Details</Typography>
                            {cart.cartItems.map((cartItem) => (
                                <OrderItem
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                />
                            ))}
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <Footer />
        </>

    )
}

export default Checkout
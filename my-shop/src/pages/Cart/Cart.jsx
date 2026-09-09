import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Typography, Card, CardContent, Box, Button, Skeleton } from "@mui/material"
import { Link } from "react-router-dom"
import { CartStyles } from "./CartStyles"
import { useSelector, useDispatch } from "react-redux"
import { decreaseQuantity, increaseQuantity } from "../../features/cart/cartSlice"

const images = import.meta.glob(
    "../../assets/images/product_images/*.png",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
)


function Cart() {

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    return (
        cart.cartItems.length === 0 ? (<Box>
            <Navbar />
            <Typography sx={CartStyles.title} variant="h5">Shopping Cart</Typography>
            <Card sx={CartStyles.emptyCard}>
                <CardContent>
                    <Typography>Your shopping cart is empty</Typography>
                    <Typography>Go to <Link to="/category" style={CartStyles.Link}>Category Page</Link></Typography>
                </CardContent>
            </Card>
            <Footer />
        </Box>) : (
            <Box>
                <Navbar />
                <Box sx={CartStyles.titleBox}>
                    <Typography variant="h5">Shopping Cart</Typography>
                    <Typography sx={CartStyles.itemTotal} variant="h5">Total:{cart.total.toFixed(2)}$

                    </Typography>
                </Box>

                {cart.cartItems.map((cartitems) => {

                    const itemTotal = cartitems.price * cartitems.quantity

                    const imagePath =
                        images[
                        `../../assets/images/product_images/${cartitems.image}`
                        ]

                    return (
                        <Card key={cartitems.id} sx={CartStyles.Fullcard}>
                            <CardContent sx={CartStyles.card}>
                                <Box>
                                    {cartitems?.image ? (
                                        <img
                                            src={imagePath}
                                            alt={cartitems.title}
                                            style={{
                                                width: "150px",
                                                height: "150px",
                                                objectFit: "contain",
                                            }}
                                        />
                                    ) : (
                                        <Skeleton
                                            animation="wave"
                                            sx={{
                                                width: "150px",
                                                height: "150px",
                                                objectFit: "contain",
                                            }}
                                        />
                                    )}
                                </Box>

                                <Box sx={CartStyles.specsContainer}>
                                    <Typography variant="h4" sx={CartStyles.specsTitle}>
                                        {cartitems.title}
                                    </Typography>

                                    <Typography variant="body2" sx={CartStyles.specs}>
                                        Year: {cartitems.year}
                                    </Typography>

                                    <Typography variant="body2" sx={CartStyles.specs}>
                                        RAM Memory: {cartitems.RAM}
                                    </Typography>

                                    <Typography variant="body2" sx={CartStyles.specs}>
                                        Warranty: {cartitems.warranty_period}
                                    </Typography>

                                    <Typography variant="body2" sx={CartStyles.specs}>
                                        Price: {cartitems.price}
                                    </Typography>
                                </Box>

                                <Box sx={CartStyles.buttonContainer}>
                                    <Button
                                        variant="outlined"
                                        sx={CartStyles.CartBtn}
                                        onClick={() =>
                                            dispatch(
                                                decreaseQuantity(
                                                    cartitems.id
                                                )
                                            )
                                        }
                                    >
                                        -
                                    </Button>

                                    <Typography
                                        sx={CartStyles.quantity}
                                    >
                                        {cartitems.quantity}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        sx={CartStyles.CartBtn}
                                        onClick={() =>
                                            dispatch(
                                                increaseQuantity(
                                                    cartitems.id
                                                )
                                            )
                                        }
                                    >
                                        +
                                    </Button>
                                </Box>

                                <Box>
                                    <Typography sx={CartStyles.total}>
                                        Total:{itemTotal.toFixed(2)}$
                                    </Typography>
                                </Box>

                            </CardContent>
                        </Card>
                    )
                })}
                <Footer />
            </Box>
        )
    )
}
export default Cart
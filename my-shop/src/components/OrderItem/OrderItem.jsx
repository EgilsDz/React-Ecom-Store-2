import { Box, Card, CardContent, Typography, Skeleton, IconButton } from "@mui/material"
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { OrderItemStyles } from "./OrderItemStyles";

function OrderItem({ cartItem }) {

    const images = import.meta.glob(
        "../../assets/images/product_images/*.png",
        {
            eager: true,
            query: "?url",
            import: "default",
        }
    )

    const itemTotal = cartItem.price * cartItem.quantity

    const imagePath =
        images[
        `../../assets/images/product_images/${cartItem.image}`
        ]

    return (
        <Box>
            <Card sx={OrderItemStyles.card}>
                <CardContent sx={OrderItemStyles.cardContent}>
                    <Box>
                        {cartItem?.image ? (
                            <img
                                src={imagePath}
                                alt={cartItem.title}
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
                    <Box sx={OrderItemStyles.info}>
                        <Typography sx={OrderItemStyles.title}>{cartItem.title}</Typography>
                        <Box sx={OrderItemStyles.quantityBox}>
                            <Typography sx={OrderItemStyles.quantity}>Qty {cartItem.quantity}</Typography>
                        </Box>
                        <Typography sx={OrderItemStyles.price}>€{itemTotal}</Typography>
                    </Box>
                    <Box>
                        <IconButton>
                            <CloseSharpIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
export default OrderItem
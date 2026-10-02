import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { MyOrdersStyles } from "./MyOrdersStyles"
import { fetchOrders } from "../../features/Orders/ordersSlice"
import { Box, Typography, Card, CardContent, Chip } from "@mui/material"


function MyOrders() {
    const auth = useSelector((state) => state.auth)
    const orders = useSelector((state) => state.orders)
    const dispatch = useDispatch()
    const currentUser = auth.currentUser
    useEffect(() => {
        if (currentUser) {
            dispatch(fetchOrders(currentUser.id))
        }
    }, [currentUser])

    const statusColor = {
        Processing: "primary",
        Shipped: "warning",
        Delivered: "success",
    }
    return (
        <Box>
            {orders.orders.map((orderItem) => (
                <Card sx={MyOrdersStyles.card} key={orderItem.orderId}>
                    <CardContent sx={MyOrdersStyles.cardContent}>
                        <Box sx={MyOrdersStyles.header}>
                            <Typography sx={MyOrdersStyles.orderId}>Order: #{orderItem.orderId}</Typography>
                            <Chip color={statusColor[orderItem.status]} label={orderItem.status} variant="filled" />
                        </Box>
                        <Box>
                            <Typography sx={MyOrdersStyles.date}>Date: {new Date(orderItem.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={MyOrdersStyles.total}>Total: {orderItem.totalPrice.toFixed(2)}€</Typography>
                        </Box>

                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}
export default MyOrders
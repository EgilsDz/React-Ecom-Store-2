import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const CheckoutRoute = ({ children }) => {
    const { cartItems } = useSelector((state) => state.cart)
    //const { isPaid } = useSelector((state) => state.checkout)
    if (cartItems.length === 0) {
        console.log("i shot first hi hi - route");
        return <Navigate to="/cart" replace />;
    }

    return children;
};

export default CheckoutRoute
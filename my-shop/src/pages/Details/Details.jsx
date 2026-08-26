import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../features/products/productsSlice";


function Details() {
    let { id } = useParams();
    const products = useSelector(state => state.products.productItems)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const product = products.find((product) => product.id == id)

    return (

        <div>
            <Navbar />
            <div>{product?.title}</div>
            <Footer />
        </div>
    )
}
export default Details
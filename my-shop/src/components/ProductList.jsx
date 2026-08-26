import { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import ProductCard from "./ProductCard/ProductCard";

function ProductList({ onEdit, onDelete }) {
    const products = useSelector(state => state.products.productItems)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 225px)", columnGap: "20px", justifyContent: "center", marginBottom: "80px", rowGap: "50px", }}>
            {products.map((product) => (
                <ProductCard
                    onEdit={onEdit}
                    onDelete={onDelete}
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    description={product.short_description}
                    id={product.id}
                    product={product}
                />
            ))}
        </Box>
    )
}
export default ProductList
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import ProductCard from "../ProductCard/ProductCard";
import { ProductListStyles } from "./ProductListStyles";
import { useSearchParams } from "react-router-dom";

function ProductList({ onEdit, onDelete }) {
    const products = useSelector(state => state.products.productItems)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const [searchParams] = useSearchParams();
    const productCategory = searchParams.get("category")
    const filteredProducts = products.filter((product) => (productCategory === product.category))
    const productsToShow = productCategory === null ? products : filteredProducts
    return (
        <Box sx={ProductListStyles.container}>
            {productsToShow.map((product) => (
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
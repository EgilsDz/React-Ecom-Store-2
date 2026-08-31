import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { ProductsStyles } from "./ProductsStyles"
import ProductModal from "../../components/ProductModal/ProductModal"
import { Button, Box, } from "@mui/material"
import ProductList from "../../components/ProductList/ProductList"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteProducts } from "../../features/products/productsSlice"

function Products() {
    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const dispatch = useDispatch();

    const handleOpen = () => {
        setSelectedProduct(null)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedProduct(null)
    }

    const handleEdit = (product) => {
        setSelectedProduct(product)
        setOpen(true)
    }

    const handleDelete = (product) => {
        dispatch(deleteProducts(product.id))
    }


    return (
        <Box sx={ProductsStyles.page}>
            <Navbar />
            <Box sx={ProductsStyles.main}>
                <Box sx={ProductsStyles.ButtonContainer} >
                    <Button variant="contained" onClick={handleOpen} >+ ADD NEW PRODUCT</Button>
                    <ProductModal open={open}
                        onClose={handleClose}
                        selectedProduct={selectedProduct}
                        key={selectedProduct?.id ?? "new"}
                    />
                </Box>
                <Box sx={ProductsStyles.productList}>
                    <ProductList onEdit={handleEdit} onDelete={handleDelete} />
                </Box>
            </Box>

            <Footer />
        </Box>
    )
}
export default Products
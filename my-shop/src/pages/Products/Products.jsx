import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProductModal from "../../components/ProductModal/ProductModal"
import { Button, Box, } from "@mui/material"
import ProductList from "../../components/ProductList"
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
        <div>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 10, mb: 10, mt: 5 }}>
                <Button variant="contained" onClick={handleOpen} >+ ADD NEW PRODUCT</Button>
                <ProductModal open={open}
                    onClose={handleClose}
                    selectedProduct={selectedProduct}
                    key={selectedProduct?.id ?? "new"}
                />
            </Box>
            <Box>
                <ProductList onEdit={handleEdit} onDelete={handleDelete} />
            </Box>
            <Footer />
        </div>
    )
}
export default Products
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Typography, Button, Box, Card, CardContent, Skeleton } from '@mui/material'
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../features/products/productsSlice";
import ProductMenu from "../../components/ProductMenu/ProductMenu";
import { DetailsStyles } from "./DetailsStyles";
import ProductModal from "../../components/ProductModal/ProductModal";
import { deleteProducts } from "../../features/products/productsSlice";

const images = import.meta.glob(
    "../../assets/images/product_images/*.png",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
)


function Details() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    let { id } = useParams();
    const products = useSelector(state => state.products.productItems)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const product = products.find((product) => product.id == id)

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        setOpen(true);
    };

    const handleDelete = async (product) => {
        try {
            await dispatch(deleteProducts(product.id)).unwrap();
            navigate("/products");
        } catch (error) {
            console.log("Delete failed", error);
        }
    };


    const imagePath = images[`../../assets/images/product_images/${product?.image}`]

    return (
        <div>
            <Navbar />
            <Card sx={DetailsStyles.card}>
                <CardContent>
                    <Box sx={DetailsStyles.detailsContainer}>
                        <Box sx={DetailsStyles.LeftSection}>
                            <Box sx={DetailsStyles.descriptionSection}>
                                <Typography variant="h4" sx={DetailsStyles.title}>{product?.title}</Typography>
                                <Typography variant="body2" sx={DetailsStyles.desc} >
                                    {product?.long_description}
                                </Typography>
                            </Box>
                            <Box sx={DetailsStyles.specsSection}>
                                <Typography sx={DetailsStyles.Specstext}>Year: {product?.year}</Typography>
                                <Typography sx={DetailsStyles.Specstext}>RAM Memory: {product?.RAM}</Typography>
                                <Typography sx={DetailsStyles.Specstext}>Warranty: {product?.warranty_period}</Typography>
                            </Box>
                            <Box sx={DetailsStyles.featuresSection}>
                                <Typography sx={DetailsStyles.featuresTitle}>Features:</Typography>
                                <ul style={DetailsStyles.list}>
                                    {product?.features?.map((currentFeature, index) => (
                                        <li key={index}>{currentFeature}</li>
                                    ))}
                                </ul>

                                <Typography sx={DetailsStyles.featuresTitle}>Price: {product?.price}$</Typography>
                            </Box>
                            <Box sx={DetailsStyles.buttonSection}>
                                <ProductMenu sx={DetailsStyles.button} product={product} onEdit={handleEdit}
                                    onDelete={handleDelete} />
                                <Button variant="contained" sx={DetailsStyles.button}>Add to cart</Button>
                            </Box>
                        </Box>
                        <Box sx={DetailsStyles.RightSection}>
                            {product?.image ? (
                                <img
                                    src={imagePath}
                                    alt={product.title}
                                    style={DetailsStyles.image}
                                />
                            ) : (
                                <Skeleton
                                    animation="wave"
                                    sx={DetailsStyles.Skeletonimage}
                                />
                            )}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <ProductModal open={open}
                onClose={handleClose}
                selectedProduct={product} />
            <Footer />
        </div>
    )
}
export default Details
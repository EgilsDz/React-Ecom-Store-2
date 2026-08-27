import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import { Typography, Button, Box, Skeleton } from '@mui/material';
import { ProductCardStyles } from './ProductCardStyles';
import ProductMenu from '../ProductMenu/ProductMenu';


const images = import.meta.glob(
    "../../assets/images/product_images/*.png",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
)


function ProductCard({ title, price, description, image, id, onEdit, product, onDelete }) {

    const imagePath = images[`../../assets/images/product_images/${image}`]
    let navigate = useNavigate()
    return (
        <Card sx={ProductCardStyles.card}>
            <CardContent sx={ProductCardStyles.cardContent}>
                <Typography variant="body1" sx={ProductCardStyles.title} >{title}</Typography>
                <Typography sx={ProductCardStyles.price} >Price: {price}$</Typography>
                {image ? (
                    <img
                        src={imagePath}
                        alt={title}
                        style={ProductCardStyles.image}
                    />
                ) : (
                    <Skeleton
                        animation="wave"
                        sx={ProductCardStyles.Skeletonimage}
                    />
                )}
                <Typography variant="body2" sx={ProductCardStyles.disc} >
                    {description}
                </Typography>
                <Box sx={ProductCardStyles.buttonContainer}>
                    <Button variant="text" onClick={() => navigate(`/details/${id}`)} sx={ProductCardStyles.button}>
                        Details
                    </Button>
                    <ProductMenu
                        product={product}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Box>

            </CardContent>
        </Card>
    )

}
export default ProductCard
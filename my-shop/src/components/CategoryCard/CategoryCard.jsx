//import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import { Typography, Box, Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { CategoryCardStyles } from './CategoryCardStyles';


function CategoryCard({ title, image, category }) {
    return (
        <Box>
            <Link to={`/products?category=${category}`}
                style={{ textDecoration: "none", color: "inherit" }}>
                <Card sx={CategoryCardStyles.card}>
                    <CardContent sx={CategoryCardStyles.cardContent}>
                        <CardMedia
                            sx={CategoryCardStyles.image}
                            component="img"
                            image={image}
                            alt={title} />
                        <Typography sx={CategoryCardStyles.title}>{title}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </Box>
    )
}
export default CategoryCard
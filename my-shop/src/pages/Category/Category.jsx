import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Box } from "@mui/material"
import CategoryCard from "../../components/CategoryCard/CategoryCard"
import categoryData from "../../data/categoryData"
import { categoryStyles } from "./categoryStyles"



function Category() {
    return (
        <Box>
            <Navbar />
            <Box sx={categoryStyles.container}>
                {categoryData.map((data) => (
                    <CategoryCard

                        key={data.id}
                        title={data.title}
                        image={data.image}
                        category={data.category}
                    />
                ))}
            </Box>
            <Footer />
        </Box>
    )
}
export default Category
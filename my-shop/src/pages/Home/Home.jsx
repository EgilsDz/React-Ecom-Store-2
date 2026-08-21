import { Box, Button, Typography } from "@mui/material"
import img1 from "../../assets/images/hero-image.png"
import { homeStyles } from "./homeStyles";
import cardData from '../../data/cardData';
import YellowCard from "../../components/YellowCard/YellowCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Box>
            <Navbar />
            <Box sx={homeStyles.container}>
                <Box sx={homeStyles.textSection}>

                    <Typography variant="h4" sx={homeStyles.title}>
                        Experience the Future of Technology Today!
                    </Typography>

                    <Typography variant="body2" sx={homeStyles.description}>
                        Unleash your inner tech enthusiast with our wide range of gadgets. Become a pro expert within a moment.
                    </Typography>

                    <Box sx={homeStyles.buttons}>
                        <Button variant="outlined" component={Link} to="/contact" >
                            CONTACT US
                        </Button>
                        <Button variant="contained" component={Link} to="/products" >SHOP NOW</Button>
                    </Box>
                </Box>
                <Box sx={homeStyles.imageSection}><img src={img1} width={450} style={homeStyles.image}></img>
                </Box>
            </Box>
            <Box sx={homeStyles.cardSection}>

                <Typography variant="h5" sx={homeStyles.cardHeader}>
                    Why Choose us?
                </Typography>
                <Box sx={homeStyles.cards}>
                    {cardData.slice(0, 3).map((data, index) => (
                        <YellowCard
                            key={index}
                            icon={data.icon}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </Box>
            </Box>
            <Footer />
        </Box>

    )
}
export default Home
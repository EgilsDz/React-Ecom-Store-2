import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import YellowCard from "../../components/YellowCard/YellowCard"
import { Box, Typography } from "@mui/material"
import cardData from "../../data/cardData"
import { contactStyles } from "./contactStyles"
import MapGoogle from "../../components/MapGoogle"



function Contact() {
    return (
        <div>
            <Navbar />
            <Box sx={contactStyles.contactContainer}>
                <Box sx={contactStyles.box1}>
                    <Typography variant="h4" sx={contactStyles.title}>Contact us by Phone, Email, or Visit us in our Office!</Typography>

                    <Typography variant="body2" sx={contactStyles.address}>Our address: Brīvības gatve, 214 Teikas apkaime, Riga, Latvia</Typography>

                    <MapGoogle sx={contactStyles.map} />
                </Box>
                <Box sx={contactStyles.box2}>
                    <Box sx={contactStyles.cards}>
                        {cardData.slice(3, 5).map((data, index) => (
                            <YellowCard
                                key={index}
                                icon={data.icon}
                                title={data.title}
                                description={data.description}
                                sx={{
                                    width: "184px",
                                    height: "160px",
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
            <Footer />
        </div>
    )
}
export default Contact
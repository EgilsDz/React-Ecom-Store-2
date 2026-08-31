
export const contactStyles = {
    cards: {
        mt: { xs: 2, md: 7 },
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2, md: 4 },
        flexWrap: "wrap",

        "& .MuiCard-root": {
            width: { xs: "160px", sm: "184px", md: "200px" },
        },
    },
    box1: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        minWidth: 0,
    },
    box2: {
        width: { xs: "100%", md: "280px" },
        display: "flex",
        justifyContent: "center",

        "@media (max-width: 768px)": {
            width: "100%",
        },

    },
    contactContainer: {
        display: "flex",
        flexDirection: "row",
        color: "black",
        ml: { xs: 2, sm: 4, md: 5 },
        mr: { xs: 2, sm: 4, md: 5 },
        mb: { xs: 8, md: 15 },
        gap: { xs: 4, md: 2 },

        "@media (max-width: 768px)": {
            flexDirection: "column",
        },


    },
    map: {
        width: "100%",
        maxWidth: "700px",
    },
    title: {
        mt: { xs: 4, md: 7 },
        textAlign: "left",
        fontWeight: "bold",
        fontSize: {
            xs: "24px",
            sm: "28px",
            md: "30px",
        },
        lineHeight: 1.15,
        maxWidth: "500px",
        width: "100%",
    },

    address: {
        mt: { xs: 4, md: 9 },
        textAlign: "left",
        mb: 4,
        fontSize: {
            xs: "12px",
            sm: "13px",
        },
    }

}
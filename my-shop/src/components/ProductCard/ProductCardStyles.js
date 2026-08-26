export const ProductCardStyles = {
    card: {
        width: "225px",
        height: "280px",
        textAlign: "left",
        border: "1",
        display: "flex",
        flexDirection: "column",

    },
    image: {
        width: "100px",
        height: "125px",
        objectFit: "contain",
        alignSelf: "center",
        marginTop: "10px",
        marginBottom: "10px",

    },
    title: {
        color: 'blue',
        fontSize: "13px",

    },

    price: {
        fontSize: "9px"
    },

    disc: {
        fontSize: "10px",
        mb: 1
    },

    cardContent: {
        display: "flex",
        flexDirection: "column",
    },

    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginTop: "auto",

    },

    button: {
        minWidth: "55px",
        height: "25px",
        fontSize: "10px",
        padding: "2px 6px",
        border: "1px solid #e0e0e0"
    },
    menu: {
        "& .MuiPaper-root": {
            padding: "5px",
        }
    },

    menuItem: {
        fontSize: "14px",
        borderRadius: "6px"
    }
};
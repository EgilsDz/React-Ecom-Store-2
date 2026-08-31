

export const DetailsStyles = {
    detailsContainer: {
        display: "flex",
        mr: 3,
        ml: 7,

        "@media (max-width: 768px)": {
            flexDirection: "column",
            mr: 2,
            ml: 2,
        },
    },

    LeftSection: {
        width: "55%",

        "@media (max-width: 768px)": {
            width: "100%",
        },
    },

    RightSection: {
        width: "45%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",

        "@media (max-width: 768px)": {
            width: "100%",
            marginTop: "30px",
        },
    },

    descriptionSection: {
        mt: 3,
        textAlign: "left"
    },

    buttonSection: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        mt: 4,

        "@media (max-width: 500px)": {
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
        },
    },

    image: {
        display: "block",
        width: "80%",
        height: "auto",

        "@media (max-width: 768px)": {
            width: "60%",
        },

        "@media (max-width: 500px)": {
            width: "80%",
        },
    },

    Skeletonimage: {
        display: "block",
        width: "324px",
        height: "405px",

        maxWidth: "100%",

        "@media (max-width: 500px)": {
            width: "250px",
            height: "310px",
        },
    },

    specsSection: {
        display: "flex",
        gap: 3,
        mb: 2,

        "@media (max-width: 500px)": {
            flexDirection: "column",
            gap: 1,
        },
    },

    featuresSection: {
        textAlign: "left"
    },

    featuresTitle: {
        fontWeight: "bold",
    },

    list: {
        fontSize: "11px",
        lineHeight: 1.8,
        marginTop: "5px",
        marginBottom: "25px",
        paddingLeft: "20px",
    },

    card: {
        mt: 7,
        ml: 7,
        mr: 7,
        mb: 12,

        "@media (max-width: 768px)": {
            mt: 3,
            ml: 2,
            mr: 2,
            mb: 6,
        },
    },

    title: {
        color: 'blue',
        fontSize: "25px",
        mb: 3,

        "@media (max-width: 500px)": {
            fontSize: "21px",
        },
    },

    button: {
        textTransform: "none",
        minWidth: "75px",
        height: "32px",
        fontSize: "12px",
        padding: "4px 10px"

    },

    desc: {
        fontSize: "11px",
        mb: 3
    },

    Specstext: {
        fontWeight: "bold",
    },

    CartBtn: {
        height: "32px",
        minWidth: "15px",
        fontSize: "25px"
    },

    quantity: {
        fontSize: "25px",
        fontWeight: "bold",
    },

    quantitybox: {
        display: "flex",
        alignItems: "center",
        gap: 2
    },



};
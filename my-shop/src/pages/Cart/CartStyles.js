export const CartStyles = {

    title: {
        display: "flex",
        color: "#1976d2",
        justifyContent: "space-between",
        mr: { xs: 2, sm: 4, md: 5 },
        ml: { xs: 2, sm: 4, md: 5 },
        mt: { xs: 3, md: 6 },
        mb: { xs: 5, md: 10 },
        fontSize: {
            xs: "18px",
            sm: "20px",
        },
    },

    emptyCard: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 2,
        pb: 3,
        mb: { xs: 10, md: 20 },
        color: "#1976d2",
        width: {
            xs: "90%",
            sm: "70%",
            md: "45%",
        },
        mx: "auto"
    },

    Link: {
        color: "#1976d2",
    },

    quantity: {
        fontSize: {
            xs: "20px",
            md: "25px",
        },
        fontWeight: "bold",
    },

    quantitybox: {
        display: "flex",
        alignItems: "center",
        gap: 2
    },
    Fullcard: {
        margin: {
            xs: 2,
            sm: 3,
            md: 5,
        },
    },

    card: {
        display: "flex",
        alignItems: "center",
        gap: {
            xs: 2,
            sm: 4,
            md: 8,
        },

        "@media (max-width: 700px)": {
            flexDirection: "column",
            textAlign: "center",
            py: 3,
        },
    },


    specsTitle: {
        color: "#1976d2",
        textAlign: {
            xs: "center",
            md: "left",
        },
        fontSize: {
            xs: "18px",
            sm: "20px",
        },
        fontWeight: "bold",
        mb: 3,

    },

    specs: {
        fontSize: "11px",
        textAlign: {
            xs: "center",
            md: "left",
        },
        mb: 0.5,
    },

    CartBtn: {
        height: "32px",
        minWidth: "15px",
        fontSize: "25px",

    },

    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        mr: {
            xs: 0,
            md: 2,
        },

    },

    itemTotal: {
        fontSize: {
            xs: "18px",
            sm: "20px",
        },
    },

    total: {
        mr: {
            xs: 0,
            md: 5,
        },
        fontWeight: "bold",
    },

    titleBox: {
        display: "flex",
        color: "#1976d2",
        justifyContent: "space-between",
        alignItems: "center",
        mr: {
            xs: 2,
            sm: 4,
            md: 5,
        },
        ml: {
            xs: 2,
            sm: 4,
            md: 5,
        },
        mt: {
            xs: 3,
            md: 6,
        },
        mb: {
            xs: 5,
            md: 10,
        },
        fontSize: "20px",
    },

    specsContainer: {
        flex: "1",
        width: {
            xs: "100%",
            md: "auto",
        },
    }
}

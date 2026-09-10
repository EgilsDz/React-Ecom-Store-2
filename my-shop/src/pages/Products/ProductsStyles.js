export const ProductsStyles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
    },

    main: {
        flex: 1,
        px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 10,
        },
        py: {
            xs: 3,
            sm: 4,
            md: 5,
        },
    },

    ButtonContainer: {
        display: "flex",
        justifyContent: {
            xs: "center",
            sm: "flex-end",
        },
        mb: {
            xs: 4,
            sm: 6,
            md: 8,
        },
    },

    addButton: {
        width: {
            xs: "100%",
            sm: "auto",
        },
    },

    productList: {
        width: "100%",
        overflowX: "auto",
    },


};
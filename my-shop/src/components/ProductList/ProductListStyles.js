export const ProductListStyles = {
    container: {
        width: "100%",
        display: "grid",

        gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 225px)",
            md: "repeat(3, 225px)",
            lg: "repeat(4, 225px)",
        },

        justifyContent: "center",

        columnGap: {
            xs: 2,
            sm: 3,
            md: 3,
        },

        rowGap: {
            xs: 3,
            sm: 4,
            md: 5,
        },

        marginBottom: {
            xs: 5,
            sm: 7,
            md: 10,
        },

        px: {
            xs: 2,
            sm: 2,
            md: 3,
        },
    },
};
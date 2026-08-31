export const homeStyles = {
    container: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        justifyContent: "space-between",
        backgroundColor: "#f5e48b",
        minHeight: { xs: "auto", md: 400 },
        overflow: "hidden",
        px: { xs: 3, sm: 5, md: 6 },
        py: { xs: 4, md: 0 },

    },

    textSection: {
        width: { xs: "100%", md: "380px" },
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: { xs: 2, md: 4 },
    },

    title: {
        fontSize: { xs: "28px", sm: "30px", md: "32px" },
        lineHeight: 1.2,
        fontWeight: "bold",
        color: "black",
        textAlign: { xs: "center", md: "left" },
    },

    description: {
        mt: 3,
        fontSize: "13px",
        lineHeight: 1.6,
        textAlign: { xs: "center", md: "left" },
        maxWidth: { xs: "100%", md: "380px" },
    },

    buttons: {
        display: "flex",
        gap: 2,
        mt: 4,
        justifyContent: { xs: "center", md: "flex-start" },
        flexWrap: "wrap",
    },

    imageSection: {
        width: { xs: "100%", md: "50%" },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        alignSelf: "stretch",
        mt: { xs: 2, md: 0 },
    },

    image: {
        display: "block",
        width: "100%",
        maxWidth: 450,
        height: "auto",
    },

    cardSection: {
        color: "black",
        display: "flex",
        flexDirection: "column",
        px: { xs: 3, sm: 4, md: 6 },
    },

    cardHeader: {
        mt: { xs: 4, md: 5 },
        textAlign: "center",
        fontWeight: "bold",
    },

    cards: {
        mt: { xs: 4, md: 6 },
        mb: 5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 3, md: 5 },
        justifyContent: "center",
        alignItems: "center",
    }
};
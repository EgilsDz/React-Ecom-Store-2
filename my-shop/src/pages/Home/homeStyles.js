export const homeStyles = {
    container: {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        backgroundColor: "#f5e48b",
        minHeight: 400,
        overflow: "hidden",
        px: { xs: 3, md: 6 },

    },

    textSection: {
        width: { xs: "100%", md: "380px" },
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: 4,
    },

    title: {
        fontSize: { xs: "28px", md: "32px" },
        fontWeight: "bold",
        color: "black",
        textAlign: "left",
    },

    description: {
        mt: 3,
        fontSize: "13px",
        textAlign: "left"
    },

    buttons: {
        display: "flex",
        gap: 2,
        mt: 4,
    },

    imageSection: {
        width: { xs: "100%", md: "50%" },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        alignSelf: "stretch",
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
        flexDirection: "column"
    },

    cardHeader: {
        mt: 5,
        textAlign: "center",
        fontWeight: "bold",
    },

    cards: {
        mt: 6,
        mb: 5,
        display: "flex",
        gap: 5,
        justifyContent: "center"
    }
};
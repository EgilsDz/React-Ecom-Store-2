export const profileStyles = {
    page: {
        minHeight: "100vh",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 1, sm: 2, md: 3 },
        py: 3,
    },

    profileSection: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        maxWidth: "900px",
        gap: 2,
        boxSizing: "border-box",
    },

    profileCard: {
        flex: { xs: "none", md: 4 },
        minWidth: 0,
    },

    aboutCard: {
        flex: { xs: "none", md: 6 },
        minWidth: 0,
    },

    ordersSection: {
        width: "100%",
        maxWidth: "900px",
        mt: 2,
        boxSizing: "border-box",
    },

    cardcontent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
    },

    card: {
        backgroundColor: "white",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        pt: 3,
        pb: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 2,
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: "50%",
        objectFit: "cover",
        mb: 2,
    },

    button: {
        width: "180px",
        mb: 1,
    },

    title: {
        fontSize: "35px",
        mb: "20px"
    },

    info: {
        textAlign: "left"
    },
};
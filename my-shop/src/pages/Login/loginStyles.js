export const LoginStyles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    cardcontent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },

    loginTextBox: {
        width: "70%",
        "& .MuiInputBase-input": {
            fontSize: "0.8em",
            padding: "15px 10px"
        },

        "& .MuiInputBase-root": {
            height: "40px"
        },

        "& .MuiFilledInput-underline:after": {
            borderBottom: "none"
        },

        "& .MuiFilledInput-underline:before": {
            borderBottom: "none"
        },
    },

    card: {
        backgroundColor: "white",
        maxWidth: "550px",
        width: "90%",
        pt: "50px",
        pb: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    loginTextContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        alignItems: "center",
        width: "100%",
        gap: "20px"
    },

    title: {
        fontSize: "25px",
        mb: "18px",
    },

    register: {
        color: '#1976d2',
        textAlign: "center",
        textDecoration: "none"
    },

    loginButton: {
        mt: "18px",
        mb: "18px",
        width: "auto"
    },
};
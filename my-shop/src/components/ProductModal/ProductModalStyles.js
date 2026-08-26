export const ProductModalStyles = {
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    modalBody: {
        backgroundColor: "white",
        maxWidth: "550px",
        width: "90%",
        textAlign: "left",
        pt: "50px",
        pb: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px"
    },
    modalTextBox: {
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
    modalTextContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        alignItems: "center",
        width: "100%",
        gap: "15px"

    },
    modalBtnContainer: {
        display: "flex",
        gap: "10px",
        justifyContent: "center",
    }


};
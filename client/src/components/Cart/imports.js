import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cart: {
        width: "100%",
        height: "90%",
        backgroundColor: "#ffffff",
        zIndex: 500,
        overflowY: "scroll",
        overflowX: "hidden",
        position: " relative",
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
    },
    header: {
        position: "relative",
        height: "22%",
    },
    heading: {
        backgroundColor: "black",
        color: "#d0d0d0",
        position: "absolute",
        zIndex: 10,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "5rem",
        paddingRight: "2rem",
        marginTop: "3rem",
    },
    svg: {
        position: "absolute",
        width: "100%",
        height: "50%",
        zIndex: 1,
    },
    info: {
        width: "100%",
        marginTop: "3rem",
        backgroundColor: "transparent",
        // border: "2px solid purple",
        zIndex: 600,
        display: "block",
        position: "relative",
        color: "#888888",
    },
    labels: {
        textAlign: "center",
        height: "3rem",
        fontSize: "12.7px",
        letterSpacing: "0.17em",
        fontWeight: "800",
    },
    row: {
        color: "black",
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    col: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        flex: 1,
        justifyContent: "center",
    },
    product: {
        display: "block",
        margin: "2rem",
    },
    price: {
        marginLeft: "50%",
        fontWeight: "800",
    },
    placeOrder: {
        backgroundColor: "#d0d0d033",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        //left: 0,
        position: "sticky",
        height: "30%",
        width: "100%",
        //bottom: 0,
    },
    subTotal: {
        borderTop: "5px black solid",
        marginRight: "1rem",
        flexBasis: "100%",
        flex: 1,
        fontFamily: "'Bebas Neue', cursive",
        letterSpacing: "2.2px",
        fontWeight: "800",
    },
}));

export { useStyles };

import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    // ### styles ###
    content: {
        paddingBottom: "10px",
        paddingTop: "10px",
        // width: "100%",
    },
    containerPagination: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        textDecoration: "none",
        cursor: "pointer"

    },
    containerPages: {
        color: "transparent",
        padding: "8px 16px",
        textDecoration: "none",
        transition: "background-color"
    },
    prevNextButton: {
        paddingLeft: "16px",
        textDecoration: "none",
        color: "transparent",
        textAlign: "center",
        fontSize: "20px",
        // background: "red"
    },
    containerPageLinks: {
        color: "#fff"
    },
    activePage: {
        backgroundColor: "#fff2",
        borderRadius: "50%",
        color: "transparent"
    }
    // ### styles ###
}))

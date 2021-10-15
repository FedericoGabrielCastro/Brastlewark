import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    // ### styles ###
    body: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        background: "#262626",
        minHeight: "100vh",
    },
    main:{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px 100px"
    },
    content: {
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    titleTextContext: {
        width: "100%",
        maxWidth: "600px"
    },
    titlePage: {
        color: "#fff",
        fontSize: "5em",
        fontWeight: 300
    },
    text: {
        color: "#fff",
        fontWeight: 400,
        fontSize: "1.1em",
        lineHeight: "1.5em",
        margin: "20px 0"
    },
    prevNext: {
        position: "relative",
        userSelect: "none",
        display: "flex",
        flexDirection: "column"
    },
    prevNextTitle: {
        position: "relative",
        color: "#fff2",
        letterSpacing: "10px"
    },
    button: {},
    // ### styles ###

    // ### animations ###
    // ### animations ###
}))
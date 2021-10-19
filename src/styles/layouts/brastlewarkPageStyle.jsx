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
        padding: "30px 100px",
    },
    content: {
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '@media (max-width: 992px)': {
            display: "flex",
            flexDirection: "column",
        }
    },
    titleTextContext: {
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
        
    },
    titlePage: {
        color: "#fff",
        fontSize: "70px",
        letterSpacing: "4px",
        fontWeight: 500,
        '@media (max-width: 992px)': {
            fontWeight: 300,
            fontSize: "40px",
        }
    },
    text: {
        color: "#fff",
        fontWeight: 400,
        fontSize: "1.1em",
        lineHeight: "1.5em",
        textAlign: "center",
        '@media (max-width: 992px)': {
            fontSize: "1em",
            lineHeight: "1em",
            paddingRight: "10px"
        }
    },
    prevNext: {
        position: "relative",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    prevNextTitle: {
        position: "relative",
        color: "#fff2",
        letterSpacing: "10px"
    },
    // ### styles ###

    // ### animations ###
    // ### animations ###
}))
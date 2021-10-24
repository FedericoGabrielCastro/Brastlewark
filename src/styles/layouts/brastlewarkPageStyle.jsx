import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    // ### styles ###
    body: {
        margin: 0,
        padding: 0,
        background: "#262626",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    titleSearch: {
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
    searchContent: {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
    },
    searchInput: {
        height: "30px",
        width: "100%",
        textAlign: "center",
        borderRadius: "30px",
        
    },
    contentMain: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontWeight: 400,
        fontSize: "1.1em",
        lineHeight: "1.5em",
        textAlign: "center",
        margin: "20px",
        '@media (max-width: 992px)': {
            fontSize: "1em",
            lineHeight: "1em",
            paddingRight: "10px"
        }
    },
    viewALlGnomes: {
        color: "#fff5",
        letterSpacing: "10px",
        paddingBottom: "10px"
    },
    // ### styles ###

    // ### animations ###
    // ### animations ###
}))
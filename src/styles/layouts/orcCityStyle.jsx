import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    // ### styles ###
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#262626",
        height: "100vh",
    },
    title: {
        fontSize: "3rem",
        color: "#fff",
        
    },
    description: {
        textAlign: "center",
        color: "#fff",
        fontSize: "1.5rem"
    },
    imgG: {
        width: "400px",
        height: "400px"
    }
    // ### styles ###
}))
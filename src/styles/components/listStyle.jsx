import {makeStyles} from '@material-ui/core'


export const useStyles = makeStyles(({
    // ### styles ###
    grid: {
        display: "grid",
        gridAutoRows: "minmax(100px auto)",
        gridTemplateColumns: "1fr 1fr 1fr",
    },
    contentInfoCard:{
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px"
    },
    imageGnome:{
        maxHeight: "200px",
        maxWidth: "400px",
        minHeight: "200px",
        minWidth: "400px",
        borderRadius: "20px"
    },
    table: {
        fontSize: "12px",
        '& td': {
            textAlign: "center",
        }
    },
    titleName: {
        letterSpacing: "2px",
        fontSize: "20px"
    },
    // ### styles ###

    // ### animations ###
    // ### animations ###
}))

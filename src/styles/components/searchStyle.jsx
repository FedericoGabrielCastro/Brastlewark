import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    // ### styles ###
    searchContent: {
        // position: "absolute",
        // background: "transparent",
        // transition: ".5s",
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
    contentResult: {
        textAlign: "center",
        //  background: "#336",
        borderRadius: "30px",
        marginTop: "10px",
        width: "50%",
        overflowY: "scroll",
    },
    searchValue: {
        color: "#fff",
        display: "none"
    }
    // ### styles ###

    // ### animations ###
    // ### animations ###
}))
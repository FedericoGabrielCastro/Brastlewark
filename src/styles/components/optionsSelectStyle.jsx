import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    // ### styles ###
    contentResult: {
        textAlign: "center",
        borderRadius: "30px",
        marginTop: "10px",
        width: "50%",
        overflowY: "scroll",
        '@media (max-width: 992px)': {
            gridTemplateColumns: "1fr"
        },
    },
    // ### styles ###
}))
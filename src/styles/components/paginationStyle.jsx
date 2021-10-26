import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    // ### styles ###
    containerPagination: {
        display: "flex",
        flexDirection: "row",
        listStyle: "none",
        alignItems: "center",
        padding: "10px",
        color: "#fff4",
        '& li': {
            cursor: "pointer",
            margin: "10px",
            fontSize: "1.5rem",
            '@media (max-width: 992px)': {
                fontSize: "1rem",
            },
        }
    },
    numberActive: {
        color: "#337ab7"
    },
    buttonPrevNext: {
        cursor: "pointer",
        border: "none",
        fontSize: "1.5rem",
        color: "#337ab7",
        backgroundColor: "transparent",
        '@media (max-width: 992px)': {
            fontSize: "1rem"
        },
    },
    icon: {
        padding: "10px",
        '&:hover': {
            opacity: "1",
            borderRadius: "50%",
            backgroundColor: "#337ab7",
        }
    }
    // ### styles ###
}))

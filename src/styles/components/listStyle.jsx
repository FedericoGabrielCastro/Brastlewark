import {makeStyles} from '@material-ui/core'

const clipPathHexagon = "polygon(0 0%, 100% 0, 100% 25%, 100% 75%, 50% 100%,0 75%)"

export const useStyles = makeStyles(({
    // ### styles ###
    grid: {
        display: "grid",
        gridAutoRows: "minmax(100px auto)",
        gridTemplateColumns: "1fr 1fr 1fr",
        '@media (max-width: 992px)': {
            gridTemplateColumns: "1fr"
        },
    },
    contentCard:{  // container
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        '& $hexagon': {
            '&:hover': {
                '& $shape': {
                    transform: "translateY(-30px)"
                },
                '&:before': {
                    opacity: "0.9",
                    transform: "scale(.8)"
                },
                '& $contentInfo': {
                    opacity: 1
                }
            },
            '&::before': {  // This is the shadow.
                content: "''",
                position: "absolute",
                bottom: "-70px",
                width: "100%",
                height: "60px",
                background: "radial-gradient(rgba(0,0,0,0.70),transparent,transparent)",
                borderRadius: "50%",
                transition: ".5s"

            },
        }
    },
    hexagon: {
        position: "relative",
        width: "350px",
        height: "400px",
        margin: "10px 20px 70px",
        '@media (max-width: 992px)': {
            width: "300px",
            height: "400px",
        },
    },
    shape: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#fff2",
        clipPath: `${clipPathHexagon}`,
        transition: ".5s"
    },
    contentInfo: { 
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "10px",
        background: "linear-gradient(45deg,#262626, rgba(0,169,244,0.3))",
        color: "#fff",
        opacity: 0,
        transition: ".5s",
        '& p': {
            textAlign: "center",
            // textOverflow: "hidden",
            overflow: "visible",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "10px"
        }
    },
    imageGnome:{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.4
    },
    table: {
        display: "grid",
        gap: "10px",        
        '& span': {
            textAlign: "center",
            fontSize: "15px",
        }
    },
    titleName: {
        fontSize: "20px",
        color: "#337",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "3px"
    },
    alingInfo: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
    },
    disable: {
        display: "none"
    },
    active: {
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: "7px",
    }
    // ### styles ###
}))

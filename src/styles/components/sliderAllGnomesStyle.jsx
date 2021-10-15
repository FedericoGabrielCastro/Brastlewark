import {makeStyles} from '@material-ui/core'

const linearGradientReflectBox = "below 1px linear-gradient(transparent, transparent, transparent, #0004)"
const linearGradientBackground = "#444"

export const useStyles = makeStyles(({
    // ### styles ###
    card: {
        position: "relative",
        display: "flex",
        paddingBottom: "10px",
        overflow: "none",
        WebkitBoxReflect: `${linearGradientReflectBox}`,
        '& $box': {
            '&:hover': {
                animationPlayState: 'running',
                filter: "grayscale(0)",
            },
            '& $imageGnome': {
                // height: "380px",
            },
            '& $titleCard': {
                height: "400px",
                color: "#ffffff",
                fontSize: "150%"
            }
        }
    },
    box: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        borderRadius: "20px",
        filter: "grayscale(1)",
        // animation: `$animateBgBox 1s linear infinite`,
        animationPlayState: "paused",
        transition: "filter 1s",
        background: `${linearGradientBackground}`,
        backgroundSize: "10px 10px",
        alignItems: "center",
    },
    contentInfoCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        margin: "10px",
    },
    slider: {
        position: "relative",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    leftArrow: {
        position: "absolute", 
        // top: "50%",
        left: "-32px",
        fontSize: "4rem",
        color: "#444",
        zIndex: "100",
        cursor: "pointer",
        userSelect: "none"
    },
    rightArrow: {
        position: "absolute",
        // top: "50%",
        right: "-32px",
        fontSize: "4rem",
        color: "#444",
        zIndex: "100",
        cursor: "pointer",
        userSelect: "none"
    },
    imageGnome: {
        height: "200px",
        borderRadius: "10px",
        margin: "10px"
    },
    slide:{
        opacity: "0",
        transitionDuration: "1s ease"
    },
    slideActive:{
        opacity: "1",
        transitionDuration: "1s",
        transform: "scale(1)"
    },
    titleName:{
        color: "#fff",
        textSize: "10px",
        letterSpacing: "1px",
    },
    // ### styles ###

    // ### animations ###
    "@keyframes animateBgBox": {
        "0%": {backgroundPosition:0},
        "100%": {backgroundPosition:"40px"}
    }
    // ### animations ###
}))
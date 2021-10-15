import {makeStyles} from '@material-ui/core'

const linearGradientReflectBox = "below 1px linear-gradient(transparent, transparent, transparent, #0004)"

export const useStyles = makeStyles(({
    // ### styles ###
    sliderContent: {
        position: "relative",
        display: "flex",
        paddingBottom: "10px",
        overflow: "none",
        WebkitBoxReflect: `${linearGradientReflectBox}`,
        '& $box': {
            '&:hover': {
                animationPlayState: 'running',
                filter: "grayscale(0)",
                '& $arrow': {
                    opacity: "1",
                    transitionDuration: "1s",
                    transform: "scale(1)",
                    color: "#000"
                }
            },
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
        background: `#444`,
        backgroundSize: "10px 10px",
        alignItems: "center",
    },
    contentInfoCard:{
        color: "#fff",
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    imageGnome:{
        maxHeight: "200px",
        maxWidth: "400px",
        minHeight: "200px",
        minWidth: "400px",
        margin: "10px",
        borderRadius: "20px"
    },
    slidesGnomes: {
        color: "#fff",
        background: "red"
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
    contentProfesionalInfo: {
        display: "flex",
        flexDirection: "column"
    },
    arrowContent:{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "10px"
    },
    arrow: {
        width: "50px",
        height: "50px",
        opacity: "0",
        transitionDuration: "1s ease",
        cursor: "pointer",
    },
    titleName: {
        letterSpacing: "2px",
        fontSize: "20px"
    },
    // ### styles ###

    // ### animations ###
    // ### animations ###
}))
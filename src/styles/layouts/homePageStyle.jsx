import {makeStyles} from '@material-ui/core'

const linearGradientBackground = "linear-gradient(10deg, #337ab7 25%,#444 25%,#444 50%, #337ab7 50%, #337ab7 75%, #444 75%, #444 100%)"
const linearGradientReflectBox = "below 1px linear-gradient(transparent, transparent, transparent, #0004)"

export const useStyles = makeStyles(({
    // ### styles ###
    homePage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#262626",
        '@media (max-width: 992px)': {
            display: "flex",
            flexDirection: "column",
        }
    },
    boxContainer: {
        position: "relative",
        display: "flex",
        WebkitBoxReflect: `${linearGradientReflectBox}`,
        '@media (max-width: 992px)': {
            paddingTop: "150px",
            marginBottom: "150px"
        },
        '& $box': {
            '&:hover': {
                animationPlayState: 'running',
                filter: "grayscale(0)",
                '& $imageBoxCastle': {
                    height: "380px",
                },
                '& $titleCard': {
                    height: "400px",
                    color: "#ffffff",
                    fontSize: "150%"
                }
            },
        },
    },
    box: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "300px",
        height: "300px",
        margin: "10px 20px",
        borderRadius: "20px",
        filter: "grayscale(1)",
        animation: `$animateBgBox 1s linear infinite`,
        animationPlayState: "paused",
        transition: "filter 1s",
        background: `${linearGradientBackground}`,
        backgroundSize: "10px 10px",
        '@media (max-width: 992px)': {
            paddingTop: "150px"
        },
    },
    imageBoxCastle: {
        position: "absolute",
        bottom: 0,
        height: "90%",
        transition: "height .5s",
    },
    titleCard: {
        position: "absolute",
        bottom: 0,
        height: "100%",
        transition: "height 1s",
        color: "transparent"
    },
    titlePageContent: {
        width: "100%",
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        textAling: "center",
        // padding: "20px",
        '@media (max-width: 992px)': {
            textAling: "center",
            padding: "20px"
        },
    },
    titlePage: {
        color: "#fff",
        letterSpacing: "2px",
    },
    linkBox: {},
    // ### styles ###

    // ### animations ###
    "@keyframes animateBgBox": {
        "0%": {backgroundPosition:0},
        "100%": {backgroundPosition:"40px"}
    }
    // ### animations ###
}))
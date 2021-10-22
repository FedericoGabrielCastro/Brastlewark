import {makeStyles} from '@material-ui/core'

const linearGradientReflectBox = "below -40px linear-gradient(transparent, #0004)"

export const useStyles = makeStyles(({
    // ### styles ###
    loader: {
        position: "relative",
        WebkitBoxReflect: `${linearGradientReflectBox}`,
        
    },
    text: {
        position: "relative",
        color: "#3BBB2B",
        letterSpacing: "10px",
        fontSize: "2em",
        textTransform: "uppercase",
        animation: `$typing 5s steps(100) infinite`, 
        overflow: "hidden",
        },
    // ### styles ###

    // ### animations ###
    "@keyframes typing": {
        "0%, 70%, 100%": {opacity:"0"},
        "30%": {opacity:"1"} // size on the console
    }
    // ### animations ###
}))

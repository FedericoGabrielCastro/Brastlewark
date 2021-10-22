import React from 'react'
import {useStyles} from '../styles/components/loadingStyle'
const Loading = () => {
    const classes = useStyles()
    
    return (<>
        <div className={classes.loader}>
            <h2 className={classes.text}>...Loading...</h2>
        </div>
        <span></span>
        <div className={classes.loader}>
            <h2 className={classes.text}>...Loading...</h2>
        </div>
    </>)
}

export default Loading

import React, {useEffect} from 'react'
import {useStyles} from '../styles/layouts/orcCityStyle'

import {GANDALF, ORC_DESCRIPTION} from '../types/allTypes'

import gandalf from '../assets/gandalf.jpg'


const OrcCity = () => {
    const classes = useStyles()

    useEffect(() => {
        document.title = `Orc city`
    }, [])

    return (
        <section className={classes.content}>
            
            <h1 className={classes.title}> Ups ... </h1>
            <p className={classes.description}> {ORC_DESCRIPTION}</p>
            <img className={classes.imgG} src={gandalf} alt="meme"/>
            <p className={classes.description}>{GANDALF}</p>
        </section>
    )
}

export default OrcCity

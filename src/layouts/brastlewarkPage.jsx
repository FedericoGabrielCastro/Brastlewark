import React from 'react'
import {useStyles} from '../styles/layouts/brastlewarkPageStyle'

import {DESCRIPTION} from '../types/allTypes'

import SliderAllGnomes from '../components/sliderAllGnomes'
import Search from '../components/search'

const BrastlewarkPage = () => {
    const classes = useStyles()

    return (
        <body className={classes.body}>
            <main className={classes.main}>
                <section className={classes.content}>
                    <div className={classes.titleTextContext}>
                        <h1 className={classes.titlePage}> BRASTLEWARK</h1>
                        <Search/> 
                        <p className={classes.text}> {DESCRIPTION}</p>
                    </div>
                    <section className={classes.prevNext}>
                        <h3 className={classes.prevNextTitle}> View all Gnomes</h3>
                        <SliderAllGnomes/>
                    </section>
                </section>
            </main>
        </body>
    )
}


export default BrastlewarkPage

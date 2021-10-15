import React from 'react'
import {useStyles} from '../styles/layouts/brastlewarkPageStyle'

import SliderAllGnomes from '../components/sliderAllGnomes'

const BrastlewarkPage = () => {
    const classes = useStyles()

    return (
        <body className={classes.body}>
            <main className={classes.main}>
                <section className={classes.content}>
                    <div className={classes.titleTextContext}>
                        <h2 className={classes.titlePage}> BRASTLEWARK</h2>
                        <p className={classes.text}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, quis. Magnam laborum quas ut ipsum facilis rem asperiores omnis culpa, architecto a deserunt perspiciatis rerum aspernatur fugiat modi repudiandae excepturi?</p>
                        <button className={classes.button}> algo tiene que hacer</button>
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

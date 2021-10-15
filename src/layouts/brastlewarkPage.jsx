import React, {useState, useEffect} from 'react'
import { useStyles } from '../styles/layouts/brastlewarkPageStyle'
import {useSelector, useDispatch} from 'react-redux'

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

import SliderAllGnomes from '../components/sliderAllGnomes'
import {fetchGnomes} from '../redux/actions/fetchGnomesAction'

const BrastlewarkPage = () => {
    const classes = useStyles()

    const dispatch = useDispatch()
    const getAllGnomes = useSelector(store => store.fetchGnomesReducer.gnomes)
    
    // load all api when start the component
    useEffect(() => {
        dispatch(fetchGnomes())
    }, [dispatch])

    const [current, setCurrent] = useState(0)
    const length = getAllGnomes.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    return (
        <body className={classes.body}>
            <main className={classes.main}>
                <section className={classes.content}>
                    <div className={classes.titleTextContext}>
                        <h2 className={classes.titlePage}> BRASTLEWARK</h2>
                        <p className={classes.text}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, quis. Magnam laborum quas ut ipsum facilis rem asperiores omnis culpa, architecto a deserunt perspiciatis rerum aspernatur fugiat modi repudiandae excepturi?</p>
                        <button className={classes.button}> algo tiene que hacer</button>
                    </div>
                    {/* slider carrousel */}
                    <div className={classes.sliderContent}>
                    {
                        getAllGnomes.map((item, index) => (
                            <div className={index === current ? (classes.slideActive) : (classes.slide) } key={index}>
                            {index === current && (
                                <div className={classes.slidesGnomes} key={item.id}>
                                    <h2>{item.name}</h2>
                                    {/* <img className={classes.imgSlider} src={item.thumbnail} alt={item.name}/>  */}
                                </div>
                            )}
                            </div>
                        ))
                    }
                    </div>
                    <footer className={classes.footer}>
                        <section className={classes.prevNext}>
                            <h3 className={classes.prevNextTitle}> All Gnomes </h3>
                            <div className={classes.centerArrows}>
                                <FaArrowAltCircleLeft className={classes.arrow} onClick={prevSlide}/>
                                <FaArrowAltCircleRight className={classes.arrow} onClick={nextSlide}/>
                            </div>
                        </section>
                    </footer>
                </section>
            </main>
        </body>
    )
}


export default BrastlewarkPage

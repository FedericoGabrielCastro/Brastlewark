import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useStyles} from '../styles/components/sliderAllGnomesStyle';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
// import { Swiper, SwiperSlide } from "swiper/react";

import {fetchGnomes} from '../redux/actions/fetchGnomesAction'

const SliderAllGnomes = () => {
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
        <section className={classes.sliderContent}>
            <div className={classes.box}>
                {
                    getAllGnomes.map((item, index) => (
                        <div className={index === current ? (classes.slideActive) : (classes.slide) } key={index}>
                        {index === current && (
                            <div>
                            <section className={classes.contentInfoCard}>
                                <img key={item.id} src={item.thumbnail} alt={item.name} className={classes.imageGnome}/>
                                <h1 className={classes.titleName}>{item.name}</h1>
                                <table>
                                    <tr><td>Hair</td><td>{item.hair_color}</td></tr>
                                    <tr><td>Age</td><td>{item.age}</td></tr>
                                    <tr><td>Weight</td><td>{item.weight}</td></tr>
                                    <tr><td>Height</td><td>{item.height}</td></tr>
                                </table>
                                {/* <div className={classes.contentProfesionalInfo}> 
                                    <p>Professions: {item.professions}</p>
                                    <p>Friends: {item.friends}</p>
                                </div> */}
                                {/* <table>
                                        <tr><td>Profesiones</td><td>{item.professions}</td></tr>
                                        <tr><td>Amigos</td><td>{item.friends}</td></tr>
                                </table> */}

                            </section>
                                <section className={classes.arrowContent}>
                                    <FaArrowAltCircleLeft className={classes.arrow} onClick={prevSlide}/>
                                    <FaArrowAltCircleRight className={classes.arrow} onClick={nextSlide}/>
                                </section>
                            </div>
                        )}
                    </div>
                ))
            }
            </div>
        </section>
    )
}


export default SliderAllGnomes

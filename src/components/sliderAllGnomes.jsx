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

    console.log(current)

    return (
        <div className={classes.card}>
            <div className={classes.box}>
                <section className={classes.slider}>
                <FaArrowAltCircleLeft className={classes.leftArrow} onClick={prevSlide}/>
                <FaArrowAltCircleRight className={classes.rightArrow} onClick={nextSlide}/>
                    {
                        getAllGnomes.map((item, index) => (
                            <div className={index === current ? (classes.slideActive) : (classes.slide) } key={index}>
                                {index === current && (
                                    <div className={classes.contentInfoCard}>
                                        <h1 className={classes.titleName}>{item.name}</h1>
                                        <table>
                                            <tr><td>Age</td><td>{item.age}</td></tr>
                                            <tr><td>weight</td><td>{item.weight}</td></tr>
                                            <tr><td>height</td><td>{item.height}</td></tr>
                                        </table>
                                        {/* <p>No sabemos su genero pero su color de pelo es {item.hair_color}</p> */}
                                        <img key={item.id} src={item.thumbnail} alt={item.name} className={classes.imageGnome}/>
                                        {/* <table>
                                            <tr><td>Profesiones</td><td>{item.professions}</td></tr>
                                            <tr><td>Amigos</td><td>{item.friends}</td></tr>
                                        </table> */}
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </section>
            </div>
        </div>
    )
}


export default SliderAllGnomes

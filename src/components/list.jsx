// ## startsWith - endsWith - includes  
//      These functions, when filtering the data that comes from getAllGnomes, 
//      analyze if the word to search begins, has, or ends with the letter searched for by the user.
// ##  sort compares names based on what the user selects in options (optionSelect.jsx) to return the list in order
// ## slice makes some cuts in the amount of elements brought by getAllGnomes
// ## if loading is true, the app will show the filtered list of gnomes but if it still couldn't make 
//      the request, the Loading component (loading.jsx) will be the one to show.
import React, {useEffect} from 'react'
import {useStyles} from '../styles/components/listStyle'
import {useSelector, useDispatch} from 'react-redux'

import {DiMagento} from 'react-icons/di'
import {GiHairStrands, GiBodyHeight} from 'react-icons/gi'
import {FaWeightHanging} from 'react-icons/fa'

import {fetchGnomesAction} from '../redux/actions/fetchGnomesAction'

import Loading from './loading'

const ListGnomes = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    const getAllGnomes = useSelector(store => store.fetchGnomesReducer.gnomes) // fetch data 
    const loading = useSelector(store => store.fetchGnomesReducer.loading) // loading state  
    const search = useSelector(store => store.saveSearchReducer) // search user detected
    const current = useSelector(store => store.currentSlideReducers) // current page (slice)
    const sort  = useSelector(store => store.orderGnomesReducers) // compare and order data 

    useEffect(() => {
        dispatch(fetchGnomesAction())
    }, [dispatch, fetchGnomesAction])


    return (
        <main className={classes.grid}>
                    {
                        loading ? <Loading/> : getAllGnomes.filter((item) => {
                            if (item.name.toLowerCase().startsWith(search.toLowerCase()) 
                                || item.name.toLowerCase().endsWith(search.toLowerCase()) 
                                || item.name.toLowerCase().includes(search.toLowerCase())) {
                                return true
                            } else {
                                return false
                            }
                        }).sort((x,y) => {
                            return x[sort] - y[sort] // Order results for name 
                        }).slice(current.iniinitialCurrent, current.finishCurrent).map((item, index) => {
                            return (
                                <section key={index} className={classes.contentCard}>
                                    <div className={classes.hexagon}>
                                        <div className={classes.shape}>
                                            <img src={item.thumbnail} alt={item.name} className={classes.imageGnome}/>
                                            <div className={classes.contentInfo}>
                                                <h1 className={classes.titleName}>{item.name}</h1>    
                                                <h7 key={index} className={item.professions.length === 0 ? (classes.disable) : (classes.active)}> Professions </h7>
                                                <div className={classes.alingInfo}>
                                                {
                                                    item.professions.map((professions, index) => {
                                                        return (
                                                            <p key={index}>{professions}</p>
                                                        )
                                                    })
                                                }
                                                </div>
                                                <h7 key={index} className={item.friends.length === 0 ? (classes.disable) : (classes.active)}> Friends </h7>
                                                <div className={classes.alingInfo}>
                                                {
                                                    item.friends.map((friends, index) => {
                                                        return (
                                                            <p key={index}>{friends}</p>
                                                        )
                                                    })
                                                }
                                                </div> 
                                                <div className={classes.table}>
                                                    <span><FaWeightHanging/> Weight: {item.weight}</span>
                                                    <span><GiBodyHeight/> Height: {item.height}</span>
                                                    <span><GiHairStrands/> Hair: {item.hair_color}</span>
                                                    <span><DiMagento/> Age: {item.age}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        }) 
                    }  
                </main>
    )
}


export default ListGnomes

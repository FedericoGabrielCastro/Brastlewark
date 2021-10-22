import React, {useEffect} from 'react'
import {useStyles} from '../styles/components/listStyle'
import {useSelector, useDispatch} from 'react-redux'

import {fetchGnomesAction} from '../redux/actions/fetchGnomesAction'
import {currentSlideAction} from '../redux/actions/currentPageSlideActions'

import Loading from './loading'

const ListGnomes = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    const getAllGnomes = useSelector(store => store.fetchGnomesReducer.gnomes)
    const loading = useSelector(store => store.fetchGnomesReducer.loading)
    const search = useSelector(store => store.saveSearchReducer)
    const current = useSelector(store => store.currentSlideReducers)
    const sort  = useSelector(store => store.orderGnomesReducers)

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
                                <section key={index} className={classes.contentInfoCard}>
                                    <img src={item.thumbnail} alt={item.name} className={classes.imageGnome}/>
                                    <h1 className={classes.titleName}>{item.name}</h1>
                                    {/* <table className={classes.table}>
                                        <tr><td>Hair: </td><td>{item.hair_color}</td></tr>
                                        <tr><td>Age: </td><td>{item.age}</td></tr>
                                        <tr><td>Weight: </td><td>{item.weight}</td></tr>
                                        <tr><td>Height: </td><td>{item.height}</td></tr>
                                        <tr><td>Friends: </td><td>{item.friends}</td></tr>
                                        <tr><td>Professions: </td><td>{item.professions}</td></tr>
                                    </table> */}
                                </section>
                            )
                        }) 
                    }  
                </main>
    )
}


export default ListGnomes

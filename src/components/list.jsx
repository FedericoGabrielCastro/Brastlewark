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

// ## handleChange works to capture what is written by the user in the input search to be used later

import React, {useCallback} from 'react'
import {useStyles} from '../styles/layouts/brastlewarkPageStyle'
import {useSelector, useDispatch} from 'react-redux'
import {DESCRIPTION} from '../types/allTypes'

import {saveSearchAction} from '../redux/actions/saveSearchDataAction'

import ListGnomes from '../components/list'
import OptionsSelect from '../components/optionsSelect'

const BrastlewarkPage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    const search = useSelector(store => store.saveSearchReducer)

    const hadleChange = useCallback(evento => {
        dispatch(saveSearchAction(evento.target.value))
        console.log("busqueda: " + evento.target.value )
    }, [dispatch, saveSearchAction])


    return (
        <body className={classes.body}>
            <section className={classes.titleSearch}>
                <h1 className={classes.titlePage}> BRASTLEWARK</h1>
                <form className={classes.searchContent}>
                    <input className={classes.searchInput}
                        type="text"
                        placeholder= "Search ..."
                        value={search}
                        onChange={hadleChange}
                    />
                    <OptionsSelect/>
                </form>
            </section>
            <section className={classes.contentMain}>
                <p className={classes.text}> {DESCRIPTION}</p>
                <h3 className={classes.viewALlGnomes}> View all Gnomes</h3>
                <ListGnomes/>
            </section>
        </body>
    )
}


export default BrastlewarkPage

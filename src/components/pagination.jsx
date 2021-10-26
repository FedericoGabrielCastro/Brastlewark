import React, {useState, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useStyles} from '../styles/components/paginationStyle'

import { GrNext, GrPrevious } from "react-icons/gr";

import { setMaxPageAction, setMinPageAction } from '../redux/actions/paginationActions'
import { pageSelectAction, nextPageAction, prevPageAction } from '../redux/actions/pageSelectedAction' 

const Pagination = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const getAllGnomes = useSelector(store => store.fetchGnomesReducer.gnomes) // get gnomes api
    const pageNumberLimit = useSelector(store => store.paginationReducer.pageNumberLimit) // set max numbers on the pagination 
    const itemsPerPage = useSelector(state => state.paginationReducer.itemsPerPage) // render items per page 
    const maxPageNumberLimit = useSelector(state => state.paginationReducer.maxPageNumberLimit) // change pagination number - max
    const minPageNumberLimit = useSelector(state => state.paginationReducer.minPageNumberLimit) // change pagination number - min
    const currentPage = useSelector(state => state.pageSelectReducer.currentPage) // Show the page current
   
    // ### This creates a list of pages that are calculated and rounded (Math.ciel) 
    // by dividing the number of items in 'getAllGnomes' by the items that can be created per page (itemPerPage)
    const pages = []
    for (let i = 1; i <= Math.ceil(getAllGnomes.length/itemsPerPage); i++) {
        pages.push(i)
    }
    
    // capture the actual page
    const handleCLickPage = useCallback((evento) =>  {
        const selectPage = Number(evento.target.id)
        dispatch(pageSelectAction(selectPage))
    }, [])

    // Click next page or &hellip to change page + 1
    const handleClikNext = () => {
        // setcurrentPage(currentPage +1)
        dispatch(nextPageAction())

        if (currentPage + 1 > maxPageNumberLimit) {
            dispatch(setMaxPageAction())
        }
    }

    // Click prev page or &hellip to change page - 1
    const handleClikPrev = () => {
        dispatch(prevPageAction())

        if ((currentPage - 1) % pageNumberLimit === 0) {   
            dispatch(setMinPageAction())
        }
    }


    // Create a '...' if there are more page to show
    let pageIncrementBtn = null
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleClikNext}> &hellip; </li>
    } 

    // Create a '...' if there are less page to show
    let pageDecrementBtn = null
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handleClikPrev}> &hellip; </li>
    } 

    // Render the numbers paginations 
    const renderPagesNumber = pages.map(number => {

        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
            return (
                <li key={number} 
                    id={number} 
                    className={currentPage === number ? (classes.numberActive) : null}
                    onClick={handleCLickPage}>
                    {number}
                </li>
            )
        } else {
            return null
        }
    })

    // render page
    return (
        <ul className={classes.containerPagination}>
            <li>
                <button className={classes.buttonPrevNext} 
                onClick={handleClikPrev}
                disabled={currentPage === pages[0] ? true : false}> 
                    <GrPrevious className={classes.icon}/> 
                </button>  
            </li>
            {pageDecrementBtn}
            {renderPagesNumber}
            {pageIncrementBtn}
            <li>
                <button className={classes.buttonPrevNext} 
                onClick={handleClikNext}
                disabled={currentPage === pages[pages.length - 1] ? true : false}> 
                    <GrNext className={classes.icon}/> 
                </button>  
            </li>
        </ul>
    )
}

export default Pagination

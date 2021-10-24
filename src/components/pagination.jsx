import React from 'react'
import ReactPaginate from 'react-paginate';
import {useStyles} from '../styles/components/paginationStyle'

const Pagination = () => {
    const classes = useStyles()

    const handlePageClick = (pageClicked) => {
        console.log(pageClicked.selected) // <= save the data page clicked by the user
    }

    return (
        <div className={classes.content}>
            <ReactPaginate
                // elements
                previousLabel={'<<'} // prev button
                nextLabel={'>>'} // next button 
                breakLabel={'...'} // middle page 
                pageCount={30} // number of page
                marginPagesDisplayed={3} // display left and right pages
                pageRangeDisplayed={3} // display middle pages
                // functionality 
                onPageChange={handlePageClick}
                // css
                containerClassName={classes.containerPagination} // container
                pageClassName={classes.containerPages}  // pages
                previousClassName={classes.prevNextButton} // button previus
                nextClassName={classes.prevNextButton} // button next
                breakClassName={classes.prevNextButton} // break 
                breakLinkClassName={classes.containerPageLinks} // break Links
                pageLinkClassName={classes.containerPageLinks} // links
                nextLinkClassName={classes.containerPageLinks} // button next 
                breakLinkClassName={classes.containerPageLinks} // break-link
                nextLinkClassName={classes.containerPageLinks} // next link
                previousLinkClassName={classes.containerPageLinks} // prev link 
                activeClassName={classes.activePage} // current page selecet 
                />
        </div>
    )
}

export default Pagination

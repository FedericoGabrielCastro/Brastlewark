import React, {useState} from 'react'
import { useSelector } from 'react-redux'
// import {FaSearch} from 'react-icons/fa'
import {useStyles} from '../styles/components/searchStyle'


const Search = () => {
    const classes = useStyles()

    const getAllGnomes = useSelector(store => store.fetchGnomesReducer.gnomes)

    const [searchTerm, setSearchTerm] = useState()
    const [selcetState, setSelectState] = useState("")

    // Options to change filter on search
    const optionsSelec =  [
        {title: 'Name', value: 1},
        {title: 'Age', value: 2},
        {title: 'Hair', value: 3},
    ]

    const selectOpt = (e) => {
        const selectOpt = e.target.value
        setSelectState(selectOpt)
        console.log(selectOpt)
    }

    return (
        <form className={classes.searchContent}>
            <input className={classes.searchInput}
                type="text"
                placeholder= "Search ..."
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
            />
            <select 
                onChange={selectOpt}
                className={classes.contentResult}>
                {
                    optionsSelec.map((item) => {
                        return (
                            <option value={item.value}>{item.title}</option>
                        )
                    })
                }
            </select>
                {
                    getAllGnomes.filter((val, key) => {
                        if (searchTerm == null) {
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) ){
                            return val
                        }
                    }).map((val) => {
                        return (
                            <div className={classes.searchValue} key={val.id}>
                                <p>{val.name}</p>
                            </div>
                        )
                    })
                }
        </form>
    )
}



export default Search

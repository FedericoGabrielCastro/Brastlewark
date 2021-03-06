// ## When changing any element of the created in optionsSelec, 
//      within the select a callback is triggered that reads all the content of optionsSelect, 
//      it is fixed that the one selected by the user is equal to the element of the list, 
//      and triggers its action, this affects the order in which the elements of getAllGnomes is displayed
import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {useStyles} from '../styles/components/optionsSelectStyle'

import {
    orderGnomesNameAction,
    orderGnomesAgeAction,
    orderGnomesHairAction
} from '../redux/actions/orderGnomesActions'

// Options to change filter on search
const optionsSelec =  [
    {title: 'Name', value: "name",action: orderGnomesNameAction},
    {title: 'Age', value: "age", action: orderGnomesAgeAction},
    {title: 'Weight', value: "weight",action: orderGnomesHairAction},
]

const OptionsSelect = () => {
    const classes = useStyles()

    const dispatch = useDispatch()
    
    const handleSelect = useCallback((event) => {
        const opt = event.target.value
        for (let index = 0; index < optionsSelec.length; index++) {
            
                const element = optionsSelec[index];
                if (opt === element.value) {
                    // alert(element.title + " " + opt ) 
                    dispatch(element.action())
                }
            }
        },
        [dispatch, optionsSelec],
    )

    return (
        <select className={classes.contentResult} onChange={handleSelect}>
            {
                optionsSelec.map((item) => {

                    return (
                        <option 
                            key={item.value} 
                            value={item.value}>
                                {item.title}
                        </option>
                    )
                })
            }
        </select>
    )
}

export default OptionsSelect

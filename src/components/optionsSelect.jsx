import React, {useCallback} from 'react'
import {useSelector,useDispatch} from 'react-redux'
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
    {title: 'Hair', value: "hair",action: orderGnomesHairAction},
]

const OptionsSelect = () => {
    const classes = useStyles()

    const dispatch = useDispatch()
    const orderFor = useSelector(store => store.orderGnomesReducers)

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

import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'

import {routes} from './routes/routes'
import store from './redux/store'

const App = () => {
    
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    {routes.map((item) => {
                        return (
                            <Route path={item.path} component={item.component} exact/>
                        )
                    })}
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
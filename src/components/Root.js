import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router,Route,browerHistory } from 'react-router'
import App from '../App'

const Root = ({ store })=> (
    <Provider store={store}>
        <Router history={browerHistory}>
            <Route path="/{:filter}" component={App}/>
        </Router>
    </Provider>
)

Root.propTypes ={
    store: PropTypes.object.isRequired,
}

export default Root
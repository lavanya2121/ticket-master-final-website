import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//important
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { startSetUser } from './actions/userAction'
import { startGetCustomers } from './actions/customersAction';
import {startGetDepartments} from './actions/departmentsAction'
import { startGetEmployees } from './actions/employeesAction';
import {startGetTickets} from './actions/ticketsAction'

const store=configureStore()

console.log(store.getState())

store.subscribe(() => {
console.log(store.getState())
})

if(localStorage.getItem('authToken')){
    store.dispatch(startGetCustomers())
    store.dispatch(startGetDepartments())
    store.dispatch(startGetEmployees())
    store.dispatch(startSetUser())
    store.dispatch(startGetTickets())
}
const jsx=(
   <Provider store={store}>
    <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))




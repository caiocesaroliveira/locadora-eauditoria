import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CustomerProvider } from '../contexts/Customer/CustomerContext'

import Navbar from './Navbar'

import { AddCustomer } from './Customer/AddCustomer'
import { EditCustomer } from './Customer/EditCustomer'
import { CustomerList } from './Customer/CustomerList'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="uk-container">
          <Navbar></Navbar>
          <br />
          <Switch>
            <CustomerProvider>
              <Route path="/customers" component={CustomerList} exact></Route>
              <Route
                path="/customers/add"
                component={AddCustomer}
                exact
              ></Route>
              <Route
                path="/customers/edit/:id"
                component={EditCustomer}
                exact
              ></Route>
            </CustomerProvider>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App

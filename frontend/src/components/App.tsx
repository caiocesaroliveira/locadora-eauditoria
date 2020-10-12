import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppContext from '../contexts/AppContext'

import Navbar from './Navbar'

import AddCliente from './Cliente/AddCliente'
import EditCliente from './Cliente/EditCliente'
import ClienteList from './Cliente/ClienteList'

const App: React.FC = () => {
  return (
    <>
      <AppContext>
        <Router>
          <br />
          <div className="uk-container">
            <Navbar></Navbar>
            <Switch>
              <Route path="/" component={ClienteList} exact></Route>
              <Route path="/clientes" component={ClienteList} exact></Route>
              <Route path="/clientes/add" component={AddCliente} exact></Route>
              <Route
                path="/clientes/edit/:id"
                component={EditCliente}
                exact
              ></Route>
            </Switch>
          </div>
        </Router>
      </AppContext>
    </>
  )
}

export default App

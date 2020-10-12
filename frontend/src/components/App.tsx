import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ClienteProvider } from '../contexts/Cliente/ClienteContext'

import Navbar from './Navbar'

import { AddCliente } from './Cliente/AddCliente'
import EditCliente from './Cliente/EditCliente'
import ClienteList from './Cliente/ClienteList'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="uk-container">
          <Navbar></Navbar>
          <br />
          <Switch>
            <ClienteProvider>
              <Route path="/clientes" component={ClienteList} exact></Route>
              <Route path="/clientes/add" component={AddCliente} exact></Route>
              <Route
                path="/clientes/edit/:id"
                component={EditCliente}
                exact
              ></Route>
            </ClienteProvider>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App

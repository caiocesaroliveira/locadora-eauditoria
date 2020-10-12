import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppContext from '../contexts/AppContext'
import AddCliente from './AddCliente'
import EditCliente from './EditCliente'
import ClienteList from './ClienteList'
import Navbar from './Navbar'

const App: React.FC = () => {
  return (
    <>
      <AppContext>
        <Router>
          <Navbar></Navbar>
          <br />
          <div className="uk-container">
            <Switch>
              <Route path="/" component={ClienteList} exact></Route>
              <Route path="/add" component={AddCliente} exact></Route>
              <Route path="/edit/:id" component={EditCliente} exact></Route>
            </Switch>
          </div>
        </Router>
      </AppContext>
    </>
  )
}

export default App

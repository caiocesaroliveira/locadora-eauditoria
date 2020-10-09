import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppContext from '../contexts/AppContext'
import ClienteList from './ClienteList'
import FilmesList from './FilmesList'
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
              <Route path="/clientes">
                <ClienteList />
              </Route>
              <Route path="/filmes">
                <FilmesList />
              </Route>
            </Switch>
          </div>
        </Router>
      </AppContext>
    </>
  )
}

export default App

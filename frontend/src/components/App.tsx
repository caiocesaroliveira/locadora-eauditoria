import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CustomerProvider } from '../contexts/Customer/CustomerContext'
import { MovieProvider } from '../contexts/Movie/MovieContext'

import Navbar from './Navbar'

import { AddCustomer } from './Customer/AddCustomer'
import { EditCustomer } from './Customer/EditCustomer'
import { CustomerList } from './Customer/CustomerList'

import { AddMovie } from './Movie/AddMovie'
// import { EditMovie } from './Movie/EditMovie'
import { MovieList } from './Movie/MovieList'
import { EditMovie } from './Movie/EditMovie'
import { Home } from './Home'

const App: React.FC = () => {
  return (
    <>
      <Router>
        {/* <Navbar></Navbar> */}
        <br />
        <div className="uk-container">
          <Switch>
            <CustomerProvider>
              <MovieProvider>
                <Route path="/" component={Home} exact></Route>
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
                <Route path="/movies" component={MovieList} exact></Route>
                <Route path="/movies/add" component={AddMovie} exact></Route>
                <Route
                  path="/movies/edit/:id"
                  component={EditMovie}
                  exact
                ></Route>
              </MovieProvider>
            </CustomerProvider>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App

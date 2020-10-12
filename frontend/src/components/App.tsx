import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ConsumerProvider } from '../contexts/Consumer/ConsumerContext'

import Navbar from './Navbar'

import { AddConsumer } from './Cliente/AddConsumer'
import { EditConsumer } from './Cliente/EditConsumer'
import { ConsumerList } from './Cliente/ConsumerList'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="uk-container">
          <Navbar></Navbar>
          <br />
          <Switch>
            <ConsumerProvider>
              <Route path="/consumers" component={ConsumerList} exact></Route>
              <Route
                path="/consumers/add"
                component={AddConsumer}
                exact
              ></Route>
              <Route
                path="/consumers/edit/:id"
                component={EditConsumer}
                exact
              ></Route>
            </ConsumerProvider>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App

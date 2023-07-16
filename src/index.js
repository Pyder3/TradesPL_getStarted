import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import getStarted from './views/getStarted'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
      </div>
      <div><Route component={getStarted} path="/getStarted"></Route></div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

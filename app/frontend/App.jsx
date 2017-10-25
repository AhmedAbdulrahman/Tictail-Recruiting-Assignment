import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Componenets
import Team from './components/Team'
import Admin from './components/Admin'

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Team} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'))

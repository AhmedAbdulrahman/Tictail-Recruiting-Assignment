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
        <Route path="/team" component={props => <Team url="contacts" {...props} />} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'))

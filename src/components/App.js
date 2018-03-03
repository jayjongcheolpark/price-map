import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MapView from './MapView'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MapView} />
    </Switch>
  </BrowserRouter>
)

export default App

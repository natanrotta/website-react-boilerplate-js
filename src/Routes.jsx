import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={() => (<div> home </div>)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

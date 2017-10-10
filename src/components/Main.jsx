import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Forgot from './Forgot'
import Register from './Register'



const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    <Route path='/forgot' component={Forgot} />
  </Switch>
)

export default Main

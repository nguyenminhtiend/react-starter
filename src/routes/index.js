import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import PrivateRoute from '../components/PrivateRoute'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Users = lazy(() => import('./Users'))
const Login = lazy(() => import('./Login'))

const AppRouter = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <PrivateRoute exact path="/users" component={Users} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Suspense>
  </Router>
)

export default AppRouter

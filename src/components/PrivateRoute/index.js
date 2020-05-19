import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    console.log(localStorage.getItem('isLogin'))
    return !!localStorage.getItem('isLogin')
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />
        }
        return <Redirect to={{ pathname: '/login' }} />
      }}
    />
  )
}

export default PrivateRoute

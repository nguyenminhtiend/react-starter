import React from 'react'

const Login = ({ history }) => {
  const login = () => {
    localStorage.setItem('isLogin', true)
    history.push('/')
  }

  return (
    <button type="button" onClick={login}>
      Login
    </button>
  )
}

export default Login

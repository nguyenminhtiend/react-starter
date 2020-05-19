import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './routes'
import configureStore from './redux/store'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <div className="App">
      <AppRouter />
    </div>
  </Provider>
)

export default App

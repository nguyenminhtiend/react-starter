import React, { useState } from 'react'
import userList from '../../hooks/userList'
import LoadingPage from '../../components/Loading/LoadingPage'
import styles from './Home.module.scss'

const Home = () => {
  const [count, setCount] = useState(0)
  const [criteria, setCriteria] = useState({
    resource: 'users',
    page: 1,
    usingLoading: true
  })
  const [userData, isLoading] = userList(criteria)

  return (
    <div className={styles.wrapper}>
      <h3>This is home page!</h3>
      {isLoading && <LoadingPage />}
      <ul>
        {userData.data &&
          userData.data.map((user) => (
            <li key={user.id}>{`${user.first_name} ${user.last_name}`}</li>
          ))}
      </ul>
      <p>{count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button
        type="button"
        onClick={() => setCriteria({ ...criteria, page: criteria.page + 1 })}
      >
        Next page
      </button>
    </div>
  )
}

export default Home

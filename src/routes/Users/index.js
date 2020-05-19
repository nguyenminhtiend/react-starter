import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from './redux'

const Users = () => {
  const dispatch = useDispatch()
  const [criteria, setCriteria] = useState({
    page: 1
  })

  const { userData } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUsers(criteria))
  }, [criteria, dispatch])

  return (
    <div>
      <h3>This is home page!</h3>
      <ul>
        {userData.data &&
          userData.data.map((user) => (
            <li key={user.id}>{`${user.first_name} ${user.last_name}`}</li>
          ))}
      </ul>
      <button
        type="button"
        onClick={() => setCriteria({ ...criteria, page: criteria.page + 1 })}
      >
        Next page
      </button>
    </div>
  )
}

export default Users

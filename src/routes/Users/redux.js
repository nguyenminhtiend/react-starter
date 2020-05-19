import axios from '../../utils/axios'

const GET_USERS = 'GET_USERS'

export const getUsers = (criteria) => {
  return async (dispatch) => {
    const { data } = await axios.get('/users', {
      params: { ...criteria }
    })
    dispatch({
      type: GET_USERS,
      data
    })
  }
}

const initialState = {
  userData: {}
}

const actionsMap = {
  [GET_USERS]: (state, action) => {
    return {
      ...state,
      userData: action.data
    }
  }
}

export default function usersReducer(state = initialState, action) {
  const handler = actionsMap[action.type]
  return handler ? handler(state, action) : state
}

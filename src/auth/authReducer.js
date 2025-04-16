const userKey = '_mymoney_user'

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)) || null,
  validateToken: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOKEN_VALIDATED':
      if (action.payload) {
        return { ...state, validateToken: true }
      } else {
        localStorage.removeItem(userKey)
        return { ...state, user: null, validateToken: false }
      }

    case 'USER_FETCHED':
      return { ...state, user: action.payload, validateToken: true }

    default:
      return state
  }
}

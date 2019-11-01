const initialState = {
  isAuthenticated: false,
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        isLoading: true
      }
    case "USER_LOGIN_SUCCESS":
      return {
        isAuthenticated: true,
        isLoading: false,
        ...action.payload
      }
    case "USER_LOGIN_FAILURE":
      return {
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}

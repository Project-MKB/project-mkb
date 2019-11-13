const initialState = {
  isAuthenticated: false,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "USER_LOGIN_SUCCESS":
      return {
        isAuthenticated: true,
        isLoading: false,
        ...action.payload
      };
    case "USER_LOGIN_FAILURE":
      return {
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      };

    case "USER_REGISTER_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "USER_REGISTER_SUCCESS":
      return {
        isAuthenticated: true,
        isLoading: false,
        ...action.payload
      };
    case "USER_REGISTER_FAILURE":
      return {
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      };

    case "USER_GET_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "USER_GET_SUCCESS":
      return {
        ...state,
        isLoading: false,
        ...action.payload
      };
    case "USER_GET_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case "USER_UPDATE_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "USER_UPDATE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        ...action.payload
      };
    case "USER_UPDATE_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case "SET_AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: true
      };
    case "SET_UNAUTHENTICATED":
      return initialState;

    default:
      return state;
  }
};

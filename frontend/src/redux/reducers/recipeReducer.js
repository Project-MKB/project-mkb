const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECIPE_GET_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "RECIPE_GET_SUCCESS":
      return {
        isLoading: false,
        ...action.payload
      };
    case "RECIPE_GET_FAILURE":
      return {
        isLoading: false,
        error: action.payload
      };

    case "RECIPE_CREATE_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "RECIPE_CREATE_SUCCESS":
      return {
        isLoading: false,
        ...action.payload
      };
    case "RECIPE_CREATE_FAILURE":
      return {
        isLoading: false,
        error: action.payload
      };

    case "RECIPE_UPDATE_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "RECIPE_UPDATE_SUCCESS":
      return {
        isLoading: false,
        ...action.payload
      };
    case "RECIPE_UPDATE_FAILURE":
      return {
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

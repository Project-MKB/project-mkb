const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

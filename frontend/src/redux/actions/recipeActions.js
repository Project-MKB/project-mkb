import axios from "axios";

// create recipe action
export const createRecipe = (newRecipe, history) => async dispatch => {
  dispatch({ type: "RECIPE_CREATE_REQUEST" });

  try {
    // call create recipe api
    const res = await axios.post(
      "http://localhost:5000/recipes/add",
      newRecipe
    );

    dispatch({
      type: "RECIPE_CREATE_SUCCESS",
      payload: res.data
    });

    // redirect to details page when create process finishes
    history.push("/details");
  } catch (e) {
    const error = e.response.data.error;
    console.log(error);
    dispatch({
      type: "RECIPE_CREATE_FAILURE",
      payload: error
    });
  }
};

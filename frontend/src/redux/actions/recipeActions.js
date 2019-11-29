import axios from "axios";

// get recipe action
export const getRecipe = id => async dispatch => {
  dispatch({ type: "RECIPE_GET_REQUEST" });

  try {
    // call get recipe api
    const res = await axios.get(`http://localhost:5000/recipes/get/${id}`);

    dispatch({
      type: "RECIPE_GET_SUCCESS",
      payload: res.data
    });
  } catch (e) {
    const error = e.response.data.error;
    console.log(error);
    dispatch({
      type: "RECIPE_GET_FAILURE",
      payload: error
    });
  }
};

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

// update recipe action
export const updateRecipe = (id, recipe, history) => async dispatch => {
  dispatch({ type: "RECIPE_UPDATE_REQUEST" });

  try {
    // call update recipe api
    const res = await axios.post(
      `http://localhost:5000/recipes/update/${id}`,
      recipe
    );

    dispatch({
      type: "RECIPE_UPDATE_SUCCESS",
      payload: res.data
    });

    // redirect to details page when update process finishes
    history.push("/details");
  } catch (e) {
    const error = e.response.data.error;
    console.log(error);
    dispatch({
      type: "RECIPE_UPDATE_FAILURE",
      payload: error
    });
  }
};

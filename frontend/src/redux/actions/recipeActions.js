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
export const createRecipe = (newRecipe, image, history) => async dispatch => {
  dispatch({ type: "RECIPE_CREATE_REQUEST" });

  try {
    // if image is added, set isImage true
    let isImage;
    if (typeof image === "object" && image !== null) {
      isImage = true;
    }

    // call create recipe api
    if (isImage) {
      newRecipe.mainImage = "";
    }
    const res = await axios.post(
      "http://localhost:5000/recipes/add",
      newRecipe
    );

    // call upload image api when user adds image
    if (isImage) {
      await axios.post(
        `http://localhost:5000/recipes/uploadImage/${res.data._id}`,
        image
      );
    }

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
export const updateRecipe = (id, recipe, image, history) => async dispatch => {
  dispatch({ type: "RECIPE_UPDATE_REQUEST" });
  console.log(recipe);

  try {
    // if image is added, set isImage true
    let isImage;
    if (typeof image === "object" && image !== null) {
      isImage = true;
    }

    // call update recipe api
    if (isImage) {
      recipe.mainImage = "";
    }
    const res = await axios.post(
      `http://localhost:5000/recipes/update/${id}`,
      recipe
    );

    // call upload image api when user adds image
    if (isImage) {
      await axios.post(
        `http://localhost:5000/recipes/uploadImage/${id}`,
        image
      );
    }

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

import axios from "axios";

// user login action
export const loginUser = (userCred, history) => async dispatch => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    // call login api
    const res = await axios.post(
      "http://localhost:5000/users/signin",
      userCred
    );
    setAuthorizationHeader(res.data.token);

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: res.data
    });

    // redirect to home page when login process finishes
    history.push("/");
    console.log(`Welcome ${res.data.email}`);
  } catch (e) {
    const error = e.response.data.error;
    console.log(error);
    dispatch({
      type: "USER_LOGIN_FAILURE",
      payload: error
    });
  }
};

// user signup action
export const registerUser = (userCred, history) => async dispatch => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    // call login api
    const res = await axios.post(
      "http://localhost:5000/users/signup",
      userCred
    );

    console.log(`welcome ${res.data.email}`);
    setAuthorizationHeader(res.data.token);

    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: res.data
    });

    // redirect to home page when login process finishes
    history.push("/");
  } catch (e) {
    const error = e.response.data.error;
    console.log(error);
    dispatch({
      type: "USER_REGISTER_FAILURE",
      payload: error
    });
  }
};

// get user info action
export const getUser = () => async dispatch => {
  dispatch({ type: "USER_GET_REQUEST" });

  try {
    // call get user api
    const res = await axios.get("http://localhost:5000/users/");
    dispatch({
      type: "USER_GET_SUCCESS",
      payload: res.data
    });
  } catch (e) {
    const error = e.response.data.error;
    console.log(error);
    dispatch({
      type: "USER_GET_FAILURE",
      payload: error
    });
  }
};

// user signout action
export const signoutUser = () => dispatch => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: "SET_UNAUTHENTICATED" });
  console.log("Successfully signed out");
};

// update user info
export const updateUser = (userInfo, history) => async dispatch => {
  console.log("update user action");
  dispatch({ type: "USER_UPDATE_REQUEST" });

  try {
    // call update api
    const res = await axios.post(
      "http://localhost:5000/users/update",
      userInfo
    );

    dispatch({
      type: "USER_UPDATE_SUCCESS",
      payload: res.data
    });

    alert("User info is successfully updated!");
    // redirect to home page when login process finishes
    history.push("/");
  } catch (e) {
    const error = e.response.data.error;
    console.log(error);
    dispatch({
      type: "USER_UPDATE_FAILURE",
      payload: error
    });
  }
};

// save token to local storage to use it later
// when calling another api that only logged in user can call
const setAuthorizationHeader = token => {
  const idToken = `Bearer ${token}`;
  localStorage.setItem("token", idToken);
  axios.defaults.headers.common["Authorization"] = idToken;
};

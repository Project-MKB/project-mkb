import axios from 'axios'

export const loginUser = (userCred) => async (dispatch) => {
  dispatch({ type: 'USER_LOGIN_REQUEST' })

  try {
    // call login api
    const res = await axios.post('http://localhost:5000/users/signin', userCred)

    console.log(`welcome ${res.data.email}`)

    // save token to local storage to use it later 
    // when calling another api that only logged in user can call
    const token = `Bearer ${res.data.token}`
    localStorage.setItem('token', token)

    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: res.data,
    })
    // redirect to home page when login process finishes
    this.props.history.push('/')

  } catch (e) {
    const error = e.response.data.error
    console.log(error)
    dispatch({
      type: 'USER_LOGIN_FAILURE',
      payload: error
    })
    // alert(error.message)
  }
}
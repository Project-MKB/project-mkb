# React front end implementation guide

## Login / Signup
- submit: call login/signup api
- set id token in localStorage after login/signup
- set loading state while calling api (async action)
- handle loading/error state in jsx

## App
- get id token from localStorage
- decode it using jwt-decode package
- create AuthRoute/UnauthRoute and apply to routes

## Redux
- 
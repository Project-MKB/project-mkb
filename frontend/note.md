## login page conflict with beto

- beto opens a PR > approve > merge
- go to my local
- run git checkout dev
- run git pull upstream dev
- run git checkout redux-skeleton
- run git merge dev
- fix merge conflict
- continue working on redux-skeleton

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

- create store.js, reducers/actions folders
- store: combine reducers > create store with reducers, initialState, compose(applyMiddleware(thunk), redux devtool extension)
- Wrap app with `<Provider store={store}>`
- create actions
- create reducer
- connect store on components and map state/actions

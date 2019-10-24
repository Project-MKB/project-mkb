const firebase = require('../fbConfig')
const firebasemock = require('firebase-mock')
const mockauth = new firebasemock.MockAuthentication();



const users = {
  create: async function (credentials) {
    try {
      return await firebase.auth().createUserWithEmailAndPassword(credentials);
    } catch (error) {
      console.error(error)
    }

  }
};




users.create({
  email: 'ben@example.com',
  password: 'examplePass'
});
// mockauth.auth().flush();

// mockauth.auth().getUserByEmail('ben@example.com').then(function (user) {
//   console.assert(user, 'ben was created');
// });


describe('Sample test', () => {
  it('should run jest', () => {
    expect(true).toBe(true)
  })
})
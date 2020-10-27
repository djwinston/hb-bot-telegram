const StateController = require('./state')
const state = require('../state')
console.log(`TCL>>>: state`, state.users)


class UserController {
 static addUser (user) {
   console.log('user', user)
   console.log('state', state.users)
   state.users.push(user)
   StateController.update({users: state.users})
 }
}

module.exports = UserController
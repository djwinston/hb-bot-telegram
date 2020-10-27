const StateController = require('./stateController')
const state = require('../state')
const {users} = state

class UserController {
  static isUserExist (id) {
   return users.find(user => user.id === id )
  }
 static addUser (user) {   
   if (UserController.isUserExist(user.id)) {
     console.log('user exist')
     return
   }
   state.users.push(user)
   StateController.update(state)
 }
}

module.exports = UserController
const state = require("../state");
const DBController = require("./dbController");

// ** init state
// ** read file
// ** set state
class StateController extends DBController {
  static async fill() {
    const readFile = await StateController.readDB();
    Object.assign(state, readFile);
    console.log('init state', state)
  }
  static update(state) {
    // const result = Object.assign(state, newState);
    StateController.writeDB(state);
    console.log('update state', state)
    // return Object.assign(state, objectItem);
  }
  static init() {
    !state.chat_id && !state.users.length
      ? StateController.fill()
      : new Error("Initial state Error");
  }
}

module.exports = StateController;

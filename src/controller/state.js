const state = require("../state");
const DBController = require("../controller/db");

// ** init state
// ** read file
// ** set state
class StateController extends DBController {
  static async fill() {
    const readFile = await StateController.readDB();
    return Object.assign(state, readFile);
  }
  static update(objectItem) {
    const result = Object.assign(state, objectItem);
    StateController.writeDB(result);
    return Object.assign(state, objectItem);
  }
  static init() {
    return !state.chat_id && !state.users.length
      ? StateController.fill()
      : new Error("Initial state Error");
  }
}

module.exports = StateController;

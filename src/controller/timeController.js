const dayjs = require("dayjs");
const state = require("../state/index");
const StateController = require('./stateController')

const now = () => new Date().toLocaleString();

setInterval(() => {
  state.now = now();
  // todo enable StateController.update(state)
}, 5000);

class TimeController {
  static weekday() {
    const days = [
      "",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const numberOfDay = dayjs().day();
    return days[numberOfDay];
  }
  static year() {
    return dayjs().year();
  }
  static month() {
    return dayjs().month();
  }
  static day() {
    return dayjs().date();
  }
  static hours() {
    return dayjs().hour();
  }
  static minutes() {
    return dayjs().minute();
  }
  static today() {}
  static now() {}
}

module.exports = TimeController;

const dayjs = require("dayjs");

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

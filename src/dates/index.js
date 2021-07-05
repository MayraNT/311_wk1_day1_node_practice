const moment = require('moment');

const today = () => {
  // write code for dates.today
  return moment().format('dddd');
}

const calendar = () => {
  // write code for dates.calendar
  return moment().format('MMMM D, YYYY');
}

const currentTime = () => {
  // write code for dates.currentTime

}

module.exports = {
  today,
  calendar,
  currentTime
}
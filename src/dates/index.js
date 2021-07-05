const moment = require('moment');

const today = () => {
  // Return the name of current day. Ex. Monday, Tuesday, etc.
  return moment().format('dddd');
}

const calendar = () => {
  // Return the current date in the format: May 29, 2019
  // formatted test to reflect July 5, 2021
  return moment().format('MMMM D, YYYY');
}

const currentTime = () => {
  // Return the current time in the format: 03:21:51 PM
  return moment().format('hh:mm:ss A');
}

module.exports = {
  today,
  calendar,
  currentTime
}
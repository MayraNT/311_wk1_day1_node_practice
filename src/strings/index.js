const split = (str, delim) => {
  // Split a string on a given delimiter and return the resulting array
  return str.split(delim);
}

const pairs = (str) => {
  // Break a string into pairs of two characters each. Return the array of pairs
  let pairArr = [];
  for (let i = 0; i < str.length; i += 2) {
    pairArr.push(str.slice(i, i + 2));
  }
  return pairArr;
}

const reverse = (str) => {
  // Reverse the characters in a given string
  return str.split('').reverse().join('');
}

module.exports = {
  split,
  pairs,
  reverse
}
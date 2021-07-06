const isEven = (num) => {
  // Return a boolean that represents whether a given number is even
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const sum = (arr) => {
  // Return a value that represents the sum of an array of numbers
  const reduceFn = (x, y) => x + y;
  return arr.reduce(reduceFn);
}

const comboSum = (arr, sum) => {
  // Determine if any combination of numbers in an array equals a given sum. Return a boolean
  // Hint: Loop in loop OR indexOf for diff
  // if any two numbers in the array add up to sum, return true
  // if they don't, return false
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === sum) {
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}
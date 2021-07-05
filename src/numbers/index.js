const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  const reduceFn = (x, y) => x + y;
  return arr.reduce(reduceFn);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  // if any two numbers in the array equal the sum
  // if they add up to 14 return true
  // if they don't, return false
  
}

module.exports = {
  isEven,
  sum,
  comboSum
}
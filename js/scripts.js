// Business Logic

function numExtractor(number) {
  const numArray = [];
  let string = number.toString();
  let currentNumber = 0;
  // Loops through the numbers, starting from the right.
  // Every other number gets pushed into the array.
  for (let i = 1; i <= string.length; i += 2) {
    currentNumber = string.charAt(string.length - i);
    numArray.push(currentNumber);
  }
  // Double the numbers in the array.
  const doubledValues = numArray.map(function (value) {
    return value * 2;
  });
  return doubledValues;
}
// User Interface Logic

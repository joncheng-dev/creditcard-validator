// Business Logic

// Adding all numbers of array.
function arrayAddition(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}

// Adding every other number, starting from the second to right-most.
function arrayAdditionSkip(numbersArray) {
  let sum = 0;
  for (let i = 1; i < numbersArray.length; i += 2) {
    sum += numbersArray[numbersArray.length - 1 - i];
  }
  return sum;
}

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
  console.log("Every other digit: " + numArray);
  // Double the numbers in the array.
  const doubledValues = numArray.map(function (value) {
    return value * 2;
  });
  console.log("Values doubled: " + doubledValues);
  // Numbers:
  // If value is <10, simply place in array.
  // If 10 or greater, add digits, then place into array.
  const singleDigitsArray = doubledValues.map(function (element) {
    if (element < 10) {
      return element;
    } else {
      let sum = element
        .toString()
        .split("")
        .map(Number)
        .reduce(function (a, b) {
          return a + b;
        }, 0);
      return sum;
    }
  });
  console.log("If double digits, added together: " + singleDigitsArray);
  // Now add all the digits together.
  // Array with single digits -- all.
  // Array original -- with every other digit starting from 2nd to rightmost.
  let originalNumbersArray = String(number)
    .split("")
    .map(function (number) {
      return Number(number);
    });
  let totalSum = 0;
  totalSum =
    arrayAddition(singleDigitsArray) + arrayAdditionSkip(originalNumbersArray);
  return totalSum;
}

// User Interface Logic

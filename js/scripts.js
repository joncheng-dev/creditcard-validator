// Business Logic

// Utility
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

// STEP 2 of validation.
// Function checking the first digits on the left, and determining issuer.
function issuerCheck(number, digits) {
  const numArray = [];
  let string = number.toString();
  for (let i = 0; i < digits; i++) {
    numArray.push(string.charAt(i));
  }
  // Number array here will go into the next part.
  if (numArray[0] === "3") {
    if (numArray[1] === "4" || numArray[1] === "7") {
      return "American Express";
    } else {
      return "Not a valid credit card number";
    }
  } else if (numArray[0] === "4") {
    return "Visa";
  } else if (numArray[0] === "5") {
    return "Master Card";
  } else if (numArray[0] === "6") {
    return "Discover";
  } else {
    return "Not a valid credit card number";
  }
}

// Function counting number of digits of number entered;
// STEP 3 of validation.
function digitCounter(number) {
  if (number.toString().length === 15) {
    return "American Express";
  } else if (number.toString().length === 16) {
    return true;
  } else {
    return false;
  }
}

// STEP 1 of validation.
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
  // Now let's check the right most digit of totalSum.
  // console.log("Total is: " + totalSum);
  // console.log("Rightmost digit is: " + totalSum.toString().charAt(1));
  return totalSum.toString().charAt(1);
}

// Function that takes a number, puts it through different functions, and checks its validity.
function ccNumberCheck(number) {
  // STEP 1: Check Luhn Algorithm
  if (numExtractor(number) === "0") {
    // This is a valid number. Continue to determine what type.
    // STEP 2: Check first digits of number.
    let digits = 2;
    let stepTwo = issuerCheck(number, digits);
    if (stepTwo === "American Express") {
      // Check for digits using step 3.
      if (digitCounter(number) === "American Express") {
        return "American Express";
      } else {
        return "Invalid number (reason 3)";
      }
    } else if (stepTwo === "Visa") {
      // Check for digits using step 3.
      if (digitCounter(number) === true) {
        return "Visa";
      } else {
        return "Invalid number (reason 4)";
      }
    } else if (stepTwo === "Master Card") {
      // Check for digits using Step 3.
      if (digitCounter(number) === true) {
        return "Master Card";
      } else {
        return "Invalid number (reason 5)";
      }
    } else if (stepTwo === "Discover") {
      // Check for digits using Step 3.
      if (digitCounter(number) === true) {
        return "Discover";
      } else {
        return "Invalid number (reason 6)";
      }
    } else {
      return "Invalid number (reason 2).";
    }
  } else {
    // Invalid number. Ends.
    return "Invalid number (reason 1).";
  }
}

// User Interface Logic

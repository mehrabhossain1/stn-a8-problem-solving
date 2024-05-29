/*
Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// const sum = evenNumbers.reduce(
//   (accumulator, number) => accumulator + number,
//   0
// );

// console.log(sum);

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

// Define the function to calculate the sum of all even numbers using reduce
const sumOfEvenNumbers = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    // Check if the current number is even
    if (currentValue % 2 === 0) {
      // Add it to the accumulator if it's even
      return accumulator + currentValue;
    } else {
      // If it's odd, just return the accumulator
      return accumulator;
    }
  }, 0); // Initialize the accumulator to 0
};

// Call the function with the array
const sumEven = sumOfEvenNumbers(numbers);

console.log(sumEven); // Output: 30

/* Task 1: Array Filtering And Mapping
Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result. */

// Solution-1
const persons = [
  { name: "Mehrab", age: 25, gender: "male" },
  { name: "Fatima", age: 30, gender: "female" },
  { name: "Munna", age: 20, gender: "male" },
  { name: "Rahima", age: 35, gender: "female" },
  { name: "Tamanna", age: 23, gender: "female" },
];

const females = persons.filter((person) => person.gender === "female");
const names = females.map((person) => person.name);
console.log("1.", names);

/* 
Task 2: Object Manipulation
Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
*/

// Solution-2
const books = [
  { title: "Book 1", author: "Author 1", year: 2000 },
  { title: "Book 2", author: "Author 2", year: 2005 },
  { title: "Book 3", author: "Author 3", year: 2010 },
  { title: "Book 4", author: "Author 4", year: 2015 },
  { title: "Book 5", author: "Author 5", year: 2020 },
];

function getBookTitles(books) {
  return books.map((book) => book.title);
}

const bookTitles = getBookTitles(books);
console.log("2.", bookTitles);

/*
Task 3: Sorting Objects
Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
*/

// Solution-3
const cars = [
  { make: "Car 1", model: "Model 1", year: 2010 },
  { make: "Car 2", model: "Model 2", year: 2015 },
  { make: "Car 3", model: "Model 3", year: 2028 },
  { make: "Car 4", model: "Model 4", year: 2020 },
  { make: "Car 5", model: "Model 5", year: 2018 },
  { make: "Car 6", model: "Model 6", year: 2022 },
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log("3.", sortedCars);

/*
Task 4: Leap Year Checker
Write A Function That Determines Whether A Given Year Is A Leap Year.
*/

// Solution-4
function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

const leapYear = isLeapYear(2023);
console.log("4.", leapYear);

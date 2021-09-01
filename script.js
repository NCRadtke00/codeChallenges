//  In this challenge you'll be developing an inventory application for a bookstore. You need to create a book class, which provides information about different books in the store. Each book will have a title, author, ISBN, and keep track of the number of available copies. You'll need a way to get each book's availability. If there aren't any copies of the book left, the function should return out of stock. If there are less than 10 copies, the function should return low stock. Otherwise the function should return in stock. You'll also need a function for selling a book. This will take the number of copies sold and subtract it from the total number of copies. If no argument is passed, we can default the number of copies to sell to one. Lastly, you'll want a restock function, which takes in a number of copies to restock and adds it to the total number of copies. If no argument is passed, we can default the restock number to five. You should use JavaScript's class keyword as well as a getter function for the availability method.

const { I } = require("caniuse-lite/data/agents");

// // function solution
// function (title, author, ISBN, numCopies){
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;

// }
// Book.prototype.getAvailablity = function() {
//     if(this.numCopies == 0){
//         return 'Out of Stock';
//     }else if (this.numCopies < 10){
//         return 'Low stock';
//     }
//     return 'In stock';
// }
// Book.prototype.sell = function(numCopiesSold = 10) {
//     this.numCopies -= numCopiesSold;
// }
// Book.prototype.restock = function(numCopiesStocked = 5){
//     this.numCopies += numCopiesStocked;
// }
// //class solution
// class Book {
//     constructor(title, author, ISBN, numCopies){
//         this.title = title;
//         this.author = author;
//         this.ISBN = ISBN;
//         this.numCopies = numCopies;
//     }
//     get availablity(){
//         return this.getAvailablity();
//     }
//     getAvailablity = function() {
//         if(this.numCopies == 0){
//             return 'Out of Stock';
//         }else if (this.numCopies < 10){
//             return 'Low stock';
//         }
//         return 'In stock';
//     }
//     sell(numCopiesSold = 10) {
//         this.numCopies -= numCopiesSold;
//     }
//     restock(numCopiesStocked = 5){
//         this.numCopies += numCopiesStocked;
//     }
// }
// const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123321, 5);
// console.log(HungerGames.getAvailablity());
// HungerGames.restock(12);
// console.log(HungerGames.getAvailablity());
// HungerGames.sell(17);
// console.log(HungerGames.getAvailablity());

// addition to prevChallenge
// //this challenge we'll use inheritance to create a variation on our Book class. Your goal is to create a TechnicalBook class that inherits from the Book class in the previous challenge. This class will also take a title, author, ISBN, and number of copies, but will take a fifth argument, an edition. The TechnicalBook class will also provide a getEdition function which returns the following string. The current version of this book is, followed by the book's edition. You should use a template literal for this phrase.
// class Book {
//   constructor(title, author, ISBN, numCopies) {
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
//   }
//   get availablity() {
//     return this.getAvailablity();
//   }
//   getAvailablity = function () {
//     if (this.numCopies == 0) {
//       return "Out of Stock";
//     } else if (this.numCopies < 10) {
//       return "Low stock";
//     }
//     return "In stock";
//   };
//   sell(numCopiesSold = 10) {
//     this.numCopies -= numCopiesSold;
//   }
//   restock(numCopiesStocked = 5) {
//     this.numCopies += numCopiesStocked;
//   }
// }
// const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123321, 5);

// class TechnicalBook extends Book {
//   constructor(title, author, ISBN, numCopies, edition) {
//     super(title, author, ISBN, numCopies);
//     this.edition = edition;
//   }
//   getEdition() {
//     return `The current version of this book is ${this.edition}.`;
//   }
// }
// const CrackingTheCodingInterview = new TechnicalBook(
//   "Cracking The Coding Interview",
//   "Gayle Laackmann McDowell",
//   1209115,
//   7,
//   "2.3"
// );
// console.log(CrackingTheCodingInterview.availablity);
// console.log(CrackingTheCodingInterview.getEdition());
//create a movie object that takes in five arguments. Title, director, genre, release year and rating. The movie prototype should have a function called get overview, which logs the following overview for each film. Movie, a genre film directed by director was released in release here. It received a rating of rating. You can use either class or function syntax to create your prototype. Once you create your movie object, create a few movies to test it out.
// //function solution
// function Movie(title, director, genre, releaseYear, rating){
//     this.title = title;
//     this.director =director;
//     this.genre = genre;
//     this.releaseYear = releaseYear;
//     this.rating = rating;
// }
// Movie.prototype.getOverview = function(){
//     return `${this.title}, a ${this.genre} film  directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
// }
// //class solution
// class Movies{
//     constructor(title, director, genre, releaseYear, rating){
//         this.title = title;
//         this.director =director;
//         this.genre = genre;
//         this.releaseYear = releaseYear;
//         this.rating = rating;
//     }
//     get overview(){
//         return this.gerOverview;
//     }
//     getOverview(){
//         return `${this.title}, a ${this.genre} film  directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
//     }

// }
// const Spiderman = new Movie("Spiderman", "Sam Raini", "Action", 2002, 87);
// const Batman = new Movie("Batman","Tim Burton", "Action","1989",99)
// console.log(Spiderman);
// console.log(Spiderman.getOverview);
// console.logg(Batman.getOverview);
//In this challenge you're planning the menu for an Italian dinner. Some of your guests are vegetarian and you need to create a list of vegetarian menu items for them. Given an array of Italian dishes, create an unordered list of all vegetarian dinner options. Each menu item is an object containing the dish name and a Boolean variable that indicates whether the dish is vegetarian. You should dynamically generate the list items in the DOM from the array of vegetarian items.
// const dishes = [
//   {
//     name: "Eggplant Parmesan",
//     vegetarian: true,
//   },
//   {
//     name: "Spaghetti & Meatballs",
//     vegetarian: false,
//   },
// ];
// function vegetarianMenu(menu) {
//   const menuNode = document.querySelector("#menu");
//   const vegetarianOptions = menu.filter(
//     (option) => option.isVegetarian == true
//   );
//   vegetarianOptions.forEach((option) => {
//     let dish = document.createElement("li");
//     dish.textContent = option.name;
//     menuNode.appendChild(dish);
//   });
//   const menu = [
//     {
//       name: "Eggplant Parmesan",
//       vegetarian: true,
//     },
//     {
//       name: "Spaghetti & Meatballs",
//       vegetarian: false,
//     },
//     {
//       name: "Stuffed shells",
//       vegetarian: false,
//     },
//   ];
// }
// vegetarianMenu(menu);

//In this challenge, you will create a user object that has three properties, username, password, and age. Using JavaScript Symbols, ensure that username and password are private fields on the user character. This means they shouldn't be accessible by calling user.username or user.password.
// const username = Symbol("username");
// const password = Symbol("password");

// const user = {
//   [username]: "FancyCat",
//   [password]: "whiskers1",
//   age: 25,
// };
// console.log(user.username);
// console.log(user.password);

//in this challenge, you'll create a ticking clock in the document body. The index.html file contains a div with an ID of clock. Using callback functions and DOM manipulation, output a ticking digital clock which displays the current hours, minutes, and seconds.
function clock() {
  const clockNode = document.querySelector("#clock");
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleDateString();
    clockNode.textContent = tick;
  }, 1000);
}
clock();
//For this challenge, you'll use array and object de-structuring to return a list of students. Create a function called get students, which takes one argument, Classroom classroom will contain a bullion value called has teaching assistant and class list, which is an array of people in the classroom. The first value in class lists will be the teacher. If has teaching assistant is true, The second value in the class list is the teaching assistant and the remaining values in the class list are the students. If has teaching assistant is false, The second value through the end of the class list are the students. Your job is to return a list of students. You must use object and array de-structuring.
// function getStudents(classroom){
//     let {hasTechingAssistant, classList} = classroom;
//     let teacher, teachingAssistant, students;
//     if(hasTechingAssistant){
//         [teacher, teachingAssistant, ...students] = classList;
//     }else{
//         [teacher, ...students] = classList;
//     }
//     return students;
// }
// console.log(
// getStudents({
//     hasTechingAssistant:false,
//     classList: ["Jack","John", "Ben", "Jen", "Ren", "Jackie"],
// })
// )
//we'll use closures to create three buttons. Each button will represent a different color and we'll change the background color of the document body to the color value. Using a closure, create a function called change color that accepts a color value. When the button is clicked, the closure should be invoked and the body background color should be updated.
// function makeBodyBlue() {
//   document.body.style.background = "#0f62fe";
// }
// function makeBodyGreen() {
//   document.body.style.background = "#42be65";
// }
// function makeBodyPink() {
//   document.body.style.background = "#ff7eb6";
// }
// document.querySelector(`#blue`).addEventListener("click", makeBodyBlue);
// document.querySelector(`#green`).addEventListener("click", makeBodyGreen);
// document.querySelector(`#pink`).addEventListener("click", makeBodyPink);
function changeColor(color) {
  return function () {
    document.body.style.background = color;
  };
}
const bgColorBlue = changeColor("#0f62fe");
const bgColorGreen = changeColor("#42be65");
const bgColorPink = changeColor("#ff7eb6");
document.querySelector(`#blue`).addEventListener("click", bgColorBlue);
document.querySelector(`#green`).addEventListener("click", bgColorGreen);
document.querySelector(`#pink`).addEventListener("click", bgColorPink);
// you'll be using the array reduce function to calculate the total bill from a trip to the coffee shop with your friends. Each person has ordered some number of coffees and you offer to pay the entire bill. Given an array of integers where each value is greater than zero, calculate the total price of all coffees. Each coffee costs $1.25. You should return your answer in the following format. The total bill is, followed by the total. You should use template literals for your return value. Template literals also known as template strings allow you to combine JavaScript expressions and strings into one. Where you previously had to use the plus sign to concatenate strings with values you can now use back ticks. And where you need to evaluate variable or expression, you can surround it with a dollar sign and curly brackets.

// function coffeeDate(coffeeArr) {
//   let coffeeSum = coffeeArr.reduce(
//     (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
//   );//array reduce method
//   return `The total bill is $${coffeeSum * 1.25}`; //template string
// }
// console.log(coffeeDate([2, 5, 7, 1, 4]));

//You're in charge of building a website for a food truck festival. Each vendor has a menu. And some vendors might be serving the same item. Given an array of food trick menus, where each menu is an array. Return one master menu which contains all food items that will be served at the festival without duplicates. We'll take this unique menu and use DOM manipulation to create an unordered list containing these unique menu items. You should have an unordered list with an ID of combined-menu in your HTML that you can use to append list node children to.
// function foodTruckFestival(menus) {
//   let flatMenus = menus.flat();
//   let combinedMenu = new Set();
//   flatMenus.forEach((item) => {
//     combinedMenu.add(item);
//   });
//   const menuNode = document.querySelector("#combined-menu");
//   for (let item of combinedMenu) {
//     let foodNode = document.createElement("li");
//     foodNode.innerText = item;
//     menuNode.appendChild(foodNode);
//   }
// }
// foodTruckFestival([
//   ["Tacos", "Chips and Salsa", "Fries"],
//   ["Pizza"],
//   ["Burger", "Fries"],
//   ["water", "soda", "beer"],
// ]);
// you're going to build a generator function that returns the next stop in a list of stops along the Metro North Railroad in New York. Each time a button is clicked, the next stop in the journey should be returned until we reach Grand Central Station in New York City. The train stops are Poughkeepsie, Newburgh, Peekskill, Yonkers, Bronx, and Grand Central. You should use a generator function to yield these values. Console log each stop and once we reach the final stop, Grand Central, console log "We made it!" Once we reach our final stop, the next stop button should be disabled.
function* getStops() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}
const nycTrainline = getStops();
const nextStopButton = document.querySelector("#next-stop");
nextStopButton.addEventListener("click", () => {
  let currentStop = nycTrainline.next();
  if (currentStop.done) {
    console.log("We made it!");
    nextStopButton.setAttribute("disabled", true);
  } else {
    console.log(currentStop.value);
  }
});

//Suppose you're playing Scrabble with your best friend and you want to know how many possible combinations of letters you can make with the letters you have. Create a recursive function that takes in a string of letters and calculates the number of possible combinations you can play. Calculating the number of possible combinations of a set of values is known as a factorial. We achieve a factorial solution by starting with the total number of items in the set and multiplying it by each proceeding number of values until we reach one.
// function numPermutations(letters) {
//   let total;
//   for (let i = 1; i <= letters.length; i++) {
//     if (total === undefined) {
//       total = i;
//       continue;
//     }
//     total *= i;
//   }
//   return total;
// }
// function numPermutations(letters) {
//   if (letters.length == 1) {
//     return 1;
//   }
//   return letters.length * numPermutations(letters.slice(1));
// }
// console.log(numPermutations("hello"));
// console.log(numPermutations("yellow"));
//n this challenge, you're building a new component for your space, a brand new social media application that allows you to find friends. This component space user's top five friends. Given some JSON data returned from the random user API, you should dynamically generate image thumbnails for the top five friends. You should use the Fetch API to call the random user API. You can use the URL, https//randomuser.me/api/?result=5. To get data for five users. Your solution should also use async/await.

async function getUsers() {
  let people = await fetch("https://randomuser.me/api/?results=5");
  let data = await people.json();
  console.log(data);
  const timeline = document.querySelector("#timeline");
  data.results.forEach((person) => {
    let image = document.createElement("img");
    image.src = person.picture.medium;
    timeline.appendChild(image);
  });
}
getUsers();

//Let's create a function that takes in a blog post title and returns the URL-ified version. To create a URL friendly version of a blog post title, all punctuation must be removed, all letters must be lowercase, and all spaces must be joined by hyphens. You should use a combination of regular expressions and string prototype functions to complete this challenge.
// function urlify(blogTitle) {
//   const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
//   const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
//   return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
// }
// console.log(urlify("How I Got into Programming!!!"));
// console.log(urlify("I've got a new job :)"));

//In this challenge, you'll build a password validator for a signup form, which tests whether or not a user's desired password is strong enough. You must use a regular expression in your solution. If the user's password is strong enough, return the string, your password is valid. Otherwise, return the string, your password is invalid. You must also use a ternary operator to return a Boolean value. Ternary operators check to see if a certain condition has been met. We follow the expression we want to check with a question mark, and if the condition is truthy, it will execute the code following the question mark. The truthy expression is followed by a colon. And if the condition is falsy, it will execute the following code. Here are the criteria which must be met in order for a password to be strong enough. The password must have at least one lowercase letter. The password must have at least one uppercase letter. It must contain one digit and one special character. And it must be at least eight characters long.
// function checkPassword(password) {
//   let oneLowerCaseLetter = /(?=.+[a-z])/;
//   let oneUpperCaseLetter = /(?=.+[A-Z])/;
//   let oneDigit = /(?=.+[0-9])/;
//   let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
//   let minimumEightCharacters = /(?=.{8,})/;
//   let isValid =
//     oneLowerCaseLetter.test(password) &&
//     oneUpperCaseLetter.test(password) &&
//     oneDigit.test(password) &&
//     oneSpecialCharacter.test(password) &&
//     minimumEightCharacters.test(password);
//   return isValid ? "Your password is valid" : "Your password is invalid";
// }
// console.log(checkPassword("abc")); //invalid
// console.log(checkPassword("914vfreqQ$!")); //valid
//FizzBuzz Write a short program that prints each number from 1 to 100 on a new line. For each multiple of 3, print "Fizz" instead of the number. For each multiple of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function FizzBuzz(input) {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
FizzBuzz();

//Reverse an array in javascript var myArray = [20, 40, 60, 70, 75, 80, 100];

var myArray = [20, 40, 60, 70, 75, 80, 100];
console.log(myArray.reverse()); //solution one

function reverseArr(input) {
  var ret = new Array();
  for (var i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
} //solution two iterating through for loop pushing the last object of the prevarray into a new array
var revMyArray = reverseArr(myArray);
console.log(revMyArray);

var revMyArrayTwo = [].concat(myArray).reverse(); // solution 3 concating the array and then reversering the broken apart array not recommended
console.log(revMyArrayTwo);
//could also use .map



//highest value in the array 
function getMaxValue (arrary[]) {
  if(arrary[] === null){
      return console.log ("Arrary cannot be null, must have value")
  } if else  (arrary.length === 0){
      return console.log ("Arrary cannot be empty, must have value")
      //throw new error("arrary cannot be empty, must have value")
  }
  let maxValue = arrary[0];
  for (let i = 0; i < arrary.length; i++){
      if (maxValue =< arrary[i]){
          maxValue = arrary[i] 
      }
  }
  return maxValue
  }
  //2000
  maxValue = getMaxValue ([100,99,50,49,101])
  console.log("this is the max value" + maxValue )
  


  /////////////////////////////////////////////////////////////////////////////////////
  //Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition. The binary number returned should be a string. 
  (A1)
  function addBinary(a,b) {
  var a, b;
  var c = a + b;
  return c.toString(2);
  }
  (A2)
  function addBinary(a,b){
    return (a+b).toString(2)
  }

  //	In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//Notes:
//All numbers are valid Int32, no need to validate them. There will always be at least one number in the input string. Output string must be two numbers separated by a single space, and highest number is first.
(A1)
function highAndLow(numbers){
  numbers = numbers.split('').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0,numbers);
}
(A2)
function highAndLow(numbers){
  numbers = numbers.split('');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
function toCamelCase(str){
  return str.split(/[,_-]+/).
  map((s,i)=> i !== 0 ? s.charAt(0).
  toUpperCase() + s.slice(1) : s).join('');
}
function toCamelCase(str){
  str = str.split('');
  return str.map(function(el, i){
    if(el == '-' || el == '_'){
      el = str[i+1].toUpperCase();
      str.splice(i+1, 1);
    }
    return el;
  }).join('');
}
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_,c)=> c.toUpperCase());
}

//					strings and arrays 
	//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.
 // It should look like this:Sam Harris => S.H;
  
  function abbrevName(name){
    var nam = name.split(' ');
    return num[0].charAt(0).toUpperCase()+ '.' + nam[1].charAt(0).toUpperCase();
  }
  function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }
  function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }
  

  
	//Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime. Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
  //Requirements
 // You can assume you will be given an integer input.
 // You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
 // NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
  
  function isPrime(num) {
    if ( num < 2) return false;
    for ( var i=2; i < num; i++){
      if ( num % i ==0) {
        return false;}}
    return true;
  }
  
	//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
  //Rules for a smiling face: Each smiley face must contain a valid pair of eyes.
  // Eyes can be marked as : or ;
  //A smiley face can have a nose but it does not have to. 
  //Valid characters for a nose are - or ~
  //Every smiling face must have a smiling mouth that should be marked with either ) or D .  No additional characters are allowed except for those mentioned.
  function CountSmileyFaces(arr){
    const matches = arr.join('').match(/[;:][-~]?[(D)]/g);
    return matches ? matches.length : 0;
  }


  //	Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
//Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
var countBits = function(n) {
  var bits =[];
  var count = 0;
  bits = n.toString(2).split('');
  for (var i=0; i <bits.length;i++){
    if(bits[i] == 1){
      count++;
    }
  }
  return count;
};
console.log(countBits(174)); // code works!

//Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digital_root(n) {
  return ( n - 1) % 9 + 1 ;
}
console.log(digital_root(12)) //3 checks out //3
console.log(digital_root(13)) //4 checks out //4
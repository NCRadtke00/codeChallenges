//  In this challenge you'll be developing an inventory application for a bookstore. You need to create a book class, which provides information about different books in the store. Each book will have a title, author, ISBN, and keep track of the number of available copies. You'll need a way to get each book's availability. If there aren't any copies of the book left, the function should return out of stock. If there are less than 10 copies, the function should return low stock. Otherwise the function should return in stock. You'll also need a function for selling a book. This will take the number of copies sold and subtract it from the total number of copies. If no argument is passed, we can default the number of copies to sell to one. Lastly, you'll want a restock function, which takes in a number of copies to restock and adds it to the total number of copies. If no argument is passed, we can default the restock number to five. You should use JavaScript's class keyword as well as a getter function for the availability method.

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
// function clock() {
//   const clockNode = document.querySelector("#clock");
//   return setInterval(() => {
//     let date = new Date();
//     let tick = date.toLocaleDateString();
//     clockNode.textConect = tick;
//   }, 1000);
// }
// clock();
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

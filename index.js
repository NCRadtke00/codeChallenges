//  In this challenge you'll be developing an inventory application for a bookstore. You need to create a book class, which provides information about different books in the store. Each book will have a title, author, ISBN, and keep track of the number of available copies. You'll need a way to get each book's availability. If there aren't any copies of the book left, the function should return out of stock. If there are less than 10 copies, the function should return low stock. Otherwise the function should return in stock. You'll also need a function for selling a book. This will take the number of copies sold and subtract it from the total number of copies. If no argument is passed, we can default the number of copies to sell to one. Lastly, you'll want a restock function, which takes in a number of copies to restock and adds it to the total number of copies. If no argument is passed, we can default the restock number to five. You should use JavaScript's class keyword as well as a getter function for the availability method. 

// function solution
function (title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;

}
Book.prototype.getAvailablity = function() {
    if(this.numCopies == 0){
        return 'Out of Stock';
    }else if (this.numCopies < 10){
        return 'Low stock';
    }
    return 'In stock';
}
Book.prototype.sell = function(numCopiesSold = 10) {
    this.numCopies -= numCopiesSold;
}
Book.prototype.restock = function(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
}
const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123321, 5);
console.log(HungerGames.getAvailablity());
HungerGames.restock(12);
console.log(HungerGames.getAvailablity());
HungerGames.sell(17);
console.log(HungerGames.getAvailablity());
//class solution
class Book {
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    get availablity(){
        return this.getAvailablity();
    }
    getAvailablity = function() {
        if(this.numCopies == 0){
            return 'Out of Stock';
        }else if (this.numCopies < 10){
            return 'Low stock';
        }
        return 'In stock';
    }
    sell(numCopiesSold = 10) {
        this.numCopies -= numCopiesSold;
    }
    restock(numCopiesStocked = 5){
        this.numCopies += numCopiesStocked;
    }
}

//create a movie object that takes in five arguments. Title, director, genre, release year and rating. The movie prototype should have a function called get overview, which logs the following overview for each film. Movie, a genre film directed by director was released in release here. It received a rating of rating. You can use either class or function syntax to create your prototype. Once you create your movie object, create a few movies to test it out.
//function solution
function Movie(title, director, genre, releaseYear, rating){
    this.title = title;
    this.director =director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}
Movie.prototype.getOverview = function(){
    return `${this.title}, a ${this.genre} film  directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
}
//class solution
//class solution
class Movies{
    constructor(title, director, genre, releaseYear, rating){
        this.title = title;
        this.director =director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }
    get overview(){
        return this.gerOverview;
    }
    getOverview(){
        return `${this.title}, a ${this.genre} film  directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    }

}
const Spiderman = new Movie("Spiderman", "Sam Raini", "Action", 2002, 87);
const Batman = new Movie("Batman","Tim Burton", "Action","1989",99)
console.log(Spiderman);
console.log(Spiderman.getOverview);
console.logg(Batman.getOverview);

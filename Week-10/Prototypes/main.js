// Step 1 - Create a new object constructor for person
function Person (firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.type = "Person";

  // Step 2 - Assign a new Date object to a dob property
  this.dob = new Date(dob);

  // Step 8 - Create the following new date format function in the Person constructor object
  this.dateFormat = function () {
    let year = this.dob.getFullYear();
    let month = this.dob.getMonth() + 1;
    let day = this.dob.getDate();

    return `${month}/${day}/${year}`;
  }
}

// Step 3 - Create a new person with your First Name and your Last Name who has your dob (date of birth)
let shaun = new Person("Shaun", "McKinnon", "1978/12/22");

// Step 4 - Using console.log(), output the person object.
console.log(shaun);

// Step 5 - Access the first and last name properties
console.log(shaun.firstName);
console.log(shaun.lastName);

// Step 6 - Access the dob property
console.log(shaun.dob)

// Step 7 - Access the first and last name properties
console.log(shaun.dob.toLocaleDateString("en-CA"));

// Step 9 - Using console.log(), call your new dateFormat function
console.log(shaun.dateFormat());

// Step 10 - Using console.dir() output a new String
console.dir(new String());

// Step 11 - Using console.dir() output a new Number
console.dir(new Number());

// Step 12 - Using console.dir() output a new Array
console.dir(new Array());

// Step 13 - Using console.dir() output a new Object
console.dir(new Object());

// Step 14 - Using console.dir() output a new Function
console.dir(new Function());

// Step 15 - Add a function to the Person.prototype that will return the person's current age
Person.prototype.getAge = function () {
  let diff = Date.now() - this.dob.getTime();
  let age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}

// Step 16 - Using console.log() output the currently instantiated person's age
console.log(shaun.getAge());

// Step 17 - Add a new constructor function called SuperHero
let SuperHero = function (alias, firstName, lastName, dob) {
  // Step 18 - Add a new property called alias and assign it the alias argument
  this.alias = alias;
  // Step 19 - .call() the Person object to return its context to SuperHero
  Person.call(this, firstName, lastName, dob);
}

// Step 20 - Assign the Person.prototype to the SuperHero.prototype
SuperHero.prototype = Object.create(Person.prototype);

// Step 21 - Create a new super hero
let theIncredibleHulk = new SuperHero(
  "The Incredible Hulk",
  "Bruce",
  "Banner",
  "1956-11-7"
);

// Step 22 - Using console.log, output the date of birth using the .dateFormat() and the age using the .getAge()
console.log(theIncredibleHulk.dateFormat(), theIncredibleHulk.getAge());

// Step 23 - Create a new object literal called Food
const Food = {
  // Step 24 - Create an init function
  init: function (type) {
    this.type = type;
  },
  // Step 25 - Create an eat function
  eat: function () {
    return `You ate the ${this.type}`;
  },
  // Step 26 - Create a property called category with the value 'Food'
  category: 'Food'
}

// Step 27 - Create a new object called Vegetable using Object.create(Food)
const Vegetable = Object.create(Food);

// Step 28 - Initialize the Vegetable
Vegetable.init('Vegetable');

// Step 29 - Override the .eat() function
Vegetable.eat = function () {
  return 'Eat your veggies!!!';
}

// Step 30 - Create a new object called Carrot using Object.create(Vegetable)
const Carrot = Object.create(Vegetable);

// Step 31 - Initialize the Carrot
Carrot.init('Carrot');

// Step 32 - Output the 3 levels of properties:
// At the Carrot level:
console.log(Carrot.type);

// At the Vegetable level:
console.log(Carrot.eat());

// At the Food level:
console.log(Carrot.category);
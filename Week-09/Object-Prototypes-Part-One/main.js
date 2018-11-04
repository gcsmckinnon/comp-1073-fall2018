// Step 1 - Create the following object:
let person = {
  name: "Shaun",
  age: 39,
  interests: ["programming", "Diablo", "cage fighting"],
  talk: function () {
    console.log("I'm 39");
  },
  walk: function (s) {
    posX += 5;
  },
  toHTML: function (selector) {
    let div = document.createElement('div');
    div.textContent = this.bio();
    document.querySelector(selector).append(div);
  },
  bio: function () {
    console.log(this);
    return `Hello I am ${this.name} and I'm a ${this.age} year old interested in ${this.interests[0]}`;
  }
}

// Step 2 - Output all the properties on the object
let objProps = Object.getOwnPropertyNames(person);
console.log(objProps.join(', '));

// Step 3 - Set the #personName, #personAge, and #personInterests text content to our the corresponding object properties
const personName = document.querySelector('#personName');
personName.textContent = person.name;

const personAge = document.querySelector('#personAge');
personAge.textContent = person.age;

const personInterests = document.querySelector('#personInterests');
personInterests.textContent = person.interests.join(', ');

// Step 4 - Create a new function definition for the property

// Step 5 - Set the #personBio text content to return value of the bio property function
const personBio = document.querySelector('#personBio');
personBio.textContent = person.bio();

// Step 6 - Using the this keyword, replace "Shaun", 39, and "computer programmer" with the correct object property values

// Step 7 - First, modify the bio method so it says "Hello, I am ${this.name} and I'm a ${this.age} year old interested in ${this.interests[0]}."

// Step 8 - Next, add a toHTML method that creates a new dif and adds it to page based on a selector you pass it

// Step 9 - Last, call the new toHTML method externally passing '#toHTMLBio' as the argument
person.toHTML('#toHTMLBio');

// Step 10 - Add a new property called hasPets and set it's value to true (if you have pets) or false (if you don't)
person.hasPets = true;

// Step 11 - Add a new property called petCount and set it's value to the number of pets you have (0 if you have none)
person.petCount = 3;

// Step 12 - Add a new property called petToHTML and set it's value to the following function defintion
person.petToHTML = function (selector) {
  let div = document.createElement('div');

  if (this.hasPets) {
    div.textContent = `${this.name} has ${this.petCount} pets.`;
  } else {
    div.textContent = `${this.name} doesn't have any pets.`;
  }

  document.querySelector(selector).append(div);
}

// Step 13 - Last, call the new petToHTML method passing '#doYouGotPets' as the argument
person.petToHTML('#doYouGotPets');
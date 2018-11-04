// Step 1 - Create a new object constructor for person
function Person (name, age, interests) {
  this.name = name;
  this.age = age;
  this.interests = interests;
  this.bio = function () {
    console.log(this);
    return `Hello I am ${this.name} and I'm a ${this.age} year old interested in ${this.interests[0]}`;
  };
  this.toHTML = function (selector) {
    let div = document.createElement('div');
    div.textContent = this.bio();
    document.querySelector(selector).append(div);
  };
}

// Step 2 - Add the bio method to the object constructor function

// Step 3 - Add the toHTML method to the object constructor function

// Step 4 - Create a new person named Dave who is 42 and likes cars, boats, and planes
let dave = new Person("Dave", 42, ["cars", "boats", "planes"]);

// Step 5 - Create a new person named Arsh who is 25 and likes jewelry, money, and wealth
let arsh = new Person("Arsh", 25, ["jewelry", "money", "wealth"]);

// Step 6 - Create a new person named You who is Your age and likes things you like
let shaun = new Person("Shaun", 39, ["Diablo", "Hitman", "water polo"]);

// Step 7 - Add a gender property to the You object and assign it a value
shaun.gender = "unicorn";
console.log(shaun.gender, dave.gender, arsh.gender);

// Step 8 - Output Dave's bio to the #bio1 HTMLElement
dave.toHTML('#bio1');

// Step 9 - Output Arsh's bio to the #bio1 HTMLElement
arsh.toHTML('#bio2');

// Step 10 - Output the following to the HTMLElement #bio3
const bio3 = document.querySelector('#bio3');
bio3.textContent = `${shaun.name} is a ${shaun.age} year old ${shaun.gender} who likes ${shaun.interests[0]}.`;
// Step 1 - Create a new object called person
let person = {
  // Step 2 - Give you object a name, age, gender, and an array of interests.
  name: 'Shaun',
  age: 39,
  gender: 'male',
  interests: ['comics', 'programming', 'movies'],
  // Step 3 - Give your object a function called greeting and have it output a welcome message.
  greeting: function () {
    console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`);
  },
  // Step 4 - Give your object a function called bio and have it output their name, age, gender and interests in a logical sentence.
  bio: function () {
    console.log(`${this.name} is a ${this.age} year old ${this.gender} who is interested in ${this.interests.join(' and ')}.`);
  }
}
console.log(person);

// Step 5 - Call the greeting().
person.greeting();

// Step 6 - Call the bio().
person.bio();

// Step 7 - Output the name and age.
console.log(person.name, person.age);

// Step 8 - Select and store the <h1> element.
const h1 = document.querySelector('h1');
console.log(h1);

// Step 9 - Change the text content of the h1 element object.
h1.textContent = "I changed this!";

// Step 10 - Change the text colour of the h1 element object.
h1.style.color = "pink";

// Step 11 - Make the h1 object text uppercase
h1.textContent = h1.textContent.toUpperCase();

// Step 12 - Select and store the first <ol> element in the HTML document.
const firstOl = document.querySelector('ol');
console.dir(firstOl);

// Step 13 - Select an store the property's value that contains a NodeList.
const children = firstOl.children;
console.log(children);

// Step 14 - Select an store the property's value that contains an HTMLCollection.
const childNodes = firstOl.childNodes;
console.log(childNodes);

// Step 16 - Using a for/of loop, iterate through the children and output the text content of each child.
for (let child of children) {
  console.log(child.textContent);
}

// Step 17 - Using a .forEach() loop, iterate through the children and output the text content of each child.
childNodes.forEach(function (node) {
  console.log(node.textContent);
});
// Step 1 - Grab the arrays section and store it in a variable
let sectionArrays = document.querySelector( '#arrays' );


// Step 2a - Create an array of superheroes
let superheroTeams = ['The Avengers', 'The Fantastic Four', 'X-Force'];

// Step 2c - Output the arrays to the console
console.log(superheroTeams);

// Step 2d - Turn our array into a multidimensional array
let teamMembers = [['The Incredible Hulk', 'Captain America', 'Iron Man'], ['Invisible Woman', 'The Thing', 'Human Torch', 'Mr. Fantastic'], ['Warpath', 'Cable', 'Domino']];
console.log(teamMembers)
//////////////////////////////////////////////////////////
// NOTE:                                                //
// You will notice that if you click the grey arrow     //
// beside the array, and then the grey arrow beside     //
// the __proto__ property, you will see a list of       //
// properties and methods that the array has available  //
// to it. This is because arrays are technically an     //
// object. This means that you can access data members  //
// attached to your array.                              //
//                                                      //
// The difference between a property and a method when  //
// perusing the list may not be obvious. If you look    //
// closely, you'll notice that the methods have a tiny  //
// 'ƒ' character beside them. If you want to call these //
// you must proceed them with a set of parenthesis: (). //
//////////////////////////////////////////////////////////


// Step 3a - Access an element in a single dimension array
console.log(superheroTeams[2]);

// Step 3b - Access an element in a multidimensional array
console.log(teamMembers[1][3]);

// Step 3c - Access the last element in an array
console.log(superheroTeams[0]);

// Step 3d - Access the last element in an array
console.log(superheroTeams[superheroTeams.length - 1]);


// Step 4a - Getting the length of the array
console.log("Length of the Superhero Teams Array is ", superheroTeams.length);
console.log("Length of the Team Members Array is ", teamMembers.length);
///////////////////////////////////////////////////
// NOTE:                                         //
// .length is a property, not a method, so it is //
// important to remember NO parenthesis ()!      //
///////////////////////////////////////////////////

// Step 4b - Using array length to display the elements
// to the console
for (let i = 0; i < superheroTeams.length; i++) {
  console.log(superheroTeams[i]);
}

// Step 4c - Output both arrays to the screen
// Step 4c.1 - Create an unordered list element
let teamUl = document.createElement('ul');

// Step 4d - Create a for loop to iterate through the teams
for (let i = 0; i < superheroTeams.length; i++) {
  // Step 4d.1 - Create a new li element
  let teamNameLi = document.createElement('li');

  // Step 4d.2 - Set the text of the li to be the superhero team name
  teamNameLi.textContent = superheroTeams[i];

  // Step 4d.3 - Append the li to the teamUl element
  teamUl.append(teamNameLi);

  // Step 4e - Create an unordered list to nest inside
  // the parent order list. This will store our team
  // members 
  let memberUl = document.createElement('ul');

  // Step 4e.1 - Create a for loop to iterate through the team members
  for (let j = 0; j < teamMembers[i].length; j++) {
    // Step 4e.2 - Create a new li element for the member name
    let memberNameLi = document.createElement('li');

    // Step 4e.3 - Set the text of the li to be the member name
    memberNameLi.textContent = teamMembers[i][j];

    // Step 4e.4 - Append the element to the memberUl element
    memberUl.append(memberNameLi);
  }

  // Step 4f - Create a new li to store the memberUl
  // When dealing with nested lists, they MUST be wrapped in an
  // LI tag to be valid HTML
  let teamMemberLi = document.createElement('li');

  // Step 4f.1 - Append the teamMemberli to the memberUl
  teamMemberLi.append(memberUl);

  // Step 4f.2 - Append the teamMemberLi to the teamUl
  teamUl.append(teamMemberLi);
}

// Step 4g - Append the teamUl to our section element
sectionArrays.append(teamUl);
////////////////////////////////////////////////////////////////
// NOTE:                                                      //
// Nested loops are common, and we're going to look at them   //
// more thoroughly in the next lesson. Arrays come with       //
// some better looping methods compared to the standard for   //
// loop. We'll explore those also next lesson. We have enough //
// methods available to us to keep us busy!                   //
////////////////////////////////////////////////////////////////


// Step 5 - Converting an array to a string
// Step 5a - Using .join()
let arrayStr = superheroTeams.join(", ");
console.log(arrayStr);

// Step 5b - Using toString()
arrayStr = superheroTeams.toString();
console.log(arrayStr);

// Step 6 - Converting the string back into an array
// Step 6a - If the string has no trailing spaces after the comma
let stringArr = arrayStr.split(",");
console.log(stringArr);

// Step 6b - If the string does have trailing spaces
arrayStr = superheroTeams.join(", ");
stringArr = arrayStr.split(",");
console.log(stringArr);
//////////////////////////////////////////////////////////////
// NOTE:                                                    //
// .split() is a literal method and will only split on the  //
// character combination you provide it. If your string has //
// spaces after the commas, you'll have extra spaces at the //
// beginning of each element after the first one.           ////////////////////////////////////////////////////////////////

// Step 6c - Fix the proceeding/trailing spaces
stringArr = arrayStr.split(/\s*,\s*/);
console.log(stringArr);
///////////////////////////////////////////////////////////////
// NOTE:                                                     //
// Regular Expression is a very handy way to perform more    //
// flexible conditionals, robust searches, and cool parsing! /////////////////////////////////////////////////////////////////


// Step 7 - Adding a new element to the end of an array
// Step 7a - A single element
superheroTeams.push('X-Men');
console.log(superheroTeams);

// Step 7b - Add multiple elements to a multidimensional array
// Step 7b.1 - Add an empty array to teamMembers
teamMembers.push([]);

// Step 7b.1 - Fetch the last element (the empty array) and push
// 3 new team members into it
teamMembers[teamMembers.length - 1].push('Wolverine', 'Phoenix', 'Cyclops');
console.log(teamMembers);

// Step 7c - Capture the new length of the array
console.log(superheroTeams.push('Shaun-Force'));

// Step 7d - Add an element to the beginning of the array
superheroTeams.unshift('Alpha Flight');
console.log(superheroTeams);

// Step 7e - Add an element at a specific point in an array
superheroTeams.splice(2, 0, 'Awesome Sauce Group');
console.log(superheroTeams);

// Step 8 - Remove an element from the array
// Step 8a - From the end of the array
let removed = superheroTeams.pop();
console.log(superheroTeams);
console.log(removed);

// Step 8b - From the end of the array
removed = superheroTeams.shift();
console.log(superheroTeams);
console.log(removed);

// Step 8c - Remove a specific item in the array
removed = superheroTeams.splice(1, 1);
console.log(superheroTeams);
console.log(removed);

// Step 8d - Remove and replace a specific item in an array
superheroTeams.splice(0, 1, 'The Mighty Avengers');
console.log(superheroTeams);


// Step 9 - Find and replace an element in an array
// This is for a single dimensional array. If you have
// a multidimensional array, a recursive or iterative
// method would be a better solution.
let find = superheroTeams.indexOf("X-Men");
superheroTeams.splice(find, 1, 'The Uncanny X-Men');
console.log(superheroTeams);


// Step 10 - Advanced Array Methods
// Step 10a - .filter()
let result = superheroTeams.filter(function (ele) {
  return ele.length > 8;
});
console.log(result);
//////////////////////////////////////////////////////////////////////
// NOTE:                                                            //
// .filter() filters an array list based on an evaluated condition. //
// If the condition is false, then the element will not be included //
// in the array.                                                    ////////////////////////////////////////////////////////////////////////


// Step 10b - .map()
result = superheroTeams.map(function (ele) {
  return ele.toUpperCase();
});
console.log(result);

// And the handy arrow function method
result = superheroTeams.map(ele => ele.toUpperCase());
console.log(result);
///////////////////////////////////////////////////////
// NOTE:                                             //
// .map() executes a callback and returns the result //
// back to the array, replacing the element with     //
// the new value.                                    /////////////////////////////////////////////////////////

// Step 10c - .sort
result = superheroTeams.sort();
console.log(result);

// Step 10c.1 - .sort with callback comparison
result = [1, 3, 7, 56, 3, 5, 10].sort(function (a, b) {
 return a > b;
});
console.log(result)

// Step 10d - .reverse
result = superheroTeams.reverse();
console.log(result);

// Step 10e - .reduce
result = [1, 2, 3, 4].reduce(function (a, b) {
  return a + b;
});
console.log(result);
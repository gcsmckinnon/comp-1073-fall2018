// Step 1 - Make a single line comment
// Hello, I'm a single line comment

// Step 2 - Make a mulitline comment
/* Hello,
   I'm a mulitline
   comment
*/

// Step 3 - Declare a variable
// Step 4 - Get the DOM element <h1>
var myName = document.querySelector('h1');

// Step 5 - Log the variable contents to the screen
console.log(myName);

// Step 6 - Change the text to read "Introducing {fullname}"
myName.textContent = 'Introducing The Legend';

// Step 7 - Change the history text to read a brief bio about you
var myBio = document.querySelector('p');
myBio.textContent = 'It was a dark and stormy night on December 22nd, 1978. The world became a brighter place when my birth was announced!';


// Step 8 - Change the colour of the font for the <h1>
myName.style.color = 'darkred';

// Step 9 - Select the h2 and change it to have an underline using chaining
document.querySelector('h2').style.textDecoration = 'underline';

// Step 10 - Create an array of names
var names = ['The Man', 'The Mystery', 'Shaun McKinnon'];

// Step 10a - Create a counter
var count = 0;

// Step 10b - Create an iterator to display one name after the other
setInterval(function () {
  // Step 10c - Replace the text for myName
  myName.textContent = names[count];

  // Step 10d - Increment count if still less than the names array length
  if (count < names.length - 1) {
    count += 1
  }
}, 1500); // Step 10e - Pass a delay in milliseconds
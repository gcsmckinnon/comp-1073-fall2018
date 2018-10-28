// Step 1 - Select and store the H1 element into a variable using the method document.getElementsByTagName().
const byTagName = document.getElementsByTagName( 'h1' );
console.log(byTagName.constructor.name);

// Step 2 - Select and store this element into a variable using the method document.getElementById().
const byId = document.getElementById( 'select-ex-1' );
console.log(byId.constructor.name);

// Step 3 - Select and store these elements into a variable using the method document.getElementsByClassName().
const byClassName = document.getElementsByClassName( 'select-ex-2' );
console.log(byClassName.constructor.name);

// Step 4 - Select and store the h2 tag on the page using document.querySelector().


// Step 5 - Select and store this element using the ID using document.querySelector().


// Step 6 - Select and store this element using the class using document.querySelector().


// Step 7 -  Select and store all the article tags on the page using document.querySelectorAll().


// Step 8 -  Select and store all the paragraph tags on the page using document.querySelectorAll().


// Step 9 -  Select and store all of these elements using the class using document.querySelectorAll().


// Step 10 - Using the document.querySelector() method, select the first <ol> on the page.
// Step 11 - Using the <ol> HTMLElement you selected, now select all the <li> HTMLElements within it.
// Step 12 - Next, select all the <p> HTMLElements within the first <section> HTMLElement using only a CSS Selector.
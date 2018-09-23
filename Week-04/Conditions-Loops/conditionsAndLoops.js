// Step 1 - Select the message element and store in a variable
const message = document.querySelector('#message');

// Step 2 - Select the products element and store it in a variable
const productsEle = document.querySelector('#products');


// Step 3a - Create a prompt and store the value in a variable
let name = prompt("What is your name?");

// Step 3b - Check if the name is filled and greater than 0
if (name && name.length > 0) {
  // Step 3c - Change the message content to "Hello name" using string interpolation
  message.textContent = `Hello, ${name}.`;
} // Close the if condition


// Step 4a - Create a confirmation to confirm the user is here to shop
let confirmation = confirm("Are you here to shop?");

// Step 4b - If they are here to shop, then welcome them with a cheery message
if (confirmation === true) {
  message.textContent += "\nWelcome to our shop, Big spender!!!";
} else {
  // Step 4c - Otherwise condemn them to hell
  message.textContent += "\nCool beans, cheapskate!";
} // Close the if/else condition


// Step 5a - Select and store the nav element (just the unordered list)
const nav = document.querySelector('nav ul');

// Step 5b - Create an array with some navigation titles
const navItems = ["About Us", "Our Products", "Contact Us"];

// Step 5c - Using a for loop, iterate through the list
for (let i = 0; i < navItems.length; i++) {
  // Step 5d - Create and store a li as a nav item
  let navItem = document.createElement('li');

  // Step 5e - Create and store an anchor element
  let navLink = document.createElement('a');

  // Step 5f - Set the nav link href attribute of the anchor element to a plain ol' hash
  navLink.setAttribute('href', '#');

  // Step 5g - Set the text of the nav link to the navItems value at this index of the loop
  navLink.textContent = navItems[i];

  // Step 5h - Using a single line if condition, check if the item is "Our Products"
  // and add a class of 'active' to it
  if (navItems[i] === "Our Products") navLink.classList.add('active');

  // Step 5i - Append the nav link to the nav item
  navItem.appendChild(navLink);

  // Step 5j - Append the nav item to the nav
  nav.appendChild(navItem);
} // end of loop


// Step 6a - Create a function called outputProducts that takes
// 2 parameters: "price" and "search".
// Give them both default values
function outputProducts (price = null, search = "") {
  // Step 6b - Clear the products element
  productsEle.innerHTML = "";

  // Step 6c - Loop through the products pulling out each category
  for (let category in products) {
    // Step 6d - Loop through all the products
    for (let product of products[category]) {
      // Step 6e - Check if the price is null, or greater than the price provided
      if (price === null || product.price > price) {
        // Step 6f - Create a new regular expression using the search variable and the greedy flag
        let searchTerm = new RegExp(search, 'g');

        // Step 6g - Check if the search term is empty or if there is a match
        // by first changing the name to lowercase and comparing it to our
        // regular expression
        if (search === "" || product.name.toLowerCase().match(searchTerm)) {
          // Step 6h - Clone the product template from the HTML layout and set it to a variable
          let productTemplate = document.querySelector('#productTemplate').content.cloneNode(true);

          // Step 6i - Select the image, name, and product elements in the
          // product template and set them to variables
          let img = productTemplate.querySelector('img');
          let name = productTemplate.querySelector('h4');
          let price = productTemplate.querySelector('p');

          // Step 6j - Check if the product has the property
          // and then set the property of the element
          if (product.src) img.src = product.src;
          if (product.name) img.alt = product.name;
          if(product.name) name.textContent = product.name;
          if(product.price) price.textContent = `$${product.price}`;

          // Step 6k - Append the product template to the products element
          productsEle.appendChild(productTemplate);
        } // Close the if condition
      } else {
        // Step 6l - Otherwise continue on to the next
        // iteration
        continue;
      } // Close the if/else condition
    } // Close the loop
  } // Close the loop
} // Close the function

// Step 6m - Output the products for the first time
outputProducts();


// Step 7a - Select and store the price range element
const priceRange = document.querySelector('#priceRange');

// Step 7b - Select and store the price range value
const priceRangeValue = document.querySelector('#priceRangeValue');

// Step 7c - Get and set the price range value
priceRangeValue.textContent = priceRange.value;

// Step 7d - Create and event listener that will listen if the input has changed
priceRange.oninput = function () {
  // Step 7e - Capture the value of the price range or default its value to 10
  priceRange.value = priceRange.value > 0 ? priceRange.value : 10;

  // Step 7f - Set the value of the price range text to equal the price range value
  priceRangeValue.textContent = priceRange.value;

  // Step 7g - Call the outputProducts and pass it the price range value
  outputProducts(priceRange.value);
} // Close the event listener


// Step 8a - Select and store the search input field
const searchInput = document.querySelector('#searchInput');

// Step 8b - Create an event listener that will call when
// the search field changes
searchInput.oninput = function (event) {
  // Step 8c - Capture the search value from the event
  let searchValue = event.target.value

  // Step 8d - Only filter if the value has 3 or greater
  // characters or the search value is blank
  if (searchValue.length >= 3 || searchValue === "") {
    // Step 8e - Capture the price
    let price = priceRangeValue.textContent;

    // Step 8f - Output the products passing the price and search value
    outputProducts(price, searchValue);
  } // Close the if condition
} // Close the event listener
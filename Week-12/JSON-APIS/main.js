// PART 1
// Step 1 - Set our request URL
const requestURL = "https://gcsmckinnon.netlify.com/week-12/data.json";

// Step 2 - Fetch our URL
fetch(requestURL)
// Step 3 - Using the .then() method, pass a callback function that receives the response object and returns the Promise with the .json() method
.then(function (response) {
  return response.json();
})
// Step 4 - Add another .then() method passing a callback that will receive our data object
.then(wesGotsDatum);

// PART 2
// Step 1 - Remove the callback from Step 4 and replace it with wesGotsDatum

// Step 2 - Write a named function called wesGotsDatum and have it accept an argument called data
// Add a console log to show the data
function wesGotsDatum (data) {
  console.log(data);

  // Step 3a - Select and store the #company h2
  const company = document.querySelector('#company');

  // Step 3b - Output the company name from the data object
  company.textContent = data["companyName"];

  // Step 4a - Select and store the #slogan p tag
  const slogan = document.querySelector('#slogan');

  // Step 4b - Output the slogan from the data object
  slogan.textContent = data["slogan"];

  // Step 5a - Select and store the product dimensions (#productDimensions)
  const productDimensions = document.querySelector('#productDimensions');

  // Step 5b - Store the products data array in a variable called products
  let products = data["products"];

  // Step 5c - Iterate through the products
  for (let product of products) {
    // Step 5d - Create a new div element
    let proDi = document.createElement('div');

    // Step 5e - Add a sentence that displays the product name and the dimensions
    proDi.textContent = `${product["name"]}: ${product["dimensions"]["height"]}cm x ${product["dimensions"]["width"]}cm x ${product["dimensions"]["length"]}cm`;

    // Step 5d - Append the new element to the product dimensions element
    productDimensions.append(proDi);
  }
}
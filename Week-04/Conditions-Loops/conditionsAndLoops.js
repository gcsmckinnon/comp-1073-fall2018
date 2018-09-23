const message = document.querySelector('#message');
const productsEle = document.querySelector('#products');


let name = prompt("What is your name?");
if (name && name.length > 0) {
  message.textContent = `Hello, ${name}.`;
}


let confirmation = confirm("Are you here to shop?");
if (confirmation === true) {
  message.textContent += "\nWelcome to our shop, Big spender!!!";
} else {
  message.textContent += "\nCool beans, cheapskate!";
}


const priceRange = document.querySelector('#priceRange');
const priceRangeValue = document.querySelector('#priceRangeValue');
priceRangeValue.textContent = priceRange.value;
priceRange.oninput = function () {
  priceRange.value = priceRange.value > 0 ? priceRange.value : 10;
  priceRangeValue.textContent = priceRange.value;

  // clear the product display property
  outputProducts(priceRange.value);
}


const searchInput = document.querySelector('#searchInput');
searchInput.oninput = function (event) {
  let searchValue = event.target.value

  if (searchValue.length >= 3 || searchValue === "") {
    let price = priceRangeValue.textContent;

    outputProducts(price, searchValue);
  }
}


const nav = document.querySelector('nav ul');
const navItems = ["About Us", "Our Products", "Contact Us"];
for (let i = 0; i < navItems.length; i++) {
  let navItem = document.createElement('li');
  let navLink = document.createElement('a');
  navLink.setAttribute('href', '#');
  navLink.textContent = navItems[i];

  if (navItems[i] === "Our Products") navLink.classList.add('active');

  navItem.appendChild(navLink);
  nav.appendChild(navItem);
}

function outputProducts (price = null, search = "") {
  productsEle.innerHTML = "";

  for (let category in products) {
    for (let product of products[category]) {
      if (price === null || product.price > price) {
        let searchTerm = new RegExp(search, 'g');
        if (search === "" || product.name.toLowerCase().match(searchTerm)) {
          let productTemplate = document.querySelector('#productTemplate').content.cloneNode(true);
          let img = productTemplate.querySelector('img');
          let name = productTemplate.querySelector('h4');
          let price = productTemplate.querySelector('p');

          if (product.src) img.src = product.src;
          if (product.name) img.alt = product.name;
          if(product.name) name.textContent = product.name;
          if(product.price) price.textContent = `$${product.price}`;

          productsEle.appendChild(productTemplate);
        }
      } else {
        continue;
      }
    }
  }
}

outputProducts();
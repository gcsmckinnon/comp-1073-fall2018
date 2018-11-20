function API (selector) {
  this.selector = selector;

  this.apiCall = function (url) {
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      document.querySelector(selector).textContent = response;
    });
  }

  this.geekJoke = function () {
    return this.apiCall('https://geek-jokes.sameerkumar.website/api');
  }

  this.ronSwanson = function () {
    return this.apiCall('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  }
}

const api = new API('h1');
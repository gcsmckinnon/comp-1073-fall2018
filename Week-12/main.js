// const requestURL = "https://gcsmckinnon.netlify.com/week-12/data.json";
const requestURL = "https://insult.mattbas.org/api/insult.json";
const headers = new Headers();

fetch(requestURL, {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Method": "GET",
    "Origin": "https://gcsmckinnon.netlify.com"
  },
  method: 'GET',
  cache: 'no-cache',
  credentials: 'include',
  mode: 'cors'
})
.then(function (response) {
  console.log(response);
  return response.json();
})
.then(function (data) {
  console.log(data);
});
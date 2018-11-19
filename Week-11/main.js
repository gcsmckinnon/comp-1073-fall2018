let myHeaders = new Headers();

fetch('https://insult.mattbas.org/api/insult.html', {
  method: 'GET',
  mode: 'no-cors',
  headers: myHeaders,
  cache: 'default',
})
.then(function(response) {
  console.log(response)
})
.then(function(myJson) {
  console.log(myJson)
});
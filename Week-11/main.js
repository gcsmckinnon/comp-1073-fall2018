fetch('https://insult.mattbas.org/api/insult')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(JSON.stringify(myJson));
});
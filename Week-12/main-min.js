const requestURL = "https://gcsmckinnon.netlify.com/week-12/data.json";

const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
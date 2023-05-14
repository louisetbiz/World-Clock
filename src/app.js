setInterval(function(){
//PARIS
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format("dddd, Do, YYYY");
parisTimeElement.innerHTML = parisTime.format("hh:mm:ss [<small>]A[</small>]");
}, 1000);


setInterval(function(){
//LISBON
let lisbonElement = document.querySelector("#lisbon");
let lisbonDateElement = lisbonElement.querySelector(".date");
let lisbonTimeElement = lisbonElement.querySelector(".time");
let lisbonTime = moment().tz("Europe/Lisbon");
lisbonDateElement.innerHTML = lisbonTime.format("dddd, Do, YYYY");
lisbonTimeElement.innerHTML = lisbonTime.format("hh:mm:ss [<small>]A[</small>]");
}, 1000);

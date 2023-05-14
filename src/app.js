function updateTime(){
//PARIS
let parisElement = document.querySelector("#paris");
if (parisElement){
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format("dddd, Do, YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

//LISBON
let lisbonElement = document.querySelector("#lisbon");
if (lisbonElement){
let lisbonDateElement = lisbonElement.querySelector(".date");
let lisbonTimeElement = lisbonElement.querySelector(".time");
let lisbonTime = moment().tz("Europe/Lisbon");
lisbonDateElement.innerHTML = lisbonTime.format("dddd, Do, YYYY");
lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss [<small>]A[</small>]");
}}


function updateCity(event){
let cityTimeZone = event.target.value;
let cityTime = moment().tz(cityTimeZone);
let cityName = cityTimeZone.replace("_"," ").split("/")[1];
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML =  `

            
        <div class="city"> 
        <div id="cityName"> ${cityName}
        <div class="date"> ${cityTime.format("ddd, Do YYYY")}</div></div>
        <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div></div>


`}


updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");


citiesSelectElement.addEventListener("change", updateCity);
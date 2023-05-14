function updateTime(){
//PARIS
let parisElement = document.querySelector("#paris");

let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format("dddd, Do, YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");


//SYDNEY
let sydneyElement = document.querySelector("#sydney");

let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML = sydneyTime.format("dddd, Do, YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");


//BAHIA
let bahiaElement = document.querySelector("#bahia");

let bahiaDateElement = bahiaElement.querySelector(".date");
let bahiaTimeElement = bahiaElement.querySelector(".time");
let bahiaTime = moment().tz("America/Bahia");
bahiaDateElement.innerHTML = bahiaTime.format("dddd, Do, YYYY");
bahiaTimeElement.innerHTML = bahiaTime.format("h:mm:ss [<small>]A[</small>]");
}


function updateCity(event){
let cityTimeZone = event.target.value;
if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
}
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